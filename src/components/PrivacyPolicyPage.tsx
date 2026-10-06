import React from 'react';
import { ShieldCheck, Mail, Clock, Phone, ExternalLink } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-slate-800 text-xs">
      <article className="bg-white border border-slate-300 rounded-sm p-8 shadow-xs space-y-6 leading-relaxed">
        {/* Document Header */}
        <div className="border-b-2 border-navy-900 pb-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500 mb-1">
            <span>STATUTORY INSTRUMENT: DPDP-REG-2026-DLR</span>
            <span>•</span>
            <span>GAZETTE NOTIFICATION COMPLIANT</span>
          </div>
          <h1 className="text-xl font-bold text-navy-900 tracking-tight">
            Digital Personal Data Protection (DPDP) Statutory Privacy Policy
          </h1>
          <p className="text-slate-600 text-xs mt-1">
            Department of Land Resources (DoLR), Ministry of Rural Development, Government of India.
          </p>
          <div className="mt-2 text-[11px] text-slate-500 font-medium flex flex-wrap items-center gap-2">
            <span>Effective Date: 1st April 2026 • Mandated under Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023).</span>
            <a
              href="https://www.meity.gov.in/content/digital-personal-data-protection-act-2023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 font-semibold underline flex items-center space-x-0.5 ml-1"
            >
              <span>View Official Gazette PDF</span>
              <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Section 1: Preamble and Fiduciary Identity */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            1. Preamble & Data Fiduciary Designation
          </h2>
          <p className="text-slate-700">
            This Statutory Privacy Policy governs the processing, masking, indexing, and transmission of land administration data on the Bhu-Setu (National Land Stack) Digital Public Infrastructure platform.
          </p>
          <p className="text-slate-700">
            Under Section 2(i) of the Digital Personal Data Protection Act, 2023:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
            <li>
              <strong>Data Fiduciary:</strong> The Department of Land Resources (DoLR), Ministry of Rural Development, Government of India, acting jointly with jurisdictional State Revenue Departments.
            </li>
            <li>
              <strong>Data Processor:</strong> National Informatics Centre (NIC) and designated open geospatial public cloud infrastructure providers operating under explicit sovereign data localization mandates within the Republic of India.
            </li>
          </ul>
        </section>

        {/* Section 2: Dichotomy of Public Cadastral vs Sensitive Personal Data */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            2. Public Cadastral Data vs Masked Personal Data
          </h2>
          <p className="text-slate-700">
            To balance transparency under statutory Land Revenue Codes with the personal privacy rights guaranteed under Section 6 of the DPDP Act 2023, Bhu-Setu bifurcates land records into two strict categories:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-slate-50 border border-slate-300 p-3 rounded-sm space-y-2">
              <h3 className="font-bold text-navy-900 text-xs flex items-center">
                <span className="w-2 h-2 rounded-xs bg-emerald-600 mr-2"></span>
                Public Cadastral Records (Open DPI)
              </h3>
              <ul className="space-y-1 text-[11px] text-slate-600 list-disc list-inside">
                <li>14-digit Unique Land Parcel Identification Number (ULPIN)</li>
                <li>Georeferenced Polygon Geometry and Boundary Coordinates</li>
                <li>Revenue Survey / Khasra / Plot Number</li>
                <li>Primary Landholder Name (as recorded in Gazette Patta/Jamabandi)</li>
                <li>Permissible Land Use and Master Plan Zoning Classifications</li>
                <li>Public Right-of-Way, Canal, and Ecological Buffer Corridors</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-300 p-3 rounded-sm space-y-2">
              <h3 className="font-bold text-navy-900 text-xs flex items-center">
                <span className="w-2 h-2 rounded-xs bg-rose-600 mr-2"></span>
                Protected / Masked Personal Identifiers
              </h3>
              <ul className="space-y-1 text-[11px] text-slate-600 list-disc list-inside">
                <li>Aadhaar Numbers (Strictly masked: XXXXXXXX1234 or excluded)</li>
                <li>Biometric Data and Iris/Fingerprint Hashes</li>
                <li>Personal Mobile Numbers and Email Addresses</li>
                <li>Specific Bank Account Numbers linked to Crop Loan Disbursements</li>
                <li>Confidential Legal Succession / Family Tree Inheritance Notes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Purpose Limitation & Lawful Grounds */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            3. Purpose Limitation & Statutory Grounds for Processing
          </h2>
          <p className="text-slate-700">
            Personal data is processed strictly under Section 7(a) and 7(b) of the DPDP Act 2023 for:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 pl-2 text-slate-700">
            <li>Facilitating the statutory discharge of state functions under State Land Revenue Acts.</li>
            <li>Enabling automated pre-mutation encumbrance verification between Sub-Registrar Offices and CERSAI.</li>
            <li>Preventing fraudulent alienation of mortgaged, disputed, or government-vested properties.</li>
            <li>Delivering spatial decision support to municipal authorities for building permit clearances.</li>
          </ol>
        </section>

        {/* Section 4: Data Security Standards */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5">
            4. Reasonable Security Safeguards & Audit Trails
          </h2>
          <p className="text-slate-700">
            In accordance with Section 8(5) of the Act, Bhu-Setu implements:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
            <li>End-to-end transport layer security utilizing TLS 1.3 with AES-256-GCM cipher suites.</li>
            <li>Role-Based Access Control (RBAC) preventing unauthorized scraping or bulk identity dumps.</li>
            <li>Immutable audit logging recording timestamp, IP address, and role credentials for every citizen and revenue officer query.</li>
          </ul>
        </section>

        {/* Section 5: Grievance Redressal Officer Contact */}
        <section className="space-y-3 pt-4 border-t border-slate-200">
          <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider border-l-4 border-navy-800 pl-2.5 flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-navy-800" />
            5. Data Protection Officer (DPO) & Statutory Grievance Redressal
          </h2>
          <p className="text-slate-700">
            Under Section 12 of the DPDP Act 2023, data principals possess the right to seek correction, updating, or erasure of erroneous personal data, and to lodge statutory grievances. In accordance with law, all grievances must be acknowledged within 48 hours and resolved within 30 statutory days.
          </p>

          <div className="bg-slate-50 border border-slate-300 p-4 rounded-sm space-y-2 mt-2">
            <div className="font-bold text-navy-900 text-xs">Statutory Grievance Redressal Officer:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-700">
              <div className="space-y-1">
                <p><strong>Designation:</strong> Joint Secretary & Data Protection Officer</p>
                <p><strong>Department:</strong> Department of Land Resources (DoLR)</p>
                <p><strong>Ministry:</strong> Ministry of Rural Development, Govt. of India</p>
                <p><strong>Office:</strong> Room 114, NBO Building, Nirman Bhawan, New Delhi - 110011</p>
              </div>
              <div className="space-y-1">
                <p className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1.5 text-slate-500" /> dpo-landstack@gov.in</p>
                <p className="flex items-center"><Phone className="w-3.5 h-3.5 mr-1.5 text-slate-500" /> +91-11-2306-1248 (Mon - Fri, 09:30 - 17:30 IST)</p>
                <p className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5 text-slate-500" /> Statutory Resolution Timeline: 30 Working Days</p>
                <div className="text-slate-500 text-[10px] flex items-center justify-between pt-1 border-t border-slate-200">
                  <span>Appellate Body: Data Protection Board of India</span>
                  <a
                    href="https://pgportal.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 font-semibold underline flex items-center space-x-0.5"
                  >
                    <span>Lodge on CPGRAMS Portal</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
