import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Check, 
  Copy, 
  Database, 
  Network, 
  Shield, 
  Code
} from 'lucide-react';

export const TechnicalDocsPage: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# BHU-SETU: NATIONAL LAND STACK (DPI ARCHITECTURE)
## Standard Technical Document (STD v1.4)
Department of Land Resources, Ministry of Rural Development, Government of India.
Geodetic Coordinate Datum: WGS-84 (EPSG:4326) / Local UTM

### 1. Architectural Topology
- API Gateway & OIDC Authentication Layer
- PostGIS 3.4 Spatial Database (GEOS 3.12, PROJ 9.3)
- OGC API - Features (ISO 19168-1) and Mapbox Vector Tile (MVT) Engine
- Departmental Connectors: State Land Revenue (Jamabandi/Patta), Sub-Registrar Office (NGDRS), CERSAI Mortgage Registry, Town and Country Planning (Master Plan Zoning)

### 2. ULPIN Schema Specification
Standardized 14-digit alphanumeric code:
\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "ULPIN_Cadastral_Record",
  "type": "object",
  "required": ["ulpin", "khasra_no", "state_lgd_code", "district_lgd_code", "geometry"],
  "properties": {
    "ulpin": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}-[A-Z0-9]{4}$" },
    "khasra_no": { "type": "string" },
    "georeferenced_area_sqm": { "type": "number", "minimum": 0 },
    "geometry": { "type": "object" }
  }
}
\`\`\`

### 3. OpenAPI 3.0 Endpoints
- GET /api/v1/parcels/{ulpin}/passport
- POST /api/v1/spatial/verify-overlap
- GET /api/v1/registry/lien-check

### 4. RBAC & DPDP Act 2023 Compliance
Statutory mask of personal identifiers for Public Citizen access. Full mutation token audit trail for Patwari and SRO users.
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Bhu-Setu-Standard-Technical-Document-v1.4.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-800 text-xs">
      {/* Top Action Bar */}
      <div className="no-print bg-white border border-slate-300 rounded-sm p-4 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-sm">
            Statutory Engineering Specification
          </span>
          <h1 className="text-base font-bold text-navy-900 mt-1">
            Bhu-Setu Standard Technical Document (STD-DPI v1.4)
          </h1>
          <p className="text-slate-500 text-[11px]">
            National Land Stack Architectural Specifications, Schemas, OpenAPI 3.0 & DPDP Governance
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleDownloadMarkdown}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-sm border border-slate-300 flex items-center space-x-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>Download Markdown</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 bg-navy-800 hover:bg-navy-900 text-white font-semibold rounded-sm flex items-center space-x-1.5 transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Specification</span>
          </button>
        </div>
      </div>

      {/* Main Document Body */}
      <article className="bg-white border border-slate-300 rounded-sm p-8 shadow-xs space-y-8 leading-relaxed">
        {/* Title Header */}
        <div className="border-b-2 border-navy-900 pb-4">
          <div className="flex items-center justify-between text-slate-500 text-[11px] mb-2 font-mono">
            <span>DOC-ID: DLR-STD-NLS-2026-V1.4</span>
            <span>CLASSIFICATION: PUBLIC DIGITAL PUBLIC INFRASTRUCTURE</span>
          </div>
          <h1 className="text-xl font-bold text-navy-900 tracking-tight">
            National Land Stack (Bhu-Setu) Technical Architecture Specification
          </h1>
          <p className="text-slate-600 text-xs mt-1">
            Department of Land Resources, Ministry of Rural Development, Government of India.
          </p>
        </div>

        {/* Section 1: Executive Architecture Overview */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <Network className="w-4 h-4 mr-1.5 text-navy-800" />
            1. System Architecture & Interoperability Topology
          </h2>
          <p className="text-slate-700">
            The National Land Stack functions as an asynchronous, event-driven federated Digital Public Infrastructure (DPI). Rather than duplicating state land registries into a centralized monolith, Bhu-Setu binds distributed state revenue databases, town planning GIS layers, Sub-Registrar Office deeds, and scheduled commercial banking liens via a deterministic 14-digit Unique Land Parcel Identification Number (ULPIN / Bhu-Aadhaar).
          </p>

          {/* Architecture Vector / SVG Diagram */}
          <div className="bg-slate-50 border border-slate-300 p-4 rounded-sm text-center">
            <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase">
              Figure 1.1: Federated DPI Multi-Tier Topology (Synchronous Query & Webhook Pipeline)
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-sm overflow-x-auto">
              <svg viewBox="0 0 720 280" className="w-full h-auto min-w-[650px] mx-auto text-xs font-sans">
                {/* User Layers */}
                <rect x="20" y="20" width="140" height="50" rx="3" fill="#0F294A" />
                <text x="90" y="42" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">Public Citizens</text>
                <text x="90" y="56" fill="#93C5FD" textAnchor="middle" fontSize="9">Unified Web / Mobile</text>

                <rect x="20" y="85" width="140" height="50" rx="3" fill="#0F294A" />
                <text x="90" y="107" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">Revenue Patwari</text>
                <text x="90" y="121" fill="#93C5FD" textAnchor="middle" fontSize="9">Form-XII Mutation Desk</text>

                <rect x="20" y="150" width="140" height="50" rx="3" fill="#0F294A" />
                <text x="90" y="172" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">Municipal Planners</text>
                <text x="90" y="186" fill="#93C5FD" textAnchor="middle" fontSize="9">Building Permit Engines</text>

                <rect x="20" y="215" width="140" height="50" rx="3" fill="#0F294A" />
                <text x="90" y="237" fill="#FFFFFF" textAnchor="middle" fontWeight="bold" fontSize="11">Commercial Banks</text>
                <text x="90" y="251" fill="#93C5FD" textAnchor="middle" fontSize="9">CERSAI Mortgage Core</text>

                {/* Arrow to Gateway */}
                <line x1="160" y1="145" x2="220" y2="145" stroke="#0F294A" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* API Gateway Box */}
                <rect x="220" y="40" width="130" height="210" rx="3" fill="#1E3A8A" />
                <text x="285" y="70" fill="#FDE047" textAnchor="middle" fontWeight="bold" fontSize="12">API GATEWAY</text>
                <text x="285" y="90" fill="#FFFFFF" textAnchor="middle" fontSize="9">TLS 1.3 / OAuth2</text>
                <text x="285" y="110" fill="#FFFFFF" textAnchor="middle" fontSize="9">Rate Limiting (Token Bucket)</text>
                <text x="285" y="130" fill="#FFFFFF" textAnchor="middle" fontSize="9">DPDP Data Masking</text>
                <text x="285" y="150" fill="#FFFFFF" textAnchor="middle" fontSize="9">ULPIN GeoHash Router</text>
                <text x="285" y="180" fill="#93C5FD" textAnchor="middle" fontSize="9">OGC API - Features</text>
                <text x="285" y="200" fill="#93C5FD" textAnchor="middle" fontSize="9">Vector Tiles (MVT)</text>

                {/* Arrow from Gateway to Core DB */}
                <line x1="350" y1="145" x2="400" y2="145" stroke="#0F294A" strokeWidth="2" />

                {/* Central PostGIS Engine */}
                <rect x="400" y="60" width="140" height="170" rx="3" fill="#064E3B" />
                <text x="470" y="90" fill="#6EE7B7" textAnchor="middle" fontWeight="bold" fontSize="12">POSTGIS SPATIAL</text>
                <text x="470" y="110" fill="#FFFFFF" textAnchor="middle" fontSize="9">Spatial Index: GiST (2D)</text>
                <text x="470" y="130" fill="#FFFFFF" textAnchor="middle" fontSize="9">EPSG:4326 / UTM Grid</text>
                <text x="470" y="150" fill="#FFFFFF" textAnchor="middle" fontSize="9">ST_Intersects / ST_Buffer</text>
                <text x="470" y="170" fill="#FFFFFF" textAnchor="middle" fontSize="9">Cadastral Vector Polygons</text>
                <text x="470" y="195" fill="#FDE047" textAnchor="middle" fontSize="9">Temporal Survey History</text>

                {/* Arrow from Core to Connectors */}
                <line x1="540" y1="145" x2="580" y2="145" stroke="#0F294A" strokeWidth="2" />

                {/* Departmental Connectors */}
                <rect x="580" y="20" width="130" height="50" rx="3" fill="#F8FAFC" stroke="#0F294A" strokeWidth="1.5" />
                <text x="645" y="42" fill="#0F294A" textAnchor="middle" fontWeight="bold" fontSize="10">State Revenue RoR</text>
                <text x="645" y="56" fill="#64748B" textAnchor="middle" fontSize="9">Jamabandi / Patta API</text>

                <rect x="580" y="85" width="130" height="50" rx="3" fill="#F8FAFC" stroke="#0F294A" strokeWidth="1.5" />
                <text x="645" y="107" fill="#0F294A" textAnchor="middle" fontWeight="bold" fontSize="10">SRO Registry (NGDRS)</text>
                <text x="645" y="121" fill="#64748B" textAnchor="middle" fontSize="9">Deed Execution Stream</text>

                <rect x="580" y="150" width="130" height="50" rx="3" fill="#F8FAFC" stroke="#0F294A" strokeWidth="1.5" />
                <text x="645" y="172" fill="#0F294A" textAnchor="middle" fontWeight="bold" fontSize="10">CERSAI Portal</text>
                <text x="645" y="186" fill="#64748B" textAnchor="middle" fontSize="9">Banking Liens Registry</text>

                <rect x="580" y="215" width="130" height="50" rx="3" fill="#F8FAFC" stroke="#0F294A" strokeWidth="1.5" />
                <text x="645" y="237" fill="#0F294A" textAnchor="middle" fontWeight="bold" fontSize="10">Town Planning</text>
                <text x="645" y="251" fill="#64748B" textAnchor="middle" fontSize="9">Master Plan 2031 WFS</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 2: Data Schemas */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <Code className="w-4 h-4 mr-1.5 text-navy-800" />
            2. Formal Data Schemas & ULPIN Payload Specifications
          </h2>
          <p className="text-slate-700">
            All cadastral transactions adhere to GeoJSON RFC 7946 specifications with strictly typed JSON Schema draft-2020-12 validations.
          </p>

          <div className="space-y-3">
            <div className="bg-slate-900 text-slate-200 rounded-sm p-3 font-mono text-xs border border-navy-800 relative">
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-navy-800 pb-2 mb-2">
                <span>Schema: ulpin-cadastral-record.json</span>
                <button
                  onClick={() => handleCopyCode(`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "ULPIN_Cadastral_Record",
  "type": "object",
  "required": ["ulpin", "khasra_no", "state_code", "district_code", "georeferenced_area_sqm", "title_status", "geometry"],
  "properties": {
    "ulpin": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}-[A-Z0-9]{4}$" },
    "khasra_no": { "type": "string" },
    "state_code": { "type": "string" },
    "georeferenced_area_sqm": { "type": "number", "minimum": 0 },
    "recorded_deed_area_sqm": { "type": "number", "minimum": 0 },
    "title_status": { "type": "string", "enum": ["CLEAR", "ENCUMBERED", "DISPUTED"] },
    "geometry": {
      "type": "object",
      "required": ["type", "coordinates"],
      "properties": {
        "type": { "type": "string", "enum": ["Polygon", "MultiPolygon"] },
        "coordinates": { "type": "array" }
      }
    }
  }
}`, 'schema1')}
                  className="hover:text-white flex items-center space-x-1"
                >
                  {copiedSection === 'schema1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Schema</span>
                </button>
              </div>
              <pre className="text-emerald-300 overflow-x-auto text-[11px]">
{`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "ULPIN_Cadastral_Record",
  "type": "object",
  "required": ["ulpin", "khasra_no", "state_code", "district_code", "georeferenced_area_sqm", "title_status", "geometry"],
  "properties": {
    "ulpin": { "type": "string", "pattern": "^[0-9]{2}-[0-9]{2}-[0-9]{4}-[A-Z0-9]{4}$" },
    "khasra_no": { "type": "string" },
    "state_code": { "type": "string" },
    "georeferenced_area_sqm": { "type": "number", "minimum": 0 },
    "recorded_deed_area_sqm": { "type": "number", "minimum": 0 },
    "title_status": { "type": "string", "enum": ["CLEAR", "ENCUMBERED", "DISPUTED"] },
    "geometry": {
      "type": "object",
      "required": ["type", "coordinates"],
      "properties": {
        "type": { "type": "string", "enum": ["Polygon", "MultiPolygon"] },
        "coordinates": { "type": "array" }
      }
    }
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 3: OpenAPI 3.0 Endpoints */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <Database className="w-4 h-4 mr-1.5 text-navy-800" />
            3. Production OpenAPI 3.0 REST Specification
          </h2>
          <p className="text-slate-700">
            Standard REST endpoints deployed at <code className="font-mono text-navy-900 bg-slate-100 px-1.5 py-0.5 rounded-xs">https://api.landstack.gov.in/v1</code>:
          </p>

          <div className="space-y-3">
            {/* Endpoint 1 */}
            <div className="border border-slate-200 rounded-sm overflow-hidden">
              <div className="bg-slate-100 px-3 py-2 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-xs bg-blue-700 text-white font-bold text-[10px]">GET</span>
                  <span className="font-bold text-navy-900">/api/v1/parcels/{'{ulpin}'}/passport</span>
                </div>
                <span className="text-slate-500 font-sans text-[11px]">Fetch verified 4-pillar property passport</span>
              </div>
              <div className="p-3 bg-white text-[11px] text-slate-700 space-y-2">
                <p><strong>Parameters:</strong> <code className="font-mono bg-slate-100 px-1">ulpin</code> (string, path parameter, required) - 14 digit Bhu-Aadhaar.</p>
                <p><strong>Response (200 OK):</strong> Returns unified JSON containing survey identity, RoR ownership, SRO charges, and Master Plan zoning restrictions.</p>
              </div>
            </div>

            {/* Endpoint 2 */}
            <div className="border border-slate-200 rounded-sm overflow-hidden">
              <div className="bg-slate-100 px-3 py-2 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-xs bg-emerald-700 text-white font-bold text-[10px]">POST</span>
                  <span className="font-bold text-navy-900">/api/v1/spatial/verify-overlap</span>
                </div>
                <span className="text-slate-500 font-sans text-[11px]">Run PostGIS buffer collision analysis</span>
              </div>
              <div className="p-3 bg-white text-[11px] text-slate-700 space-y-2">
                <p><strong>Request Body:</strong> <code className="font-mono bg-slate-100 px-1">{`{ "ulpin": "04-28-2026-CH02", "target_layers": ["WATER_BUFFER", "POWERLINE_EASEMENT"] }`}</code></p>
                <p><strong>Response (200 OK):</strong> Returns collision boolean, exact intersecting polygon sliver in GeoJSON format, and statutory buffer clearance flags.</p>
              </div>
            </div>

            {/* Endpoint 3 */}
            <div className="border border-slate-200 rounded-sm overflow-hidden">
              <div className="bg-slate-100 px-3 py-2 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-xs bg-blue-700 text-white font-bold text-[10px]">GET</span>
                  <span className="font-bold text-navy-900">/api/v1/registry/lien-check</span>
                </div>
                <span className="text-slate-500 font-sans text-[11px]">Direct CERSAI / SRO charge verification</span>
              </div>
              <div className="p-3 bg-white text-[11px] text-slate-700 space-y-2">
                <p><strong>Parameters:</strong> <code className="font-mono bg-slate-100 px-1">ulpin</code> (query parameter), <code className="font-mono bg-slate-100 px-1">sro_code</code> (query parameter).</p>
                <p><strong>Response (200 OK):</strong> Returns active mortgage status, mortgagee bank name, lien amount in INR, and Form-II NOC token state.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Security & DPDP Act 2023 Compliance */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <Shield className="w-4 h-4 mr-1.5 text-navy-800" />
            4. Role-Based Access Control (RBAC) & DPDP Act 2023 Compliance
          </h2>
          <p className="text-slate-700">
            In compliance with Section 6 of the Digital Personal Data Protection Act, 2023 (DPDP), the platform enforces strict data minimization and pseudonymization.
          </p>

          {/* RBAC Matrix Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-sm">
            <table className="w-full text-xs text-left">
              <thead className="bg-navy-900 text-white text-[11px] uppercase font-semibold">
                <tr>
                  <th className="p-2.5">User Role</th>
                  <th className="p-2.5">Cadastral Polygons</th>
                  <th className="p-2.5">Owner Names</th>
                  <th className="p-2.5">Bank Lien Amounts</th>
                  <th className="p-2.5">Mutation Actions</th>
                  <th className="p-2.5">Personal Identity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-navy-900">Public Citizen</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Read (Full)</td>
                  <td className="p-2.5 text-slate-700">Read (Public RoR)</td>
                  <td className="p-2.5 text-slate-700">Read (Status Only)</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Blocked</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Masked (No Aadhaar/Phone)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-navy-900">Revenue Patwari</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Read / Edit DGPS</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Full Unmasked</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Full Verification</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Sanction Form-XII</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">e-KYC Verified</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-navy-900">Sub-Registrar (SRO)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Read (Vector)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Full Unmasked</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Deed Registration</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Execute Deeds</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Full Biometric Auth</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-navy-900">Bank Officer</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Read (Vector)</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Borrower Lookup</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Register / Release Lien</td>
                  <td className="p-2.5 text-rose-700 font-semibold">Blocked</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">CERSAI Linked</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-navy-900">Town Planner</td>
                  <td className="p-2.5 text-emerald-700 font-semibold">Read / Zoning Edit</td>
                  <td className="p-2.5 text-slate-700">Read (Public RoR)</td>
                  <td className="p-2.5 text-slate-700">Read (Status Only)</td>
                  <td className="p-2.5 text-blue-700 font-semibold">Permit Clearance</td>
                  <td className="p-2.5 text-slate-500">Not Accessible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Standards Compliance */}
        <section className="space-y-3 pt-4 border-t border-slate-200 text-[11px] text-slate-600">
          <div className="font-semibold text-navy-900 text-xs">Standard Compliance & Statutory Governance:</div>
          <p>• OGC API - Features (ISO 19168-1:2020) Core Conformity Level 1</p>
          <p>• Open Geospatial Consortium (OGC) Web Map Service (WMS) 1.3.0</p>
          <p>• Digital Personal Data Protection Act, 2023 (Section 6, 8, and 12 Mandates)</p>
          <p>• Information Technology Act, 2000 (Section 43A and 66E - Reasonable Security Practices)</p>
        </section>
      </article>
    </div>
  );
};
