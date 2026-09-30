import type { Parcel, RestrictionLayerItem, PilotRegion } from '../types';

export const PILOT_CONFIGS: Record<PilotRegion, {
  name: string;
  badge: string;
  center: [number, number];
  zoom: number;
  state: string;
  district: string;
  tehsil: string;
  description: string;
}> = {
  chandigarh: {
    name: 'Chandigarh Urban: Sector 17 & 18 Pilot',
    badge: 'UT Pilot: Urban Commercial & Plotted Residential',
    center: [30.7398, 76.7825],
    zoom: 16,
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    description: 'High-density urban commercial core and planned sector estates integrated with UT Estate Office and SRO Sector 17.'
  },
  tamilnadu: {
    name: 'Tamil Nadu Rural: Kanchipuram (Nemili Village)',
    badge: 'State Pilot: Agricultural Cadastre & Water Bodies',
    center: [12.9860, 79.7180],
    zoom: 16,
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    description: 'Rural agricultural khasra plots, Nanja/Punja land classifications, Palar river catchment buffers, and agricultural bank liens.'
  }
};

export const PARCELS_DATA: Parcel[] = [
  // ================= CHANDIGARH URBAN PILOT (8 PARCELS) =================
  {
    id: 'CH-PARCEL-01',
    ulpin: '04-28-2026-CH01',
    khasraOrPlotNo: 'SCO 141-142, Sector 17-C',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Commercial Complex',
    georeferencedAreaSqM: 450.2,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 0.04,
    centroid: [30.7410, 76.7818],
    polygon: [
      [30.74125, 76.78155],
      [30.74125, 76.78205],
      [30.74075, 76.78205],
      [30.74075, 76.78155]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Sardar Manmohan Singh Brar',
      fatherOrSpouseName: 'Late Jaswant Singh Brar',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC17-902',
      mutationSerialNo: 'MUT-2018-04921',
      mutationSanctionDate: '2018-09-14',
      deedRegistrationDate: '2018-08-02',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core',
      permissibleUse: 'Retail, Corporate Offices, Banking Branches',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Zero lot line arcade frontage; 3m rear service lane',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Constructed footprint strictly complies with Estate Office approved architectural frame.',
      satelliteBuildingFootprint: [
        [30.74122, 76.78158],
        [30.74122, 76.78202],
        [30.74078, 76.78202],
        [30.74078, 76.78158]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-02',
    ulpin: '04-28-2026-CH02',
    khasraOrPlotNo: 'SCO 143-144, Sector 17-C',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Commercial Complex',
    georeferencedAreaSqM: 478.4,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 6.31,
    centroid: [30.7410, 76.7826],
    polygon: [
      [30.74125, 76.78235],
      [30.74125, 76.78285],
      [30.74075, 76.78285],
      [30.74075, 76.78235]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Vikramaditya Oberoi',
      fatherOrSpouseName: 'Kailash Nath Oberoi',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC17-905',
      mutationSerialNo: 'MUT-2021-08129',
      mutationSanctionDate: '2021-11-20',
      deedRegistrationDate: '2021-10-15',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'State Bank of India',
      branchName: 'Main Branch, Bank Square, Sector 17-B',
      lienAmountINR: 45000000,
      chargeIdCERSAI: 'CERSAI-CH-2021-884102',
      deedRefNo: 'REG/2021/BOOK-I/VOL-892/PAGE-112',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2021-11-05'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core',
      permissibleUse: 'Retail, Hospitality, Corporate Banking',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Standard public arcade corridor required on North frontage',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: true,
      anomalyAreaSqMeters: 28.4,
      anomalyDirection: 'North-Western Frontage',
      breachDescription: 'Boundary Anomaly Detected: 28.4 sq.m structure extends beyond North coordinate into Public PWD Pedestrian Arcade Right-of-Way.',
      satelliteBuildingFootprint: [
        [30.74145, 76.78235], // Overhang northwards by ~22m
        [30.74145, 76.78265],
        [30.74125, 76.78285],
        [30.74075, 76.78285],
        [30.74075, 76.78235]
      ],
      encroachmentSliver: [
        [30.74125, 76.78235],
        [30.74145, 76.78235],
        [30.74145, 76.78265],
        [30.74125, 76.78265]
      ]
    }
  },
  {
    id: 'CH-PARCEL-03',
    ulpin: '04-28-2026-CH03',
    khasraOrPlotNo: 'Plot No. 48, Sector 18-A',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-A Residential Estate',
    georeferencedAreaSqM: 836.5,
    recordedDeedAreaSqM: 836.0,
    areaDiscrepancyPercent: 0.06,
    centroid: [30.7410, 76.7845],
    polygon: [
      [30.74130, 76.78410],
      [30.74130, 76.78490],
      [30.74070, 76.78490],
      [30.74070, 76.78410]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Dr. Gurpreet Kaur Randhawa',
      fatherOrSpouseName: 'Col. Inderjit Singh Randhawa',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC18-1044',
      mutationSerialNo: 'MUT-2015-01209',
      mutationSanctionDate: '2015-04-10',
      deedRegistrationDate: '2015-03-22',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'R-1',
      zoneName: 'Low-Density Residential Estate',
      permissibleUse: 'Single-family Detached Dwelling Unit',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 1.25,
      maxGroundCoveragePercent: 50,
      setbackRequirement: 'Front 6.0m; Rear 4.5m; Side 2.5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Clear residential boundary complying with UT building bye-laws.',
      satelliteBuildingFootprint: [
        [30.74120, 76.78425],
        [30.74120, 76.78475],
        [30.74080, 76.78475],
        [30.74080, 76.78425]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-04',
    ulpin: '04-28-2026-CH04',
    khasraOrPlotNo: 'Plot No. 49, Sector 18-A',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-A Residential Estate',
    georeferencedAreaSqM: 836.0,
    recordedDeedAreaSqM: 836.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7410, 76.7856],
    polygon: [
      [30.74130, 76.78520],
      [30.74130, 76.78600],
      [30.74070, 76.78600],
      [30.74070, 76.78520]
    ],
    titleStatus: 'DISPUTED',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Rajinder Kumar Gupta & Pradeep Gupta',
      fatherOrSpouseName: 'Late Banarsi Dass Gupta',
      sharePercentage: 50,
      khatauniOrPattaNo: 'CH-EST-SEC18-1045',
      mutationSerialNo: 'MUT-PENDING-COURT',
      mutationSanctionDate: 'Pending Adjudication',
      deedRegistrationDate: '2004-12-18',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: true,
      disputeDetails: 'Injunction Suit No. CS/149/2022 pending before Civil Judge Senior Division, Chandigarh (Partition and Inheritance Title Dispute).',
      courtCaseRef: 'CIS-CH-CS-149-2022'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'R-1',
      zoneName: 'Low-Density Residential Estate',
      permissibleUse: 'Single-family Residential',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 1.25,
      maxGroundCoveragePercent: 50,
      setbackRequirement: 'Front 6.0m; Rear 4.5m; Side 2.5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'No spatial encroachment detected; legal inheritance dispute pending.',
      satelliteBuildingFootprint: [
        [30.74118, 76.78535],
        [30.74118, 76.78585],
        [30.74082, 76.78585],
        [30.74082, 76.78535]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-05',
    ulpin: '04-28-2026-CH05',
    khasraOrPlotNo: 'SCO 145-146, Sector 17-C',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Commercial Complex',
    georeferencedAreaSqM: 450.1,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 0.02,
    centroid: [30.7398, 76.7818],
    polygon: [
      [30.74030, 76.78155],
      [30.74030, 76.78205],
      [30.73930, 76.78205],
      [30.73930, 76.78155]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Trilok Chand Aggarwal',
      fatherOrSpouseName: 'Dina Nath Aggarwal',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC17-910',
      mutationSerialNo: 'MUT-2019-09411',
      mutationSanctionDate: '2019-06-25',
      deedRegistrationDate: '2019-05-11',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core',
      permissibleUse: 'Commercial Retail / Departmental Store',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Standard pedestrian arcade corridor',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Fully aligned with approved building line.',
      satelliteBuildingFootprint: [
        [30.74025, 76.78160],
        [30.74025, 76.78200],
        [30.73935, 76.78200],
        [30.73935, 76.78160]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-06',
    ulpin: '04-28-2026-CH06',
    khasraOrPlotNo: 'Plot No. 12, Sector 18-B (Buffer Adjacent)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-B Urban Estate',
    georeferencedAreaSqM: 1050.8,
    recordedDeedAreaSqM: 1050.0,
    areaDiscrepancyPercent: 0.08,
    centroid: [30.7380, 76.7845],
    polygon: [
      [30.73860, 76.78400],
      [30.73860, 76.78500],
      [30.73740, 76.78500],
      [30.73740, 76.78400]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Justice (Retd.) K. S. Sidhu',
      fatherOrSpouseName: 'Late Bakhtawar Singh Sidhu',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC18-1201',
      mutationSerialNo: 'MUT-2012-03118',
      mutationSanctionDate: '2012-03-15',
      deedRegistrationDate: '2012-02-18',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'R-2',
      zoneName: 'Residential Buffer Zone',
      permissibleUse: 'Plotted Residential (Subject to Choa drainage clearance)',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 1.0,
      maxGroundCoveragePercent: 45,
      setbackRequirement: 'Front 7.5m; Rear 6.0m; Drainage corridor clearance 30m',
      ecoRestrictionFlag: true,
      restrictionDescription: 'Intersects 30-meter buffer zone of N-Choa Seasonal Water Drainage Corridor. Permanent concrete basements strictly prohibited.'
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Within allowable boundary; spatial clearance required for building permits.',
      satelliteBuildingFootprint: [
        [30.73840, 76.78420],
        [30.73840, 76.78480],
        [30.73760, 76.78480],
        [30.73760, 76.78420]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-07',
    ulpin: '04-28-2026-CH07',
    khasraOrPlotNo: 'SCO 147-148, Sector 17-C',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Commercial Complex',
    georeferencedAreaSqM: 450.5,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 0.11,
    centroid: [30.7398, 76.7826],
    polygon: [
      [30.74030, 76.78235],
      [30.74030, 76.78285],
      [30.73930, 76.78285],
      [30.73930, 76.78235]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Pooja Chhabra & Amit Chhabra',
      fatherOrSpouseName: 'Ramesh Chhabra',
      sharePercentage: 50,
      khatauniOrPattaNo: 'CH-EST-SEC17-915',
      mutationSerialNo: 'MUT-2022-11002',
      mutationSanctionDate: '2022-08-14',
      deedRegistrationDate: '2022-07-29',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Punjab National Bank',
      branchName: 'Sector 17-B Large Corporate Branch',
      lienAmountINR: 32000000,
      chargeIdCERSAI: 'CERSAI-CH-2022-549102',
      deedRefNo: 'REG/2022/BOOK-I/VOL-914/PAGE-45',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2022-08-01'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core',
      permissibleUse: 'Financial Services & IT Consultancy Office',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Pedestrian arcade frontage',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Clean cadastral compliance.',
      satelliteBuildingFootprint: [
        [30.74020, 76.78240],
        [30.74020, 76.78280],
        [30.73940, 76.78280],
        [30.73940, 76.78240]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-08',
    ulpin: '04-28-2026-CH08',
    khasraOrPlotNo: 'Plot No. 14, Sector 18-B',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-B Urban Estate',
    georeferencedAreaSqM: 1050.0,
    recordedDeedAreaSqM: 1050.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7380, 76.7856],
    polygon: [
      [30.73860, 76.78510],
      [30.73860, 76.78610],
      [30.73740, 76.78610],
      [30.73740, 76.78510]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Jasleen Kaur Mann',
      fatherOrSpouseName: 'Sardar Amarjit Singh Mann',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC18-1203',
      mutationSerialNo: 'MUT-2020-05891',
      mutationSanctionDate: '2020-05-18',
      deedRegistrationDate: '2020-04-25',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'R-2',
      zoneName: 'Residential Plotted Estate',
      permissibleUse: 'Residential Dwelling',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 1.25,
      maxGroundCoveragePercent: 50,
      setbackRequirement: 'Front 6m; Rear 4m; Side 2.5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Zero boundary breach detected by survey.',
      satelliteBuildingFootprint: [
        [30.73840, 76.78530],
        [30.73840, 76.78590],
        [30.73760, 76.78590],
        [30.73760, 76.78530]
      ],
      encroachmentSliver: []
    }
  },

  // ================= TAMIL NADU RURAL PILOT (10 PARCELS) =================
  {
    id: 'TN-PARCEL-01',
    ulpin: '33-03-2026-TN01',
    khasraOrPlotNo: 'Survey No. 142/1',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 4047.0, // Exactly 1.00 Acre
    recordedDeedAreaSqM: 4046.86,
    areaDiscrepancyPercent: 0.003,
    centroid: [12.9875, 79.7165],
    polygon: [
      [12.9882, 79.7158],
      [12.9882, 79.7172],
      [12.9868, 79.7172],
      [12.9868, 79.7158]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'K. Ramanathan',
      fatherOrSpouseName: 'Kuppusamy Gounder',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 1842',
      mutationSerialNo: 'TN-MUT-2016-4402',
      mutationSanctionDate: '2016-07-19',
      deedRegistrationDate: '2016-06-11',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Paddy Cultivation, Horticultural Nurseries, Farm Store',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m; Agricultural canal buffer 10m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Bunds conform to Village FMB (Field Measurement Book) vector record.',
      satelliteBuildingFootprint: [
        [12.9876, 79.7162],
        [12.9876, 79.7166],
        [12.9872, 79.7166],
        [12.9872, 79.7162]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-02',
    ulpin: '33-03-2026-TN02',
    khasraOrPlotNo: 'Survey No. 142/2',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 3820.0,
    recordedDeedAreaSqM: 4046.86,
    areaDiscrepancyPercent: -5.61,
    centroid: [12.9875, 79.7180],
    polygon: [
      [12.9882, 79.7173],
      [12.9882, 79.7187],
      [12.9868, 79.7187],
      [12.9868, 79.7173]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'M. Selvakumar',
      fatherOrSpouseName: 'Murugesan Pillai',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 1843',
      mutationSerialNo: 'TN-MUT-2020-9104',
      mutationSanctionDate: '2020-10-04',
      deedRegistrationDate: '2020-09-12',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Canara Bank',
      branchName: 'Nemili Rural Branch',
      lienAmountINR: 1250000,
      chargeIdCERSAI: 'CERSAI-TN-2020-149021',
      deedRefNo: 'SRO/SRIP/DOC-3482/2020',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2020-10-15'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Wet Cultivation / Farm Wells',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Boundary aligned with natural drainage bunds.',
      satelliteBuildingFootprint: [
        [12.9875, 79.7178],
        [12.9875, 79.7183],
        [12.9871, 79.7183],
        [12.9871, 79.7178]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-03',
    ulpin: '33-03-2026-TN03',
    khasraOrPlotNo: 'Survey No. 143',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 6070.3,
    recordedDeedAreaSqM: 6070.0,
    areaDiscrepancyPercent: 0.005,
    centroid: [12.9875, 79.7196],
    polygon: [
      [12.9882, 79.7188],
      [12.9882, 79.7204],
      [12.9868, 79.7204],
      [12.9868, 79.7188]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'R. Meenakshi Sundaram',
      fatherOrSpouseName: 'Rajagopal Iyer',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2011',
      mutationSerialNo: 'TN-MUT-2014-1184',
      mutationSanctionDate: '2014-03-12',
      deedRegistrationDate: '2014-02-18',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-2',
      zoneName: 'Dry Crop Agro-Zone',
      permissibleUse: 'Millets, Agro-Forestry, Drip Horticulture',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'FMB coordinates verified by DGPS Rover survey.',
      satelliteBuildingFootprint: [
        [12.9874, 79.7192],
        [12.9874, 79.7198],
        [12.9870, 79.7198],
        [12.9870, 79.7192]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-04',
    ulpin: '33-03-2026-TN04',
    khasraOrPlotNo: 'Survey No. 144/A (River Buffer)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 5200.0,
    recordedDeedAreaSqM: 5200.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9875, 79.7212],
    polygon: [
      [12.9882, 79.7205],
      [12.9882, 79.7220],
      [12.9868, 79.7220],
      [12.9868, 79.7205]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'V. Sundararajan',
      fatherOrSpouseName: 'Varadharajan Naidu',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2015',
      mutationSerialNo: 'TN-MUT-2017-3891',
      mutationSanctionDate: '2017-08-20',
      deedRegistrationDate: '2017-07-04',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'ECO-WB',
      zoneName: 'Palar River Riparian Buffer Corridor',
      permissibleUse: 'Agricultural cultivation only (No permanent RCC structures permitted)',
      cluStatus: 'NON_PERMITTED',
      maxPermissibleFSI: 0.0,
      maxGroundCoveragePercent: 5,
      setbackRequirement: '50-meter statutory buffer from irrigation feeder tank sluice',
      ecoRestrictionFlag: true,
      restrictionDescription: 'Intersects 50m statutory water protection buffer of Nemili irrigation canal. Any commercial or industrial mutation is strictly barred under TN Water Bodies Protection Act.'
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'No unauthorized structure inside riparian buffer.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-05',
    ulpin: '33-03-2026-TN05',
    khasraOrPlotNo: 'Survey No. 145/1B (Power Corridor)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 4800.0,
    recordedDeedAreaSqM: 4800.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9858, 79.7165],
    polygon: [
      [12.9866, 79.7158],
      [12.9866, 79.7172],
      [12.9850, 79.7172],
      [12.9850, 79.7158]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'P. Anandhakrishnan',
      fatherOrSpouseName: 'Perumal Reddiar',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2099',
      mutationSerialNo: 'TN-MUT-2019-1920',
      mutationSanctionDate: '2019-02-14',
      deedRegistrationDate: '2019-01-20',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'UTL-HT',
      zoneName: 'High Tension Transmission Line Corridor',
      permissibleUse: 'Surface Agriculture, Low-height Crops Only',
      cluStatus: 'PENDING',
      maxPermissibleFSI: 0.1,
      maxGroundCoveragePercent: 10,
      setbackRequirement: '18-meter vertical clearance easement under TANTRANSCO 110kV tower line',
      ecoRestrictionFlag: true,
      restrictionDescription: 'TANTRANSCO 110kV High-Tension Transmission Corridor intersects parcel. Trees exceeding 3m height and building construction strictly prohibited.'
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Easement corridor respected by current landholder.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-06',
    ulpin: '33-03-2026-TN06',
    khasraOrPlotNo: 'Survey No. 146',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 4100.0,
    recordedDeedAreaSqM: 4100.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9858, 79.7180],
    polygon: [
      [12.9866, 79.7173],
      [12.9866, 79.7187],
      [12.9850, 79.7187],
      [12.9850, 79.7173]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'D. Loganathan & L. Saravanan',
      fatherOrSpouseName: 'Late Duraisamy Naicker',
      sharePercentage: 50,
      khatauniOrPattaNo: 'Patta No. 2104',
      mutationSerialNo: 'TN-MUT-2021-5082',
      mutationSanctionDate: '2021-05-19',
      deedRegistrationDate: '2021-04-10',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Indian Bank',
      branchName: 'Sriperumbudur Main Agricultural Cell',
      lienAmountINR: 1800000,
      chargeIdCERSAI: 'CERSAI-TN-2021-771904',
      deedRefNo: 'SRO/SRIP/DOC-1904/2021',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2021-06-02'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Wet Cultivation / Solar Pump Wells',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Bund line conforms to digital revenue survey.',
      satelliteBuildingFootprint: [
        [12.9856, 79.7178],
        [12.9856, 79.7182],
        [12.9852, 79.7182],
        [12.9852, 79.7178]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-07',
    ulpin: '33-03-2026-TN07',
    khasraOrPlotNo: 'Survey No. 147/2',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 4000.0,
    recordedDeedAreaSqM: 4000.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9858, 79.7196],
    polygon: [
      [12.9866, 79.7188],
      [12.9866, 79.7204],
      [12.9850, 79.7204],
      [12.9850, 79.7188]
    ],
    titleStatus: 'DISPUTED',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'A. Sivakumar & A. Dhanapal',
      fatherOrSpouseName: 'Late Arumugam Pillai',
      sharePercentage: 50,
      khatauniOrPattaNo: 'Patta No. 2110',
      mutationSerialNo: 'TN-REV-INQ-2022',
      mutationSanctionDate: 'Stayed by Revenue Divisional Officer',
      deedRegistrationDate: '2010-11-25',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: true,
      disputeDetails: 'Title revision appeal Na.Ka. 4192/2022/A1 before Revenue Divisional Officer (RDO), Kanchipuram. Patta transfer stayed pending field re-measurement.',
      courtCaseRef: 'RDO-KANCHI-APL-4192'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-2',
      zoneName: 'Agro Dry Crop Zone',
      permissibleUse: 'Horticulture, Groundnut Cultivation',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Boundaries under joint re-measurement by Tahsildar.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-08',
    ulpin: '33-03-2026-TN08',
    khasraOrPlotNo: 'Survey No. 148',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 5500.0,
    recordedDeedAreaSqM: 5500.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9858, 79.7212],
    polygon: [
      [12.9866, 79.7205],
      [12.9866, 79.7220],
      [12.9850, 79.7220],
      [12.9850, 79.7205]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'Subhadra Ammal',
      fatherOrSpouseName: 'Late Nataraja Mudaliar',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2115',
      mutationSerialNo: 'TN-MUT-2015-8812',
      mutationSanctionDate: '2015-09-02',
      deedRegistrationDate: '2015-08-11',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Wet Cultivation',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Full adherence to Village survey stones.',
      satelliteBuildingFootprint: [
        [12.9856, 79.7208],
        [12.9856, 79.7214],
        [12.9852, 79.7214],
        [12.9852, 79.7208]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-09',
    ulpin: '33-03-2026-TN09',
    khasraOrPlotNo: 'Survey No. 149/1',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 3950.0,
    recordedDeedAreaSqM: 3950.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9842, 79.7165],
    polygon: [
      [12.9849, 79.7158],
      [12.9849, 79.7172],
      [12.9835, 79.7172],
      [12.9835, 79.7158]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'G. Venkatesan',
      fatherOrSpouseName: 'Govindasamy Chettiar',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2140',
      mutationSerialNo: 'TN-MUT-2018-7201',
      mutationSanctionDate: '2018-11-29',
      deedRegistrationDate: '2018-10-18',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-2',
      zoneName: 'Agro Dry Crop Zone',
      permissibleUse: 'Pulses, Millets & Agro-processing shed',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Verified cadastral parcel.',
      satelliteBuildingFootprint: [
        [12.9843, 79.7162],
        [12.9843, 79.7167],
        [12.9838, 79.7167],
        [12.9838, 79.7162]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-10',
    ulpin: '33-03-2026-TN10',
    khasraOrPlotNo: 'Survey No. 150/3',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 4250.0,
    recordedDeedAreaSqM: 4250.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9842, 79.7180],
    polygon: [
      [12.9849, 79.7173],
      [12.9849, 79.7187],
      [12.9835, 79.7187],
      [12.9835, 79.7173]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'Thirumalai Nambi',
      fatherOrSpouseName: 'Srinivasa Iyengar',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2155',
      mutationSerialNo: 'TN-MUT-2022-3112',
      mutationSanctionDate: '2022-04-17',
      deedRegistrationDate: '2022-03-29',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Wet Cultivation',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Cadastral polygon aligned with survey field boundaries.',
      satelliteBuildingFootprint: [
        [12.9842, 79.7177],
        [12.9842, 79.7183],
        [12.9837, 79.7183],
        [12.9837, 79.7177]
      ],
      encroachmentSliver: []
    }
  }
];

export const RESTRICTION_LAYERS: RestrictionLayerItem[] = [
  // Chandigarh Layers
  {
    id: 'CH-RESTRICT-01',
    name: 'N-Choa Natural Drainage 30m Eco-Buffer',
    pilot: 'chandigarh',
    type: 'water_buffer',
    zoneClassification: 'Water_Buffer',
    bufferWidthMeters: 30,
    description: 'Statutory 30m non-construction green buffer zone flanking the natural storm-water Choa corridor.',
    coordinates: [
      [30.7388, 76.7836],
      [30.7388, 76.7865],
      [30.7370, 76.7865],
      [30.7370, 76.7836]
    ]
  },
  {
    id: 'CH-RESTRICT-02',
    name: 'Sector 17 Commercial Zoning Overlay',
    pilot: 'chandigarh',
    type: 'master_plan_zone',
    zoneClassification: 'Commercial',
    description: 'Chandigarh Master Plan 2031: C-1 Central Commercial Zone with strict facade control.',
    coordinates: [
      [30.7415, 76.7812],
      [30.7415, 76.7832],
      [30.7390, 76.7832],
      [30.7390, 76.7812]
    ]
  },
  {
    id: 'CH-RESTRICT-03',
    name: 'Sector 18 Residential Zoning Overlay',
    pilot: 'chandigarh',
    type: 'master_plan_zone',
    zoneClassification: 'Residential',
    description: 'Chandigarh Master Plan 2031: R-1 Low Density Plotted Residential Zone.',
    coordinates: [
      [30.7415, 76.7838],
      [30.7415, 76.7864],
      [30.7372, 76.7864],
      [30.7372, 76.7838]
    ]
  },

  // Tamil Nadu Layers
  {
    id: 'TN-RESTRICT-01',
    name: 'Nemili Irrigation Canal & Tank 50m Buffer',
    pilot: 'tamilnadu',
    type: 'water_buffer',
    zoneClassification: 'Water_Buffer',
    bufferWidthMeters: 50,
    description: 'Statutory 50m riparian buffer under Tamil Nadu Protection of Tanks and Eviction of Encroachment Act, 2007.',
    coordinates: [
      [12.9886, 79.7202],
      [12.9886, 79.7225],
      [12.9864, 79.7225],
      [12.9864, 79.7202]
    ]
  },
  {
    id: 'TN-RESTRICT-02',
    name: 'TANTRANSCO 110kV Transmission Line Easement',
    pilot: 'tamilnadu',
    type: 'powerline_easement',
    bufferWidthMeters: 18,
    description: 'High-Tension Transmission Line Corridor right-of-way (ROW) prohibiting construction or deep excavation.',
    coordinates: [
      [12.9869, 79.7155],
      [12.9869, 79.7190],
      [12.9862, 79.7190],
      [12.9862, 79.7155]
    ]
  },
  {
    id: 'TN-RESTRICT-03',
    name: 'Sriperumbudur Regional Master Plan: Eco-Sensitive Green Belt',
    pilot: 'tamilnadu',
    type: 'master_plan_zone',
    zoneClassification: 'Green_Belt',
    description: 'CMDA Outer Regional Master Plan: Agricultural Conservation Zone protecting Palar river recharge aquifers.',
    coordinates: [
      [12.9888, 79.7150],
      [12.9888, 79.7230],
      [12.9830, 79.7230],
      [12.9830, 79.7150]
    ]
  }
];
