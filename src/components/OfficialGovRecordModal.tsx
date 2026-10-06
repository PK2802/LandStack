import React, { useState } from 'react';
import type { Parcel } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import { 
  X, 
  Printer, 
  Download, 
  FileCheck, 
  Building2, 
  Landmark, 
  ExternalLink,
  MapPin,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface OfficialGovRecordModalProps {
  parcel: Parcel | null;
  onClose: () => void;
}

export const OfficialGovRecordModal: React.FC<OfficialGovRecordModalProps> = ({ parcel, onClose }) => {
  const [activeDoc, setActiveDoc] = useState<'ror' | 'cersai' | 'cors'>('ror');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!parcel) return null;

  const isChandigarh = parcel.pilot === 'chandigarh';

  // Export as standard OGC GeoJSON Feature
  const handleDownloadGeoJSON = () => {
    // GeoJSON coordinates in [lon, lat] format per GeoJSON spec (RFC 7946)
    const coordinates = [
      ...parcel.polygon.map(([lat, lng]) => [lng, lat]),
      [parcel.polygon[0][1], parcel.polygon[0][0]] // close linear ring
    ];

    const geoJsonObject = {
      type: 'Feature',
      id: parcel.ulpin,
      geometry: {
        type: 'Polygon',
        coordinates: [coordinates]
      },
      properties: {
        ulpin: parcel.ulpin,
        khasraOrPlotNo: parcel.khasraOrPlotNo,
        state: parcel.state,
        district: parcel.district,
        tehsilOrTaluk: parcel.tehsilOrTaluk || parcel.tehsil,
        villageOrSector: parcel.villageOrSector,
        ownerName: parcel.ror.ownerName,
        fatherOrSpouseName: parcel.ror.fatherOrSpouseName,
        sharePercentage: parcel.ror.sharePercentage,
        khewatNo: parcel.ror.khewatNo || 'N/A',
        khatauniOrPattaNo: parcel.ror.khatauniOrPattaNo,
        mutationSerialNo: parcel.ror.mutationSerialNo,
        jamabandiOrFasliYear: parcel.ror.jamabandiOrFasliYear,
        titleStatus: parcel.titleStatus,
        landClassification: parcel.landClassification,
        georeferencedAreaSqM: parcel.georeferencedAreaSqM,
        recordedDeedAreaSqM: parcel.recordedDeedAreaSqM,
        areaDiscrepancyPercent: parcel.areaDiscrepancyPercent,
        hasLien: parcel.encumbrance.hasLien,
        bankName: parcel.encumbrance.bankName || null,
        chargeIdCERSAI: parcel.encumbrance.chargeIdCERSAI || null,
        zoningCode: parcel.zoning.zoneCode,
        zoningPermissibleUse: parcel.zoning.permissibleUse,
        spatialReferenceSystem: 'EPSG:4326 (WGS-84)',
        issuingAuthority: isChandigarh ? 'UT Chandigarh Estate Office' : 'Tamil Nadu Revenue & Disaster Management Dept'
      }
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(geoJsonObject, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${parcel.ulpin}_cadastral_boundary.geojson`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const verificationUrl = isChandigarh 
    ? `https://estateoffice.chd.gov.in/verify?ulpin=${parcel.ulpin}`
    : `https://eservices.tn.gov.in/verify?ulpin=${parcel.ulpin}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white w-full max-w-4xl rounded-sm shadow-2xl border border-slate-300 flex flex-col max-h-[94vh]">
        {/* Top Header / Actions Toolbar */}
        <div className="bg-navy-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2.5">
            <Landmark className="w-5 h-5 text-amber-400" />
            <div>
              <div className="font-bold text-sm tracking-wide">
                Official Government Land Registry Extract & Record
              </div>
              <div className="text-[11px] text-slate-300">
                Authorized digital extract issued under the DILRMP / Bhu-Aadhaar DPI Framework
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownloadGeoJSON}
              className="px-2.5 py-1.5 bg-navy-800 hover:bg-navy-700 text-amber-300 text-xs font-semibold rounded-sm border border-navy-700 flex items-center space-x-1.5 transition-colors"
              title="Download OpenGIS Cadastral Feature (EPSG:4326)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded!' : 'GeoJSON'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-2.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-bold text-xs rounded-sm flex items-center space-x-1.5 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Extract</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-navy-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Switcher Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-5 pt-2 flex space-x-2 text-xs font-medium">
          <button
            onClick={() => setActiveDoc('ror')}
            className={`py-2 px-3 border-b-2 font-semibold transition-colors flex items-center space-x-1.5 ${
              activeDoc === 'ror'
                ? 'border-navy-900 text-navy-900 bg-white rounded-t-sm border-t border-x'
                : 'border-transparent text-slate-600 hover:text-navy-900'
            }`}
          >
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {isChandigarh ? 'Jamabandi Nakal (जमाबंदी नक़ल)' : 'Patta & Chitta Extract (பட்டா நகல்)'}
            </span>
          </button>
          <button
            onClick={() => setActiveDoc('cersai')}
            className={`py-2 px-3 border-b-2 font-semibold transition-colors flex items-center space-x-1.5 ${
              activeDoc === 'cersai'
                ? 'border-navy-900 text-navy-900 bg-white rounded-t-sm border-t border-x'
                : 'border-transparent text-slate-600 hover:text-navy-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-600" />
            <span>CERSAI Security Filing (Central Registry)</span>
          </button>
          <button
            onClick={() => setActiveDoc('cors')}
            className={`py-2 px-3 border-b-2 font-semibold transition-colors flex items-center space-x-1.5 ${
              activeDoc === 'cors'
                ? 'border-navy-900 text-navy-900 bg-white rounded-t-sm border-t border-x'
                : 'border-transparent text-slate-600 hover:text-navy-900'
            }`}
          >
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Survey of India CORS Tie-Sheet</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          {/* TAB 1: OFFICIAL STATE ROR EXTRACT */}
          {activeDoc === 'ror' && (
            <div className="border-2 border-slate-400 p-6 rounded-sm bg-amber-50/15 relative">
              {/* Official Seal Watermark in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-8xl font-black text-slate-900 rotate-[-25deg] uppercase">
                  VERIFIED RECORD
                </span>
              </div>

              {/* State Header Banner */}
              <div className="text-center border-b-2 border-slate-300 pb-4">
                <div className="inline-block p-1 border border-slate-300 rounded-full mb-1">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-amber-400 font-serif font-black text-xs">
                    GOI
                  </div>
                </div>
                <h1 className="text-base font-extrabold text-navy-950 uppercase tracking-wide">
                  {isChandigarh ? 'Union Territory of Chandigarh Administration' : 'Government of Tamil Nadu'}
                </h1>
                <div className="text-xs font-bold text-slate-700 uppercase">
                  {isChandigarh ? 'Estate Office & Department of Land Revenue' : 'Department of Revenue and Disaster Management'}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {isChandigarh 
                    ? 'Certified Copy of Record of Rights (Jamabandi Nakal) • Under Punjab Land Revenue Act 1887'
                    : 'Certified Chitta and \'A\' Register Extract • Issued under Tamil Nadu Land Revenue Settlement'}
                </div>
              </div>

              {/* QR and Verification Bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-3 gap-3">
                <div className="text-xs space-y-1">
                  <div>
                    <span className="text-slate-500">Bhu-Aadhaar (ULPIN):</span>{' '}
                    <span className="font-mono font-bold text-navy-950">{parcel.ulpin}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Document Dispatch No:</span>{' '}
                    <span className="font-mono font-semibold">REV/DILRMP/2026/{parcel.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Revenue Assessment Year:</span>{' '}
                    <span className="font-semibold">{parcel.ror.jamabandiOrFasliYear}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white p-2 border border-slate-200 rounded-sm">
                  <QRCodeSVG value={verificationUrl} size={64} level="M" />
                  <div className="text-[10px] text-slate-600 leading-tight">
                    <div className="font-bold text-navy-900">Scan to Verify</div>
                    <div>Digital Signature Seal</div>
                    <div className="text-emerald-700 font-mono font-semibold mt-1">SHA-256 VALID</div>
                  </div>
                </div>
              </div>

              {/* Primary Land & Ownership Matrix */}
              <div className="mt-5 space-y-4">
                <div className="text-xs font-bold text-navy-900 uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-navy-900">
                  1. Cadastral Identification & Location Particulars
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">State / UT:</span>
                    <span className="font-semibold">{parcel.state}</span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">District:</span>
                    <span className="font-semibold">{parcel.district}</span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">Tehsil / Taluk:</span>
                    <span className="font-semibold">{parcel.tehsilOrTaluk || parcel.tehsil}</span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">Village / Sector:</span>
                    <span className="font-semibold">{parcel.villageOrSector}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">
                      {isChandigarh ? 'Khewat / Account No:' : 'Patta Number:'}
                    </span>
                    <span className="font-mono font-bold text-navy-900">
                      {parcel.ror.khewatNo || parcel.ror.khatauniOrPattaNo}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">
                      {isChandigarh ? 'Khasra / Plot No:' : 'Survey & Sub-division No:'}
                    </span>
                    <span className="font-mono font-bold text-navy-900">{parcel.khasraOrPlotNo}</span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">Land Classification:</span>
                    <span className="font-semibold text-slate-800">{parcel.landClassification}</span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-200 rounded-xs">
                    <span className="text-slate-500 block text-[10px]">FMB Sheet / Musavi:</span>
                    <span className="font-mono">{parcel.ror.fmbSheetNo || 'FMB-Cadastre-Sheet-1'}</span>
                  </div>
                </div>

                <div className="text-xs font-bold text-navy-900 uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-navy-900">
                  2. Khatauni Ownership & Possession Entries
                </div>
                <table className="w-full text-xs border border-slate-300 divide-y divide-slate-200">
                  <thead className="bg-slate-100 font-semibold text-slate-700">
                    <tr>
                      <th className="p-2 text-left">Owner / Pattadar Name</th>
                      <th className="p-2 text-left">Father / Spouse / Parent Agency</th>
                      <th className="p-2 text-center">Share (%)</th>
                      <th className="p-2 text-right">Recorded Area (m²)</th>
                      <th className="p-2 text-right">Annual Land Cess</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-2 font-bold text-navy-950">{parcel.ror.ownerName}</td>
                      <td className="p-2 text-slate-700">{parcel.ror.fatherOrSpouseName}</td>
                      <td className="p-2 text-center font-mono font-semibold">{parcel.ror.sharePercentage}%</td>
                      <td className="p-2 text-right font-mono">{parcel.recordedDeedAreaSqM.toFixed(1)} m²</td>
                      <td className="p-2 text-right font-mono font-semibold">
                        ₹{parcel.ror.landRevenueTaxINR || 0}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-xs font-bold text-navy-900 uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-navy-900">
                  3. Roznamcha Waqiati & Mutation Sanction Order
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xs text-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-slate-500">Sanctioned Mutation No:</span>{' '}
                      <span className="font-mono font-bold text-navy-900">{parcel.ror.mutationSerialNo}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Date of Sanction:</span>{' '}
                      <span className="font-mono font-semibold">{parcel.ror.mutationSanctionDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Competent Authority:</span>{' '}
                      <span className="font-semibold">
                        {isChandigarh ? 'Tehsildar (Executive Magistrate), Chandigarh' : 'Zonal Deputy Tahsildar, Sriperumbudur'}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-600 text-[11px] leading-relaxed pt-1 border-t border-slate-200">
                    Certified that ownership of the above specified parcel stands recorded in the computerized Land Records 
                    database following due statutory proclamation and field verification. Title Status:{' '}
                    <span className={`font-bold ${
                      parcel.titleStatus === 'CLEAR' ? 'text-emerald-700' :
                      parcel.titleStatus === 'ENCUMBERED' ? 'text-rose-700' : 'text-amber-700'
                    }`}>
                      {parcel.titleStatus}
                    </span>
                    {parcel.ror.disputeDetails && (
                      <span className="text-rose-700 block mt-1">
                        ⚠️ <strong>Revenue Court Notice:</strong> {parcel.ror.disputeDetails} (Ref: {parcel.ror.courtCaseRef})
                      </span>
                    )}
                  </div>
                </div>

                {/* Digital Signature Footer */}
                <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-[11px] text-slate-500">
                  <div>
                    <div>Digitally Signed by: Revenue Officer / Patwari In-charge</div>
                    <div>Date of Record Generation: 2026-04-01 12:00:00 UTC</div>
                  </div>
                  <a
                    href={verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 font-bold text-navy-800 hover:text-navy-900 underline"
                  >
                    <span>Verify Live on State Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CERSAI SECURITY FILING EXTRACT */}
          {activeDoc === 'cersai' && (
            <div className="border border-slate-300 p-6 rounded-sm bg-white space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h2 className="text-sm font-bold text-navy-900">
                    Central Registry of Securitisation Asset Reconstruction and Security Interest of India
                  </h2>
                  <div className="text-xs text-slate-500">
                    Statutory Filing Certificate under Chapter IV-A of the SARFAESI Act, 2002
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-sm ${
                    parcel.encumbrance.hasLien 
                      ? 'bg-rose-100 text-rose-800 border border-rose-300' 
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    {parcel.encumbrance.hasLien ? 'ACTIVE CHARGE REGISTERED' : 'NIL ENCUMBRANCE (CLEAR)'}
                  </span>
                </div>
              </div>

              {parcel.encumbrance.hasLien ? (
                <div className="space-y-4 text-xs">
                  <div className="p-3 bg-amber-50 border border-amber-300 rounded-sm text-amber-900 flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Notice of Financial Encumbrance:</strong> An active equitable mortgage lien is recorded on this property. 
                      Alienation, registry sale, or secondary mortgage without prior lender NOC violates Section 26-D of SARFAESI Act.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-500 block text-[10px]">CERSAI Security Interest ID:</span>
                      <span className="font-mono font-bold text-base text-navy-900">
                        {parcel.encumbrance.chargeIdCERSAI || 'CERSAI-RECORD-ACTIVE'}
                      </span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-500 block text-[10px]">Charge Holder / Lending Bank:</span>
                      <span className="font-bold text-navy-950">{parcel.encumbrance.bankName}</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-500 block text-[10px]">Lender Branch / Operating Office:</span>
                      <span className="font-semibold">{parcel.encumbrance.branchName}</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-500 block text-[10px]">Sanctioned Lien Amount (INR):</span>
                      <span className="font-mono font-bold text-emerald-800 text-sm">
                        ₹{(parcel.encumbrance.lienAmountINR || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-500 block text-[10px]">SRO Registered Deed Ref:</span>
                      <span className="font-mono">{parcel.encumbrance.deedRefNo}</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                      <span className="text-slate-500 block text-[10px]">Date of Charge Creation:</span>
                      <span className="font-mono font-semibold">{parcel.encumbrance.chargeSanctionDate}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex justify-end">
                    <a
                      href="https://www.cersai.org.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-navy-800 hover:bg-navy-900 text-white font-semibold rounded-sm text-xs transition-colors"
                    >
                      <span>Query Central CERSAI Registry</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div className="font-bold text-navy-900 text-base">Nil Encumbrance Certificate</div>
                  <div className="text-xs text-slate-600 max-w-md mx-auto">
                    Search of CERSAI Asset Registry and Sub-Registrar Book-1 records reveals NO registered 
                    mortgage charges, bank liens, or court attachment orders against ULPIN <strong>{parcel.ulpin}</strong>.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SURVEY OF INDIA CORS TIE-SHEET */}
          {activeDoc === 'cors' && (
            <div className="border border-slate-300 p-6 rounded-sm bg-white space-y-5 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h2 className="text-sm font-bold text-navy-900">
                    Survey of India (SOI) — Geodetic & Research Branch
                  </h2>
                  <div className="text-xs text-slate-500">
                    CORS Network Cadastral Spatial Calibration Tie-Sheet
                  </div>
                </div>
                <div className="text-right font-mono text-[11px] text-slate-500">
                  Datum: WGS-84 (EPSG:4326) • Epoch: 2020.0
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-slate-500 block text-[10px]">Centroid Latitude:</span>
                  <span className="font-mono font-bold text-navy-900">{parcel.centroid[0].toFixed(6)}° N</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-slate-500 block text-[10px]">Centroid Longitude:</span>
                  <span className="font-mono font-bold text-navy-900">{parcel.centroid[1].toFixed(6)}° E</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-slate-500 block text-[10px]">Georeferenced Polygon Area:</span>
                  <span className="font-mono font-bold text-emerald-800">{parcel.georeferencedAreaSqM.toFixed(2)} m²</span>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xs">
                  <span className="text-slate-500 block text-[10px]">Area Variance against Deed:</span>
                  <span className={`font-mono font-bold ${
                    Math.abs(parcel.areaDiscrepancyPercent) > 1.0 ? 'text-amber-700' : 'text-slate-700'
                  }`}>
                    {parcel.areaDiscrepancyPercent > 0 ? `+${parcel.areaDiscrepancyPercent}%` : `${parcel.areaDiscrepancyPercent}%`}
                  </span>
                </div>
              </div>

              <div>
                <div className="font-bold text-navy-900 mb-2">Cadastral Boundary Polygon Vertices (WGS-84 Coordinates):</div>
                <div className="border border-slate-200 rounded-xs overflow-hidden">
                  <table className="w-full divide-y divide-slate-200">
                    <thead className="bg-slate-100 font-semibold text-slate-700">
                      <tr>
                        <th className="p-2 text-left">Vertex</th>
                        <th className="p-2 text-left">Latitude (WGS-84)</th>
                        <th className="p-2 text-left">Longitude (WGS-84)</th>
                        <th className="p-2 text-right">DGPS Survey Accuracy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono">
                      {parcel.polygon.map(([lat, lng], idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-2 font-bold text-navy-900">P{idx + 1}</td>
                          <td className="p-2">{lat.toFixed(6)}° N</td>
                          <td className="p-2">{lng.toFixed(6)}° E</td>
                          <td className="p-2 text-right text-emerald-700 font-semibold">± 0.024 m (Survey Grade)</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-slate-600">
                <div>GNSS Baseline calibrated against Survey of India CORS Network Station.</div>
                <a
                  href="https://cors.surveyofindia.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 font-semibold text-navy-800 hover:text-navy-900 underline"
                >
                  <span>Survey of India CORS Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
