import React from 'react';
import { AlertTriangle, FileWarning, Terminal } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-slate-800 text-xs">
      <article className="bg-white border border-slate-300 rounded-sm p-8 shadow-xs space-y-6 leading-relaxed">
        {/* Document Header */}
        <div className="border-b-2 border-navy-900 pb-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500 mb-1">
            <span>TERMS OF INFRASTRUCTURE USAGE & STATUTORY DISCLAIMER</span>
            <span>•</span>
            <span>REV 2026.04</span>
          </div>
          <h1 className="text-xl font-bold text-navy-900 tracking-tight">
            Terms of Service & Evidentiary Disclaimer
          </h1>
          <p className="text-slate-600 text-xs mt-1">
            Bhu-Setu National Land Stack Digital Public Infrastructure (DPI)
          </p>
          <div className="mt-2 text-[11px] text-slate-500 font-medium">
            Department of Land Resources, Ministry of Rural Development, Government of India.
          </div>
        </div>

        {/* Section 1: Non-Evidentiary Status */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <FileWarning className="w-4 h-4 mr-1.5 text-navy-800" />
            1. Informational Query vs Certified Court-Admissible Records
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3 text-amber-950 text-xs space-y-1 rounded-xs">
            <div className="font-bold flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1 text-amber-600" />
              Statutory Evidentiary Disclaimer:
            </div>
            <p className="text-[11px] leading-relaxed">
              The Digital Property Passport, map layers, and spatial queries rendered on Bhu-Setu are provided for administrative transparency, spatial planning, and pre-transaction verification purposes only. Data extracted from this portal does not constitute a certified copy of the Record of Rights (RoR) under Section 44 of the Punjab Land Revenue Act, Section 31 of the Tamil Nadu Patta Pass Book Act, or corresponding State Land Revenue Codes.
            </p>
          </div>
          <p className="text-slate-700">
            For judicial proceedings, civil litigation, or statutory registry conveyance, citizens must procure an official certified extract (Jamabandi copy / Nakal / e-Patta) signed by the jurisdictional Revenue Officer (Tehsildar / Patwari / Village Administrative Officer) through the respective State Land Records portal.
          </p>
        </section>

        {/* Section 2: Spatial Coordinate Tolerances & Geodetic Datum */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            2. Geodetic Coordinate Standards & Margin of Error
          </h2>
          <p className="text-slate-700">
            Cadastral boundaries on Bhu-Setu represent georeferenced vectors transformed from legacy revenue maps, Field Measurement Books (FMB), and differential Global Positioning System (DGPS) surveys onto the World Geodetic System 1984 (WGS-84 / EPSG:4326) datum and Universal Transverse Mercator (UTM) projected coordinate system.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
            <li>
              <strong>Urban Pilots (Chandigarh Sector 17/18):</strong> Spatial coordinates maintain a horizontal tolerance threshold of ± 0.05 meters (50 mm), tied to Survey of India Continuously Operating Reference Stations (CORS).
            </li>
            <li>
              <strong>Rural Agricultural Pilots (Tamil Nadu Nemili):</strong> Spatial boundaries derived from Field Measurement Books have an administrative tolerance threshold of ± 0.25 meters.
            </li>
            <li>
              Physical boundary demarcation on the ground, conducted by a licensed revenue surveyor using total stations, shall supersede digital vector representations in any boundary adjudication.
            </li>
          </ul>
        </section>

        {/* Section 3: Permissible Use & API Scraping Restrictions */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <Terminal className="w-4 h-4 mr-1.5 text-navy-800" />
            3. Fair Usage Policy, Rate Limits & Scraping Prohibitions
          </h2>
          <p className="text-slate-700">
            To preserve server availability and protect the privacy of landholders:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
            <li>
              <strong>Automated Scraping Prohibited:</strong> No individual or commercial entity may deploy automated bots, scrapers, crawlers, or harvesting scripts to bulk-extract cadastral polygons, ownership rosters, or mortgage data.
            </li>
            <li>
              <strong>Public Rate Limiting:</strong> Public Citizen queries are limited to 60 requests per minute per IP address. Exceeding thresholds results in automated 24-hour token revocation.
            </li>
            <li>
              <strong>Commercial API Access:</strong> Commercial banking institutions, NBFCs, and civic tech platforms must obtain explicit sandbox clearance and execute a formal Data Access Agreement with the Department of Land Resources.
            </li>
          </ul>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            4. Limitation of Liability & Third-Party Integrations
          </h2>
          <p className="text-slate-700">
            Neither the Government of India, the Ministry of Rural Development, the Department of Land Resources, nor participating State Governments shall be held liable for:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 pl-2 text-slate-700">
            <li>Any commercial, financial, or real estate investment decision executed solely on the basis of informational digital passport queries.</li>
            <li>Intermittent network latency or delays in real-time synchronization between Sub-Registrar Offices and CERSAI mortgage databases.</li>
            <li>Inadvertent cartographic anomalies resulting from satellite imagery temporal drift or cloud occlusion.</li>
          </ol>
        </section>

        {/* Section 5: Governing Law & Jurisdiction */}
        <section className="space-y-3 pt-4 border-t border-slate-200">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            5. Governing Law & Dispute Resolution
          </h2>
          <p className="text-slate-700">
            These Terms of Service are governed by the laws of the Republic of India, including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and respective State Land Revenue Enactments. The High Court of Delhi at New Delhi shall retain exclusive jurisdiction over any administrative or legal disputes arising from National Land Stack operations.
          </p>
        </section>
      </article>
    </div>
  );
};
