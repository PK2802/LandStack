import React, { useState } from 'react';
import type { Parcel } from '../types';
import { PARCELS_DATA } from '../data/parcelsData';
import { X, Play, CheckCircle2, XCircle, Terminal, Database, Server, RefreshCw } from 'lucide-react';

interface SpatialSimulatorModalProps {
  initialParcel: Parcel | null;
  onClose: () => void;
  onSelectParcel: (parcel: Parcel) => void;
}

export const SpatialSimulatorModal: React.FC<SpatialSimulatorModalProps> = ({
  initialParcel,
  onClose,
  onSelectParcel
}) => {
  const [selectedParcelId, setSelectedParcelId] = useState<string>(
    initialParcel ? initialParcel.id : PARCELS_DATA[0].id
  );
  const [activeEngine, setActiveEngine] = useState<'permit' | 'mutation'>('permit');
  const [isRunning, setIsRunning] = useState(false);
  const [queryResult, setQueryResult] = useState<{
    status: 'APPROVED' | 'REJECTED' | 'BLOCKED' | 'CLEARED';
    title: string;
    message: string;
    details: string[];
    sqlQuery: string;
    latencyMs: number;
    jsonPayload: any;
  } | null>(null);

  const currentParcel = PARCELS_DATA.find(p => p.id === selectedParcelId) || PARCELS_DATA[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setQueryResult(null);

    setTimeout(() => {
      setIsRunning(false);

      if (activeEngine === 'permit') {
        // Evaluate Building Permit
        const intersectsWater = currentParcel.zoning.ecoRestrictionFlag && currentParcel.zoning.restrictionDescription?.includes('buffer');

        if (intersectsWater) {
          setQueryResult({
            status: 'REJECTED',
            title: 'Building Permit Clearance Rejected (Spatial Collision Detected)',
            message: `REJECTED: Parcel ${currentParcel.khasraOrPlotNo} intersects statutory buffer of water body / natural drainage stream.`,
            details: [
              `PostGIS ST_Intersects(p.geom, ST_Buffer(wb.geom, 50)) evaluated to TRUE.`,
              `Distance to drainage channel axis: 18.2 meters (Statutory minimum: 30.0 meters).`,
              `Permissible Action: No permanent RCC construction permitted under State Water Bodies Protection Act.`,
              `Recommendation: File application for zero-foundation agrarian/eco-tourism shade structure only.`
            ],
            sqlQuery: `SELECT \n  p.ulpin, \n  p.khasra_no, \n  ST_Intersects(p.geom, ST_Buffer(wb.geom, 50.0)) AS collision_detected, \n  ST_Distance(p.geom, wb.geom) AS proximity_meters \nFROM parcels p, spatial_restrictions wb \nWHERE p.ulpin = '${currentParcel.ulpin}' \n  AND wb.layer_type = 'WATER_BODY_BUFFER';`,
            latencyMs: 3.4,
            jsonPayload: {
              ulpin: currentParcel.ulpin,
              engine: 'MUNICIPAL_PERMIT_EVALUATOR_v2',
              statutory_clearance: false,
              violation_code: 'ERR_WATER_BODY_PROXIMITY_VIOLATION',
              max_permissible_fsi: 0.0,
              rejection_statute: 'State Water Protection & Environmental Conservation Act'
            }
          });
        } else {
          setQueryResult({
            status: 'APPROVED',
            title: 'Building Permit Spatial Clearance Approved',
            message: `APPROVED: Parcel ${currentParcel.khasraOrPlotNo} compliant with ${currentParcel.zoning.zoneName} (${currentParcel.zoning.zoneCode}).`,
            details: [
              `Zero intersection with protected riparian buffers or transmission line rights-of-way.`,
              `Maximum Permissible FSI: ${currentParcel.zoning.maxPermissibleFSI}.`,
              `Maximum Ground Coverage: ${currentParcel.zoning.maxGroundCoveragePercent}%.`,
              `Statutory Setback: ${currentParcel.zoning.setbackRequirement}.`,
              `Municipal Token Generated: #BLD-PERMIT-CLR-${currentParcel.id.replace(/-/g, '')}`
            ],
            sqlQuery: `SELECT \n  p.ulpin, \n  zp.zone_code, \n  ST_Contains(zp.geom, p.geom) AS zone_compliant, \n  bool_or(ST_Intersects(p.geom, r.geom)) AS has_restriction \nFROM parcels p \nJOIN zoning_polygons zp ON ST_Intersects(p.geom, zp.geom) \nLEFT JOIN spatial_restrictions r ON ST_Intersects(p.geom, r.geom) \nWHERE p.ulpin = '${currentParcel.ulpin}' \nGROUP BY p.ulpin, zp.zone_code;`,
            latencyMs: 2.8,
            jsonPayload: {
              ulpin: currentParcel.ulpin,
              engine: 'MUNICIPAL_PERMIT_EVALUATOR_v2',
              statutory_clearance: true,
              zone_classification: currentParcel.zoning.zoneCode,
              max_permissible_fsi: currentParcel.zoning.maxPermissibleFSI,
              clearance_certificate_token: `MUNI-CLR-${currentParcel.ulpin}-OK`
            }
          });
        }
      } else {
        // Mutation & Sale Pre-Validation
        if (currentParcel.encumbrance.hasLien) {
          setQueryResult({
            status: 'BLOCKED',
            title: 'Mutation & Deed Registration Blocked (Active Financial Lien)',
            message: `MUTATION BLOCKED: Active charge of INR ${currentParcel.encumbrance.lienAmountINR?.toLocaleString('en-IN')} registered with ${currentParcel.encumbrance.bankName}.`,
            details: [
              `Sub-Registrar Office deed registration halted under Section 17 & 89 of Registration Act, 1908.`,
              `Lending Institution: ${currentParcel.encumbrance.bankName} (${currentParcel.encumbrance.branchName}).`,
              `CERSAI Charge Reference: ${currentParcel.encumbrance.chargeIdCERSAI}.`,
              `Mandatory Requirement: Form-II Bank Discharge Satisfaction Certificate (NOC) must be digitally signed before Patwari Form-XII mutation can be sanctioned.`
            ],
            sqlQuery: `SELECT \n  m.ulpin, \n  m.mortgagee_name, \n  m.lien_amount_inr, \n  m.charge_status, \n  m.cersai_ref \nFROM sro_encumbrance_register m \nWHERE m.ulpin = '${currentParcel.ulpin}' \n  AND m.charge_status = 'ACTIVE_CHARGE';`,
            latencyMs: 4.1,
            jsonPayload: {
              ulpin: currentParcel.ulpin,
              engine: 'SRO_MUTATION_PREVALIDATOR_v1',
              mutation_permitted: false,
              lock_reason: 'ACTIVE_BANK_MORTGAGE',
              mortgagee: currentParcel.encumbrance.bankName,
              lien_amount: currentParcel.encumbrance.lienAmountINR,
              statutory_action: 'REVENUE_TRANSFER_BLOCKED_PENDING_NOC'
            }
          });
        } else if (currentParcel.ror.disputeFlag) {
          setQueryResult({
            status: 'BLOCKED',
            title: 'Mutation Blocked (Court Injunction / Revenue Dispute Stay)',
            message: `MUTATION BLOCKED: Active title injunction pending in Revenue Court.`,
            details: [
              `Pending Legal Dispute: ${currentParcel.ror.disputeDetails}`,
              `Court Reference: ${currentParcel.ror.courtCaseRef}`,
              `Revenue Status: Sub-Registrar barred from registering alienation deeds.`
            ],
            sqlQuery: `SELECT \n  d.ulpin, \n  d.case_ref, \n  d.stay_order_active \nFROM revenue_court_dockets d \nWHERE d.ulpin = '${currentParcel.ulpin}' \n  AND d.stay_order_active = TRUE;`,
            latencyMs: 3.9,
            jsonPayload: {
              ulpin: currentParcel.ulpin,
              engine: 'SRO_MUTATION_PREVALIDATOR_v1',
              mutation_permitted: false,
              lock_reason: 'REVENUE_COURT_INJUNCTION',
              case_ref: currentParcel.ror.courtCaseRef
            }
          });
        } else {
          setQueryResult({
            status: 'CLEARED',
            title: 'Mutation & Deed Registration Pre-Validation Cleared',
            message: `MUTATION CLEARED: Zero registered encumbrances or title disputes found in CERSAI & SRO records.`,
            details: [
              `Encumbrance Check: Nil lien reported by Scheduled Commercial Banks.`,
              `Revenue Court Clearance: Nil lis-pendens notices indexed.`,
              `Automated Form-XII Patwari Mutation Workflow Token generated: #MUT-SANCTION-${currentParcel.id.replace(/-/g, '')}`,
              `Status: Ready for digital deed execution at Sub-Registrar Office.`
            ],
            sqlQuery: `SELECT \n  p.ulpin, \n  COUNT(m.id) AS active_charges, \n  COUNT(d.id) AS active_disputes \nFROM parcels p \nLEFT JOIN sro_encumbrance_register m ON p.ulpin = m.ulpin AND m.charge_status = 'ACTIVE_CHARGE' \nLEFT JOIN revenue_court_dockets d ON p.ulpin = d.ulpin AND d.stay_order_active = TRUE \nWHERE p.ulpin = '${currentParcel.ulpin}' \nGROUP BY p.ulpin;`,
            latencyMs: 2.1,
            jsonPayload: {
              ulpin: currentParcel.ulpin,
              engine: 'SRO_MUTATION_PREVALIDATOR_v1',
              mutation_permitted: true,
              active_charges: 0,
              mutation_token: `MUT-TOK-${currentParcel.ulpin}-2026`,
              validity_hours: 72
            }
          });
        }
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-sm shadow-2xl border border-slate-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-navy-900 text-white px-5 py-3 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                Cross-Departmental Interoperability Simulator
              </h3>
              <p className="text-[11px] text-slate-300">
                PostGIS Spatial & SRO Registry Query Engine (DPI Machine-to-Machine Bridge)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-navy-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Engine Selection & Parcel Dropdown */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {/* Target Parcel Selector */}
          <div>
            <label className="block text-slate-600 font-semibold mb-1">
              Select Target Parcel for Spatial Analysis:
            </label>
            <select
              aria-label="Target Parcel for Spatial Analysis"
              value={selectedParcelId}
              onChange={(e) => {
                setSelectedParcelId(e.target.value);
                const p = PARCELS_DATA.find(x => x.id === e.target.value);
                if (p) onSelectParcel(p);
                setQueryResult(null);
              }}
              className="w-full bg-white border border-slate-300 rounded-sm p-2 text-navy-900 font-medium focus:ring-1 focus:ring-navy-800 focus:outline-none"
            >
              {PARCELS_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  [{p.pilot.toUpperCase().substring(0, 2)}] {p.khasraOrPlotNo} - {p.ulpin} ({p.titleStatus})
                </option>
              ))}
            </select>
          </div>

          {/* Engine Switcher */}
          <div>
            <label className="block text-slate-600 font-semibold mb-1">
              Select Departmental Workflow Engine:
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-slate-200 p-1 rounded-sm">
              <button
                onClick={() => {
                  setActiveEngine('permit');
                  setQueryResult(null);
                }}
                className={`py-1.5 px-2 rounded-sm font-semibold transition-colors text-center ${
                  activeEngine === 'permit'
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-300'
                }`}
              >
                1. Building Permit Clearance
              </button>
              <button
                onClick={() => {
                  setActiveEngine('mutation');
                  setQueryResult(null);
                }}
                className={`py-1.5 px-2 rounded-sm font-semibold transition-colors text-center ${
                  activeEngine === 'mutation'
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-300'
                }`}
              >
                2. Mutation / Sale Pre-Validation
              </button>
            </div>
          </div>
        </div>

        {/* Parcel Quick Context Bar */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center space-x-3">
            <span><strong>Target:</strong> {currentParcel.khasraOrPlotNo}</span>
            <span>•</span>
            <span><strong>Owner:</strong> {currentParcel.ror.ownerName}</span>
            <span>•</span>
            <span><strong>Zone:</strong> {currentParcel.zoning.zoneCode}</span>
          </div>
          <div>
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="px-3 py-1 bg-navy-800 hover:bg-navy-900 text-white font-semibold rounded-sm flex items-center space-x-1.5 transition-colors shadow-xs disabled:opacity-50"
            >
              {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
              <span>Execute PostGIS Analysis</span>
            </button>
          </div>
        </div>

        {/* Interactive Query Result Display */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {!queryResult && !isRunning && (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <Server className="w-10 h-10 mx-auto text-slate-400" />
              <div className="font-semibold text-slate-700">Simulator Idle</div>
              <p className="text-xs max-w-md mx-auto">
                Click <strong>"Execute PostGIS Analysis"</strong> above to run real-time spatial collision checks (`ST_Intersects`, `ST_Buffer`) and SRO mortgage registry validation against this parcel.
              </p>
            </div>
          )}

          {isRunning && (
            <div className="text-center py-12 space-y-3">
              <RefreshCw className="w-8 h-8 text-navy-800 animate-spin mx-auto" />
              <div className="text-xs font-mono text-slate-600">
                Executing SQL query on PostGIS spatial index (GEOS 3.12)...
              </div>
            </div>
          )}

          {queryResult && !isRunning && (
            <div className="space-y-4">
              {/* Verdict Banner */}
              <div className={`p-4 rounded-sm border ${
                queryResult.status === 'APPROVED' || queryResult.status === 'CLEARED'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}>
                <div className="flex items-start space-x-3">
                  {queryResult.status === 'APPROVED' || queryResult.status === 'CLEARED' ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm">{queryResult.title}</h4>
                    <p className="font-semibold font-mono text-xs">{queryResult.message}</p>
                    <ul className="mt-2 space-y-1 text-xs list-disc list-inside opacity-90">
                      {queryResult.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Simulated PostGIS SQL Query Terminal */}
              <div className="bg-navy-950 text-slate-200 rounded-sm p-3 font-mono text-xs border border-navy-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-navy-800 pb-1.5">
                  <span className="flex items-center">
                    <Terminal className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    Spatial SQL Execution Trace (PostgreSQL 16 + PostGIS 3.4)
                  </span>
                  <span className="text-emerald-400">Execution Time: {queryResult.latencyMs} ms</span>
                </div>
                <pre className="text-amber-200 overflow-x-auto text-[11px] leading-relaxed">
                  {queryResult.sqlQuery}
                </pre>
              </div>

              {/* Machine-Readable JSON Response */}
              <div className="bg-slate-50 border border-slate-200 rounded-sm p-3 font-mono text-xs space-y-1">
                <span className="text-slate-500 font-sans block text-[10px] uppercase font-bold">
                  API Response Contract (JSON Output):
                </span>
                <pre className="text-navy-900 text-[11px] overflow-x-auto">
                  {JSON.stringify(queryResult.jsonPayload, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            OpenAPI Endpoint: <code className="font-mono text-navy-900">/api/v1/spatial/verify-overlap</code>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-sm"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
};
