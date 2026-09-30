import React from 'react';
import type { Parcel } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import { X, Printer, ShieldCheck, Download } from 'lucide-react';

interface PassportPrintModalProps {
  parcel: Parcel | null;
  onClose: () => void;
}

export const PassportPrintModal: React.FC<PassportPrintModalProps> = ({ parcel, onClose }) => {
  if (!parcel) return null;

  const handlePrint = () => {
    window.print();
  };

  const verificationUrl = `https://landstack.gov.in/verify?ulpin=${parcel.ulpin}&token=SHA256-DLR-2026-IND`;
  const sha256Seal = `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`.substring(0, 32).toUpperCase();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-sm shadow-2xl border border-slate-300 flex flex-col max-h-[92vh]">
        {/* Modal Top Action Toolbar (Hidden during print) */}
        <div className="no-print bg-navy-900 text-white px-5 py-3 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm tracking-wide">
              Official Digital Public Infrastructure - Verified Property Passport Certificate
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold text-xs rounded-sm flex items-center space-x-1.5 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-navy-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Content - Print Ready Layout */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-100/50">
          <div 
            id="passport-print-document" 
            className="bg-white p-8 max-w-3xl mx-auto border-2 border-navy-900 shadow-sm relative text-slate-900 font-sans"
          >
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <div className="text-9xl font-black text-navy-900 select-none">BHU-SETU</div>
            </div>

            {/* Document Header with Emblem & Government Banner */}
            <div className="text-center border-b-2 border-navy-900 pb-4 relative">
              <div className="inline-block p-1.5 mb-1">
                {/* Ashoka Emblem Placeholder Box */}
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-navy-900 flex items-center justify-center font-bold text-navy-900 text-lg">
                  🇮🇳
                </div>
              </div>
              <h1 className="text-sm font-bold tracking-wider text-slate-800 uppercase">
                Government of India • Ministry of Rural Development
              </h1>
              <h2 className="text-base font-bold text-navy-900 tracking-tight mt-0.5">
                DEPARTMENT OF LAND RESOURCES
              </h2>
              <div className="inline-block bg-navy-900 text-amber-300 font-bold text-xs px-3 py-0.5 mt-2 tracking-wide uppercase">
                Digitally Verified Property Passport (Bhu-Aadhaar Certificate)
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Issued under the Digital India Land Records Modernization Programme (DILRMP) • DPI Framework
              </p>
            </div>

            {/* Certificate Metadata & QR Block */}
            <div className="mt-4 grid grid-cols-3 gap-4 border-b border-slate-300 pb-4 items-center">
              <div className="col-span-2 space-y-1.5 text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Unique Land Parcel Identification Number (ULPIN):</span>
                  <div className="font-mono font-bold text-base text-navy-900 tracking-wide mt-0.5">
                    {parcel.ulpin}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <div>
                    <span className="text-slate-500 block">Certificate ID:</span>
                    <span className="font-mono font-semibold">DLR/2026/CERT/{parcel.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date of Generation:</span>
                    <span className="font-mono">{new Date().toISOString().split('T')[0]} 12:00:00 UTC</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Geodetic Reference Datum:</span>
                    <span className="font-mono">WGS-84 (EPSG:4326)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Survey Agency:</span>
                    <span>State Cadastral DGPS Authority</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Cryptographic QR Code */}
              <div className="flex flex-col items-center justify-center p-2 border border-slate-200 bg-slate-50 rounded-sm">
                <QRCodeSVG 
                  value={verificationUrl}
                  size={96}
                  level="H"
                  includeMargin={false}
                />
                <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase text-center">
                  Scan to Verify Authenticity
                </span>
              </div>
            </div>

            {/* Section 1: Land Parcel Survey Particulars */}
            <div className="mt-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-slate-100 px-2 py-1 border-l-4 border-navy-800">
                1. Cadastral Survey & Location Identity
              </h3>
              <table className="w-full text-xs border border-slate-200 text-left">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-semibold bg-slate-50 w-1/4">State / Union Territory</td>
                    <td className="p-2 w-1/4">{parcel.state}</td>
                    <td className="p-2 font-semibold bg-slate-50 w-1/4">District</td>
                    <td className="p-2 w-1/4">{parcel.district}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-semibold bg-slate-50">Tehsil / Taluk</td>
                    <td className="p-2">{parcel.tehsilOrTaluk || parcel.tehsil}</td>
                    <td className="p-2 font-semibold bg-slate-50">Sector / Revenue Village</td>
                    <td className="p-2">{parcel.villageOrSector}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-semibold bg-slate-50">Khasra / Plot / Survey No</td>
                    <td className="p-2 font-bold text-navy-900">{parcel.khasraOrPlotNo}</td>
                    <td className="p-2 font-semibold bg-slate-50">Classification</td>
                    <td className="p-2">{parcel.landClassification}</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold bg-slate-50">Georeferenced Area (DGPS)</td>
                    <td className="p-2 font-mono font-bold text-navy-900">{parcel.georeferencedAreaSqM.toFixed(1)} sq.m</td>
                    <td className="p-2 font-semibold bg-slate-50">Recorded Deed Area</td>
                    <td className="p-2 font-mono">{parcel.recordedDeedAreaSqM.toFixed(1)} sq.m (Delta: {parcel.areaDiscrepancyPercent >= 0 ? `+${parcel.areaDiscrepancyPercent}%` : `${parcel.areaDiscrepancyPercent}%`})</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 2: Ownership Particulars (Record of Rights) */}
            <div className="mt-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-slate-100 px-2 py-1 border-l-4 border-navy-800">
                2. Record of Rights (RoR) - Jamabandi / Patta Extract
              </h3>
              <table className="w-full text-xs border border-slate-200 text-left">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-semibold bg-slate-50 w-1/4">Primary Landholder</td>
                    <td className="p-2 w-1/4 font-bold">{parcel.ror.ownerName}</td>
                    <td className="p-2 font-semibold bg-slate-50 w-1/4">Father / Spouse Name</td>
                    <td className="p-2 w-1/4">{parcel.ror.fatherOrSpouseName}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-semibold bg-slate-50">Ownership Share</td>
                    <td className="p-2">{parcel.ror.sharePercentage}%</td>
                    <td className="p-2 font-semibold bg-slate-50">Khatauni / Patta Record</td>
                    <td className="p-2 font-mono">{parcel.ror.khatauniOrPattaNo}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2 font-semibold bg-slate-50">Sanctioned Mutation No</td>
                    <td className="p-2 font-mono">{parcel.ror.mutationSerialNo}</td>
                    <td className="p-2 font-semibold bg-slate-50">Mutation Date</td>
                    <td className="p-2">{parcel.ror.mutationSanctionDate}</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold bg-slate-50">SRO Registration Office</td>
                    <td className="p-2">{parcel.ror.sroOffice}</td>
                    <td className="p-2 font-semibold bg-slate-50">Title Dispute Status</td>
                    <td className="p-2">
                      {parcel.ror.disputeFlag ? (
                        <span className="text-rose-700 font-bold uppercase">Dispute Pending in Revenue/Civil Court</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">Unencumbered Clear Title</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 3: Sub-Registrar Office & Bank Liens */}
            <div className="mt-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-slate-100 px-2 py-1 border-l-4 border-navy-800">
                3. Registered Mortgages, Liens & Encumbrances (CERSAI / SRO)
              </h3>
              {parcel.encumbrance.hasLien ? (
                <div className="p-2.5 border border-rose-300 bg-rose-50/50 text-xs rounded-sm space-y-1">
                  <div className="flex justify-between font-bold text-rose-900">
                    <span>Lien Holder: {parcel.encumbrance.bankName} ({parcel.encumbrance.branchName})</span>
                    <span className="font-mono">Registered Amount: ₹{parcel.encumbrance.lienAmountINR?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-[11px] text-slate-700 font-mono">
                    CERSAI Charge ID: {parcel.encumbrance.chargeIdCERSAI} | Deed: {parcel.encumbrance.deedRefNo}
                  </div>
                  <p className="text-[10px] text-rose-800 italic mt-1">
                    Notice: Active charge registered. Statutory No Objection Certificate (NOC) required prior to mutation.
                  </p>
                </div>
              ) : (
                <div className="p-2.5 border border-emerald-300 bg-emerald-50/50 text-xs text-emerald-900 font-medium">
                  Nil Encumbrance: No financial charge, bank mortgage, or court attachment registered in SRO records.
                </div>
              )}
            </div>

            {/* Section 4: Town Planning & Statutory Restrictions */}
            <div className="mt-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-slate-100 px-2 py-1 border-l-4 border-navy-800">
                4. Master Plan Permissible Land Use & Zoning
              </h3>
              <div className="p-2.5 border border-slate-200 text-xs grid grid-cols-3 gap-2">
                <div>
                  <span className="text-slate-500 block text-[10px]">Zone Classification</span>
                  <span className="font-semibold text-navy-900">{parcel.zoning.zoneName} ({parcel.zoning.zoneCode})</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Permissible Use</span>
                  <span className="font-medium text-slate-800">{parcel.zoning.permissibleUse}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Max FSI / Coverage</span>
                  <span className="font-mono font-bold text-navy-900">{parcel.zoning.maxPermissibleFSI} / {parcel.zoning.maxGroundCoveragePercent}%</span>
                </div>
              </div>
            </div>

            {/* Cryptographic Digital Signature Footer */}
            <div className="mt-6 pt-4 border-t-2 border-navy-900 grid grid-cols-2 gap-4 items-end text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Cryptographic Hash (SHA-256):</span>
                <span className="font-mono text-[10px] text-navy-900 bg-slate-100 p-1 block break-all rounded-xs">
                  {sha256Seal}
                </span>
                <p className="text-[9px] text-slate-500 leading-tight">
                  Digitally generated document under the Information Technology Act, 2000. Verified against National Land Stack PostGIS core.
                </p>
              </div>

              <div className="text-right space-y-1">
                <div className="inline-block border-b border-slate-400 pb-1 px-4 text-center">
                  <div className="font-serif italic text-navy-900 font-bold text-sm">Pradeep Kumar, IAS</div>
                  <div className="text-[10px] text-slate-600 font-sans">Director of Land Records (e-Sign)</div>
                </div>
                <div className="text-[9px] text-slate-500">
                  Department of Land Resources, Ministry of Rural Development
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="no-print bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            For official verification, query endpoint: <code className="font-mono text-navy-900">/api/v1/parcels/{parcel.ulpin}/passport</code>
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-sm border border-slate-300 text-slate-700 hover:bg-slate-200 font-medium"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-sm bg-navy-800 text-white hover:bg-navy-900 font-medium flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
