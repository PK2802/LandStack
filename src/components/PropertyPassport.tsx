import React, { useState } from 'react';
import type { Parcel, UserRole } from '../types';
import { 
  X, 
  Printer, 
  ShieldAlert, 
  ShieldCheck, 
  Building2, 
  FileCheck2, 
  Landmark, 
  Copy, 
  Check, 
  AlertTriangle,
  Play
} from 'lucide-react';

interface PropertyPassportProps {
  parcel: Parcel | null;
  onClose: () => void;
  onExportPDF: (parcel: Parcel) => void;
  onRunSimulator: (parcel: Parcel) => void;
  onOpenEncroachment: (parcel: Parcel) => void;
  userRole: UserRole;
}

export const PropertyPassport: React.FC<PropertyPassportProps> = ({
  parcel,
  onClose,
  onExportPDF,
  onRunSimulator,
  onOpenEncroachment,
  userRole,
}) => {
  const [activeTab, setActiveTab] = useState<'identity' | 'ror' | 'encumbrance' | 'zoning'>('identity');
  const [copiedULPIN, setCopiedULPIN] = useState(false);

  if (!parcel) return null;

  const handleCopyULPIN = () => {
    navigator.clipboard.writeText(parcel.ulpin);
    setCopiedULPIN(true);
    setTimeout(() => setCopiedULPIN(false), 2000);
  };

  const areaDiff = parcel.georeferencedAreaSqM - parcel.recordedDeedAreaSqM;
  const isAreaOver = areaDiff > 0.5;
  const isAreaUnder = areaDiff < -0.5;

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-full sm:w-[500px] md:w-[540px] bg-white border-l border-slate-300 shadow-2xl flex flex-col transform transition-transform duration-200 ease-in-out">
      {/* Header */}
      <div className="bg-navy-900 text-white p-4 border-b border-navy-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] tracking-wider uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-navy-800 text-amber-300 border border-navy-700">
                Digital Public Infrastructure
              </span>
              {parcel.titleStatus === 'CLEAR' && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Clear Title
                </span>
              )}
              {parcel.titleStatus === 'ENCUMBERED' && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-rose-950 text-rose-300 border border-rose-800 flex items-center">
                  <ShieldAlert className="w-3 h-3 mr-1" /> Bank Lien Active
                </span>
              )}
              {parcel.titleStatus === 'DISPUTED' && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-amber-950 text-amber-300 border border-amber-800 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" /> Revenue Dispute
                </span>
              )}
            </div>
            <h2 className="text-base font-bold mt-1 text-white tracking-tight">
              Digital Property Passport
            </h2>
            <div className="flex items-center space-x-2 mt-0.5 text-xs text-slate-300">
              <span className="font-mono bg-navy-950 px-2 py-0.5 rounded-sm border border-navy-800 text-amber-200">
                ULPIN: {parcel.ulpin}
              </span>
              <button
                onClick={handleCopyULPIN}
                className="text-slate-400 hover:text-white transition-colors p-1"
                title="Copy ULPIN"
              >
                {copiedULPIN ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-navy-800 mt-4 -mb-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('identity')}
            className={`flex-1 py-2.5 px-1 text-center border-b-2 transition-colors ${
              activeTab === 'identity'
                ? 'border-amber-400 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Identity & Survey
          </button>
          <button
            onClick={() => setActiveTab('ror')}
            className={`flex-1 py-2.5 px-1 text-center border-b-2 transition-colors ${
              activeTab === 'ror'
                ? 'border-amber-400 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. RoR & Ownership
          </button>
          <button
            onClick={() => setActiveTab('encumbrance')}
            className={`flex-1 py-2.5 px-1 text-center border-b-2 transition-colors ${
              activeTab === 'encumbrance'
                ? 'border-amber-400 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Encumbrance (SRO)
          </button>
          <button
            onClick={() => setActiveTab('zoning')}
            className={`flex-1 py-2.5 px-1 text-center border-b-2 transition-colors ${
              activeTab === 'zoning'
                ? 'border-amber-400 text-white font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            4. Zoning & Master Plan
          </button>
        </div>
      </div>

      {/* Tab Content Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 text-xs">
        {/* TAB 1: LAND IDENTITY & SURVEY */}
        {activeTab === 'identity' && (
          <div className="space-y-4">
            {/* Quick Summary Card */}
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-2">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500 font-medium">Cadastral Reference</span>
                <span className="font-semibold text-navy-900">{parcel.khasraOrPlotNo}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <div>
                  <span className="text-slate-500 block text-[11px]">State / UT</span>
                  <span className="font-medium">{parcel.state}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">District</span>
                  <span className="font-medium">{parcel.district}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Tehsil / Taluk</span>
                  <span className="font-medium">{parcel.tehsilOrTaluk || parcel.tehsil}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Sector / Village</span>
                  <span className="font-medium">{parcel.villageOrSector}</span>
                </div>
              </div>
            </div>

            {/* Georeferenced Area Discrepancy Calculator */}
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-2">
              <h4 className="font-semibold text-navy-900 text-xs flex items-center justify-between">
                <span>Spatial Area Re-verification</span>
                <span className="text-[10px] text-slate-500 uppercase font-mono">DGPS vs Deed</span>
              </h4>

              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-sm border border-slate-200 font-mono text-center">
                <div>
                  <div className="text-[10px] text-slate-500 font-sans">Georeferenced (DGPS)</div>
                  <div className="font-bold text-navy-900 text-sm mt-0.5">
                    {parcel.georeferencedAreaSqM.toFixed(1)} m²
                  </div>
                  <div className="text-[9px] text-slate-400">{(parcel.georeferencedAreaSqM * 0.000247105).toFixed(3)} Acres</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-sans">Deed Registered</div>
                  <div className="font-bold text-slate-700 text-sm mt-0.5">
                    {parcel.recordedDeedAreaSqM.toFixed(1)} m²
                  </div>
                  <div className="text-[9px] text-slate-400">Official RoR</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-sans">Variance Delta</div>
                  <div className={`font-bold text-sm mt-0.5 ${
                    isAreaOver ? 'text-amber-700' : isAreaUnder ? 'text-rose-700' : 'text-emerald-700'
                  }`}>
                    {areaDiff > 0 ? `+${areaDiff.toFixed(1)}` : areaDiff.toFixed(1)} m²
                  </div>
                  <div className="text-[9px] font-semibold">
                    ({parcel.areaDiscrepancyPercent >= 0 ? `+${parcel.areaDiscrepancyPercent.toFixed(2)}%` : `${parcel.areaDiscrepancyPercent.toFixed(2)}%`})
                  </div>
                </div>
              </div>

              {parcel.encroachment.hasAnomaly && (
                <div className="bg-rose-50 border-l-4 border-rose-600 p-2 text-rose-900 text-xs">
                  <div className="font-semibold flex items-center">
                    <AlertTriangle className="w-3.5 h-3.5 mr-1 text-rose-600" />
                    Spatial Boundary Anomaly Detected
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed">
                    {parcel.encroachment.breachDescription}
                  </p>
                  <button
                    onClick={() => onOpenEncroachment(parcel)}
                    className="mt-1.5 text-xs text-rose-700 hover:text-rose-900 font-semibold underline block"
                  >
                    Open AI Encroachment & Satellite Drift Inspector →
                  </button>
                </div>
              )}

              {!parcel.encroachment.hasAnomaly && (
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-2 text-emerald-900 text-xs flex items-center">
                  <Check className="w-4 h-4 mr-1.5 text-emerald-600 shrink-0" />
                  <span>Georeferenced boundary tolerance within statutory 0.5% limit.</span>
                </div>
              )}
            </div>

            {/* Geodetic Coordinates */}
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-1.5 font-mono text-xs">
              <span className="text-slate-500 block font-sans text-[11px]">Parcel Centroid (WGS-84)</span>
              <div className="flex items-center justify-between bg-slate-50 p-2 rounded-sm border border-slate-200 text-navy-900">
                <span>Lat: {parcel.centroid[0].toFixed(6)}° N, Lng: {parcel.centroid[1].toFixed(6)}° E</span>
                <span className="text-[10px] text-slate-500 font-sans">EPSG:4326</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: RECORD OF RIGHTS (RoR) */}
        {activeTab === 'ror' && (
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-3">
              <h4 className="font-semibold text-navy-900 text-xs border-b border-slate-100 pb-2 flex items-center">
                <FileCheck2 className="w-4 h-4 mr-1.5 text-navy-800" />
                Ownership Particulars (Form-VII Jamabandi / Patta)
              </h4>

              <div className="space-y-2">
                <div>
                  <span className="text-slate-500 block text-[11px]">Primary Landowner Name</span>
                  <span className="font-semibold text-navy-900 text-sm">{parcel.ror.ownerName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Father / Spouse Name</span>
                  <span className="font-medium text-slate-800">{parcel.ror.fatherOrSpouseName}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Share Percentage</span>
                    <span className="font-semibold text-navy-900">{parcel.ror.sharePercentage}% (Sole / Undivided)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Khatauni / Patta No</span>
                    <span className="font-mono text-navy-900 font-medium">{parcel.ror.khatauniOrPattaNo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mutation Details */}
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-2">
              <h4 className="font-semibold text-navy-900 text-xs border-b border-slate-100 pb-2">
                Sanctioned Mutation & Registration Chain
              </h4>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <div>
                  <span className="text-slate-500 block text-[11px]">Mutation Serial No</span>
                  <span className="font-mono font-medium text-navy-900">{parcel.ror.mutationSerialNo}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Sanction Date</span>
                  <span className="font-medium">{parcel.ror.mutationSanctionDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Deed Registration Date</span>
                  <span className="font-medium">{parcel.ror.deedRegistrationDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Revenue Fasli Year</span>
                  <span className="font-medium">{parcel.ror.jamabandiOrFasliYear}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-slate-500 block text-[11px]">Jurisdictional Registration Office</span>
                <span className="font-medium text-navy-900">{parcel.ror.sroOffice}</span>
              </div>
            </div>

            {/* Dispute Warning if Any */}
            {parcel.ror.disputeFlag && (
              <div className="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-sm text-amber-900 text-xs">
                <div className="font-semibold flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1 text-amber-600" />
                  Active Legal / Revenue Department Dispute
                </div>
                <p className="mt-1 text-[11px] leading-relaxed">
                  {parcel.ror.disputeDetails}
                </p>
                {parcel.ror.courtCaseRef && (
                  <div className="mt-2 text-[10px] font-mono bg-amber-100 p-1 rounded-sm text-amber-950 inline-block">
                    Court Ref: {parcel.ror.courtCaseRef}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ENCUMBRANCE & LIABILITIES */}
        {activeTab === 'encumbrance' && (
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-3">
              <h4 className="font-semibold text-navy-900 text-xs border-b border-slate-100 pb-2 flex items-center justify-between">
                <span className="flex items-center">
                  <Landmark className="w-4 h-4 mr-1.5 text-navy-800" />
                  Sub-Registrar & CERSAI Charge Registry
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Sec. 89 Registration Act</span>
              </h4>

              {parcel.encumbrance.hasLien ? (
                <div className="space-y-3">
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-rose-900 text-xs uppercase tracking-wide">
                        Active Bank Mortgage
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-rose-200 text-rose-800 font-mono text-[10px] font-semibold">
                        Lien Registered
                      </span>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2 text-slate-800">
                      <div>
                        <span className="text-slate-500 block text-[10px]">Mortgagee Bank</span>
                        <span className="font-bold text-navy-900">{parcel.encumbrance.bankName}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Branch Office</span>
                        <span className="font-medium">{parcel.encumbrance.branchName}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Registered Lien Amount</span>
                        <span className="font-bold text-rose-700 font-mono text-sm">
                          ₹{parcel.encumbrance.lienAmountINR?.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">Sanction Date</span>
                        <span className="font-medium">{parcel.encumbrance.chargeSanctionDate}</span>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-rose-200 text-[11px] text-rose-800 space-y-1">
                      <p><span className="font-semibold">CERSAI ID:</span> <span className="font-mono">{parcel.encumbrance.chargeIdCERSAI}</span></p>
                      <p><span className="font-semibold">Deed Record:</span> <span className="font-mono">{parcel.encumbrance.deedRefNo}</span></p>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-sm text-slate-600 text-xs">
                    <p className="font-medium text-slate-800">Statutory Pre-Mutation Restriction:</p>
                    <p className="text-[11px] mt-0.5 leading-relaxed">
                      Under Section 17 of the Registration Act, 1908, no sale deed or transfer mutation can be registered without an official Charge Satisfaction Certificate (Form-II NOC) issued by {parcel.encumbrance.bankName}.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 space-y-2 bg-emerald-50/50 border border-emerald-100 rounded-sm">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="font-bold text-emerald-900 text-sm">Nil Encumbrance Certificate</div>
                  <p className="text-slate-600 text-[11px] max-w-xs mx-auto">
                    Zero registered mortgage deeds or active financial liabilities indexed against ULPIN {parcel.ulpin} in SRO / CERSAI registry.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: MASTER PLAN & ZONING */}
        {activeTab === 'zoning' && (
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs space-y-3">
              <h4 className="font-semibold text-navy-900 text-xs border-b border-slate-100 pb-2 flex items-center justify-between">
                <span className="flex items-center">
                  <Building2 className="w-4 h-4 mr-1.5 text-navy-800" />
                  Town Planning & Development Authority
                </span>
                <span className="font-mono text-[10px] text-navy-800 bg-slate-100 px-1.5 py-0.5 rounded-sm">
                  {parcel.zoning.zoneCode}
                </span>
              </h4>

              <div className="space-y-2 text-slate-700">
                <div>
                  <span className="text-slate-500 block text-[11px]">Master Plan Zone Name</span>
                  <span className="font-semibold text-navy-900 text-sm">{parcel.zoning.zoneName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Permissible Land Use</span>
                  <span className="font-medium">{parcel.zoning.permissibleUse}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-500 block text-[11px]">CLU Status</span>
                    <span className={`inline-block font-semibold px-2 py-0.5 rounded-sm text-[10px] ${
                      parcel.zoning.cluStatus === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' :
                      parcel.zoning.cluStatus === 'EXEMPT' ? 'bg-blue-100 text-blue-800' :
                      'bg-rose-100 text-rose-800'
                    }`}>
                      {parcel.zoning.cluStatus}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Max Permissible FSI</span>
                    <span className="font-mono font-bold text-navy-900">{parcel.zoning.maxPermissibleFSI}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Ground Coverage Limit</span>
                    <span className="font-medium">{parcel.zoning.maxGroundCoveragePercent}%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Setback Clearance</span>
                    <span className="font-medium text-[11px]">{parcel.zoning.setbackRequirement}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental & Utility Restrictions */}
            {parcel.zoning.ecoRestrictionFlag && (
              <div className="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-sm text-amber-900 text-xs">
                <div className="font-semibold flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1 text-amber-600" />
                  Statutory Eco / Easement Restriction Active
                </div>
                <p className="mt-1 text-[11px] leading-relaxed">
                  {parcel.zoning.restrictionDescription}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Role-Specific Patwari / Planner Insight Block */}
        {userRole === 'patwari' && (
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-sm text-blue-950 text-xs space-y-1.5">
            <div className="font-semibold flex items-center justify-between text-navy-900">
              <span>Patwari Digital Desk Actions</span>
              <span className="text-[10px] bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded-sm">Revenue Code Active</span>
            </div>
            <p className="text-[11px] text-blue-900">
              Form-XII field inspection verification pending for current fasli year. Mutation workflow requires digital token signing.
            </p>
          </div>
        )}
      </div>

      {/* Footer Interactive Actions */}
      <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between gap-2">
        <button
          onClick={() => onExportPDF(parcel)}
          className="flex-1 py-2 px-3 rounded-sm bg-navy-800 text-white font-medium text-xs hover:bg-navy-900 flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Export Verified Passport (PDF)</span>
        </button>

        <button
          onClick={() => onRunSimulator(parcel)}
          className="py-2 px-3 rounded-sm bg-slate-100 text-navy-900 border border-slate-300 font-medium text-xs hover:bg-slate-200 flex items-center space-x-1 transition-colors"
          title="Run Spatial Simulator"
        >
          <Play className="w-3 h-3 text-amber-600 fill-amber-600" />
          <span>Spatial Query</span>
        </button>
      </div>
    </div>
  );
};
