import React from 'react';
import { ShieldCheck, MapPin, Building, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'map' | 'technical-docs' | 'privacy-policy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-navy-800 text-xs mt-auto">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Institutional Authority */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-sm bg-navy-800 border border-navy-700 flex items-center justify-center text-amber-400 font-bold">
              🏛
            </div>
            <span className="font-bold text-white text-sm">Department of Land Resources</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Ministry of Rural Development, Government of India. Nodal department for Digital India Land Records Modernization Programme (DILRMP) and National Land Stack public infrastructure.
          </p>
          <div className="text-[11px] text-slate-400 space-y-1">
            <p>NBO Building, Nirman Bhawan, New Delhi - 110011</p>
            <p>Geodetic Reference: WGS-84 / EPSG:4326</p>
          </div>
        </div>

        {/* Column 2: OGC & Technical Standards */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
            Interoperability Standards
          </h4>
          <ul className="space-y-1.5 text-slate-400 text-xs">
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-xs bg-slate-500"></span>
              <span>ULPIN Standard: 14-digit alphanumeric geo-hash</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-xs bg-slate-500"></span>
              <span>OGC API: Features (ISO 19168-1) compliant</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-xs bg-slate-500"></span>
              <span>Tile Services: OGC WMS 1.3.0 and Mapbox Vector Tiles</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-xs bg-slate-500"></span>
              <span>Security: PostGIS 3.4 with TLS 1.3 encryption</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Statutory & Pilot Integrations */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center">
            <Building className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
            Departmental Integrations
          </h4>
          <ul className="space-y-1.5 text-slate-400 text-xs">
            <li>State Revenue Departments (RoR Jamabandi / Patta)</li>
            <li>Sub-Registrar Offices (NGDRS Deed Registration)</li>
            <li>CERSAI & Scheduled Commercial Banking Liens</li>
            <li>Town & Country Planning Master Plan Zoning</li>
            <li>Survey of India (CORS Network DGPS Ground Control)</li>
          </ul>
        </div>

        {/* Column 4: Quick Statutory Links */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center">
            <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
            Statutory & Legal
          </h4>
          <div className="flex flex-col space-y-2 text-xs">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="text-left text-slate-300 hover:text-white hover:underline"
            >
              DPDP Act 2023 Statutory Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-left text-slate-300 hover:text-white hover:underline"
            >
              Terms of Service & Evidentiary Disclaimer
            </button>
            <button
              onClick={() => onNavigate('technical-docs')}
              className="text-left text-slate-300 hover:text-white hover:underline"
            >
              Standard Technical Document (STD v1.4)
            </button>
            <a
              href="https://dolr.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-300 flex items-center space-x-1"
            >
              <span>DoLR Official Portal</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-navy-950 border-t border-navy-800 py-3 px-4 text-center text-slate-400 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2026 Department of Land Resources, Ministry of Rural Development, Government of India. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>National Land Stack Pilot Prototype</span>
            <span>•</span>
            <span>Non-evidentiary prototype for inter-departmental integration testing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
