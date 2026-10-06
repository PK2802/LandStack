# Bhu-Setu: National Land Stack Infrastructure (DPI Pilot)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-land--stack--rho.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://land-stack-rho.vercel.app)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://land-stack-rho.vercel.app)

🌐 **Live Demo:** [https://land-stack-rho.vercel.app](https://land-stack-rho.vercel.app)

> **Department of Land Resources (DoLR), Ministry of Rural Development, Government of India**  
> Unified Geospatial Land Administration Engine linking Cadastral Map Polygons, Record of Rights (RoR), Sub-Registrar Office Deeds, Bank Mortgages, Master Plan Zoning, and Utility Restrictions via a common 14-digit **ULPIN** (Unique Land Parcel Identification Number / Bhu-Aadhaar).

---

## 1. Overview & Architecture

Bhu-Setu is an open GIS-based Digital Public Infrastructure (DPI) pilot developed to eliminate administrative silos across Indian land governance. The system binds disparate state land records, town planning authorities, registration offices, and financial institutions into a single verifiable data fabric without requiring a centralized monolithic database.

### Core Architectural Pillars
- **Geodetic Coordinate Datum**: WGS-84 (EPSG:4326) with local UTM projection (Zone 43N / Zone 44N) tied to Survey of India CORS network stations.
- **ULPIN Standard**: 14-character geohash string generated deterministically from parcel boundary vertices.
- **OGC Compliance**: Conforming to OGC API - Features (ISO 19168-1:2020), OGC WMS 1.3.0, and Mapbox Vector Tiles (MVT).
- **DPDP Act 2023 Compliance**: Strict adherence to Section 6, 8, and 12 of the Digital Personal Data Protection Act, 2023 for data minimization and personal identifier masking.

---

## 2. Integrated Pilots

1. **Chandigarh Urban Pilot (Sector 17 & Sector 18)**
   - High-density commercial core (SCO complexes) and planned plotted residential estates.
   - Integration with UT Estate Office, SRO Sector 17, and Chandigarh Master Plan 2031.
   - AI Satellite Drift & Encroachment detection on commercial pedestrian arcade rights-of-way.
   - N-Choa 30-meter statutory ecological drainage buffer constraints.

2. **Tamil Nadu Rural Pilot (Kanchipuram District, Sriperumbudur Taluk, Nemili Village)**
   - Rural agricultural cadastral plots with Nanja (Wet) and Punja (Dry) classifications.
   - Field Measurement Book (FMB) survey vectorization and Patta/Chitta registry sync.
   - Scheduled commercial bank agricultural crop loan liens (Canara Bank, Indian Bank).
   - Palar river riparian 50-meter buffer protection and TANTRANSCO 110kV high-tension powerline easement corridor.

---

## 3. Platform Capabilities & Features

### A. 3-Tier Geospatial Layer Engine
- **Tier 1 (Base Layer)**: Cadastral plot boundaries with ULPIN labels, centroids, and survey numbers.
- **Tier 2 (Governance & Rights)**:
  - *Clear Title*: Green outline (`#15803D`) for unencumbered parcels.
  - *Active Bank Lien*: Crimson Red outline (`#B91C1C`) for registered SRO / CERSAI mortgages.
  - *Revenue Dispute*: Amber Gold outline (`#D97706`) for stay orders and partition disputes in revenue courts.
- **Tier 3 (Restrictions & Infrastructure)**:
  - Water Body / River Buffer (50m non-construction buffer zone).
  - High-Tension Transmission Line Easement corridor.
  - Master Plan 2031 Zoning overlays (Commercial C-1, Residential R-1/R-2, Eco-Sensitive Green Belt).

### B. Digital Property Passport Inspector
Clicking on any parcel or searching by ULPIN / Survey Number / Owner Name launches the comprehensive Property Passport featuring four structured tabs:
1. **Land Identity & Survey**: ULPIN, State/District/Tehsil/Village, Survey/Khasra No, and dynamic DGPS vs Recorded Deed area discrepancy calculation.
2. **Record of Rights (RoR)**: Landowner name, share percentage, Patta/Khatauni record, mutation serial number, deed registration date, and dispute flags.
3. **Encumbrance & Liabilities**: CERSAI registered mortgages, lending bank name, lien amount (INR), and statutory pre-mutation NOC requirements.
4. **Master Plan & Zoning**: Permissible land use, CLU status, permissible FSI, maximum ground coverage, and setback requirements.

### C. Official Verified Property Passport (PDF Export)
- Print-ready institutional certificate format.
- Real-time dynamic cryptographic QR code generated using `qrcode.react`.
- SHA-256 cryptographic verification hash and Director of Land Records digital certification block.
- Direct browser print and PDF export via `@media print` optimized stylesheets.

### D. Cross-Departmental Interoperability Simulator
Interactive drawer executing simulated PostGIS spatial analysis queries (`ST_Intersects`, `ST_Buffer`) and SRO registry lookups:
- **Action 1: Building Permit Clearance**: Evaluates spatial collision against water body buffers and zoning overlays, outputting machine-readable JSON logs and formal approval/rejection verdicts.
- **Action 2: Mutation & Sale Pre-Validation**: Checks active bank mortgages or court injunctions to halt fraudulent deed conveyance before issuing Patwari mutation workflow tokens.

### E. AI Encroachment & Satellite Drift Detection
- Compares 2024 DGPS legal cadastre with 2026 high-resolution satellite plinth footprints.
- Highlights boundary breaches (e.g., 28.4 sq.m structure extending into public PWD right-of-way).
- Generates simulated statutory Patwari field inspection notices under Section 24 of the Land Revenue Act.

### F. Statutory Documentation & Legal Pages
- **`/technical-docs`**: Standard Technical Document (STD v1.4) whitepaper viewer with SVG architecture diagrams, JSON schemas, OpenAPI 3.0 endpoint explorer, RBAC matrix, and Markdown export.
- **`/privacy-policy`**: Statutory policy conforming to the Digital Personal Data Protection (DPDP) Act, 2023, defining Data Fiduciary roles, data minimization, and 30-day Grievance Redressal mandates.
- **`/terms`**: Statutory terms covering non-evidentiary query disclaimers, geodetic margins of error (±0.05m to ±0.25m), and automated scraping prohibitions.
- **Custom Domain Modal**: Binding instructions for `landstack.gov.in` with DNS CNAME, A, and TXT record configurations.

---

## 4. Getting Started & Development

### Prerequisites
- Node.js v18+ (tested on Node v26)
- npm v9+

### Installation
\`\`\`bash
# Clone repository
git clone https://github.com/PK2802/LandStack.git
cd LandStack

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`
The application will be accessible at \`http://localhost:5173/\`.

### Production Build
\`\`\`bash
# Compile TypeScript and bundle with Vite
npm run build

# Preview production build locally
npm run preview
\`\`\`

---

## 5. Custom Domain Configuration (landstack.gov.in)

To bind the production deployment to `landstack.gov.in` or a custom sub-domain:

| Record Type | Host / Name | Target Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `landstack.gov.in` | `cname.vercel-dns.com` | 3600 |
| **A** | `@` (Apex) | `76.76.21.21` | 3600 |
| **TXT** | `_challenge.landstack.gov.in` | `vc-domain-verify=landstack-2026-ind` | 3600 |

### NGINX Reverse Proxy Configuration (NIC / Sovereign Datacenter)
\`\`\`nginx
server {
    listen 443 ssl http2;
    server_name landstack.gov.in;

    ssl_certificate /etc/ssl/certs/landstack.crt;
    ssl_certificate_key /etc/ssl/private/landstack.key;
    ssl_protocols TLSv1.3;

    location / {
        root /var/www/landstack/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
\`\`\`

---

## 6. License & Statutory Notice

Released under the Open Government Data License (OGDL-India). Developed for pilot evaluation by the Department of Land Resources (DoLR), Ministry of Rural Development, Government of India.
