export interface GovPortalLink {
  id: string;
  title: string;
  category: 'National / Ministry' | 'Cadastral & Geospatial' | 'Deeds & Mortgages' | 'State Land Records';
  authority: string;
  url: string;
  description: string;
  badge?: string;
}

export const OFFICIAL_GOV_PORTALS: GovPortalLink[] = [
  // National / Ministry
  {
    id: 'dolr',
    title: 'Department of Land Resources (DoLR)',
    category: 'National / Ministry',
    authority: 'Ministry of Rural Development, Govt. of India',
    url: 'https://dolr.gov.in',
    description: 'Nodal central department for land reforms, DILRMP, and National Land Stack policies.',
    badge: 'Nodal Ministry'
  },
  {
    id: 'dilrmp',
    title: 'Digital India Land Records Modernization Programme',
    category: 'National / Ministry',
    authority: 'Department of Land Resources',
    url: 'https://dilrmp.gov.in',
    description: 'National programme for digitization of cadastral maps, computerized RoR, and registration integration.',
    badge: 'DILRMP'
  },
  {
    id: 'ulpin',
    title: 'Bhu-Aadhaar (ULPIN National Architecture)',
    category: 'National / Ministry',
    authority: 'DoLR & Survey of India',
    url: 'https://dolr.gov.in/ulpin',
    description: '14-digit Unique Land Parcel Identification Number standard connecting spatial parcels to registries.',
    badge: 'Standard'
  },
  {
    id: 'india-gov',
    title: 'National Portal of India',
    category: 'National / Ministry',
    authority: 'Government of India',
    url: 'https://www.india.gov.in',
    description: 'Single window access to information and services provided by all Government entities.',
    badge: 'Official'
  },

  // Cadastral & Geospatial
  {
    id: 'bhunaksha',
    title: 'BhuNaksha Cadastral Mapping Solution',
    category: 'Cadastral & Geospatial',
    authority: 'National Informatics Centre (NIC)',
    url: 'https://bhunaksha.gov.in',
    description: 'Open-source cadastral mapping software by NIC deployed across 24+ Indian states.',
    badge: 'NIC'
  },
  {
    id: 'soi',
    title: 'Survey of India (National Mapping Agency)',
    category: 'Cadastral & Geospatial',
    authority: 'Department of Science & Technology, Govt. of India',
    url: 'https://surveyofindia.gov.in',
    description: 'Authoritative national geodetic survey, national spatial reference frames, and drone cadastre.',
    badge: 'SoI'
  },
  {
    id: 'soi-cors',
    title: 'Survey of India CORS Network',
    category: 'Cadastral & Geospatial',
    authority: 'Survey of India',
    url: 'https://cors.surveyofindia.gov.in',
    description: 'Continuously Operating Reference Station network providing centimeter-level real-time DGPS positioning.',
    badge: 'DGPS / CORS'
  },

  // Deeds & Mortgages
  {
    id: 'ngdrs',
    title: 'National Generic Document Registration System (NGDRS)',
    category: 'Deeds & Mortgages',
    authority: 'DoLR & NIC',
    url: 'https://ngdrs.gov.in',
    description: 'Nationwide standardized software for sub-registrar offices, stamp duties, and online deed conveyancing.',
    badge: 'NGDRS'
  },
  {
    id: 'cersai',
    title: 'CERSAI (Central Registry of Securitisation & Asset Charges)',
    category: 'Deeds & Mortgages',
    authority: 'Reserve Bank of India / Ministry of Finance',
    url: 'https://www.cersai.org.in',
    description: 'Central registry of equitable mortgages and security interests created on real estate property.',
    badge: 'CERSAI'
  },

  // State Land Records
  {
    id: 'chd-estate',
    title: 'Chandigarh Administration Estate Office',
    category: 'State Land Records',
    authority: 'UT Administration of Chandigarh',
    url: 'https://estateoffice.chd.gov.in',
    description: 'Official land registry and estate management for urban sectors 1 to 60, SCO commercial, and residential plots.',
    badge: 'Pilot (UT)'
  },
  {
    id: 'tn-eservices',
    title: 'Tamil Nadu e-Services (AnyPatta / Chitta / FMB)',
    category: 'State Land Records',
    authority: 'Survey & Settlement Department, Govt. of Tamil Nadu',
    url: 'https://eservices.tn.gov.in/eservicesnew/index.html',
    description: 'Direct verification of rural Patta/Chitta, Field Measurement Books (FMB), and A-Register ledgers.',
    badge: 'Pilot (State)'
  },
  {
    id: 'tnreginet',
    title: 'TNREGINET (Tamil Nadu Registration Department)',
    category: 'State Land Records',
    authority: 'Registration Department, Govt. of Tamil Nadu',
    url: 'https://tnreginet.gov.in',
    description: 'Encumbrance Certificate (EC) search and certified deed copy retrieval for Tamil Nadu parcels.',
    badge: 'SRO'
  },
  {
    id: 'bhoomi',
    title: 'Bhoomi Karnataka Land Records',
    category: 'State Land Records',
    authority: 'Revenue Department, Govt. of Karnataka',
    url: 'https://bhoomi.karnataka.gov.in',
    description: 'Pioneering digital land records system for computerized RTCs and automated mutation workflows.',
    badge: 'State DPI'
  },
  {
    id: 'up-bhulekh',
    title: 'UP Bhulekh (Uttar Pradesh Revenue Registry)',
    category: 'State Land Records',
    authority: 'Board of Revenue, Uttar Pradesh',
    url: 'https://upbhulekh.gov.in',
    description: 'Statewide computerized RoR Khatauni and Khasra parcel portal covering 100,000+ revenue villages.',
    badge: 'State DPI'
  },
  {
    id: 'mp-bhulekh',
    title: 'MP Bhulekh (Madhya Pradesh Land Records)',
    category: 'State Land Records',
    authority: 'Land Records Dept, Govt. of Madhya Pradesh',
    url: 'https://mpbhulekh.gov.in',
    description: 'Integrated cadastral maps, computerized Khasra/Khatauni, and diverged land tax administration.',
    badge: 'State DPI'
  }
];
