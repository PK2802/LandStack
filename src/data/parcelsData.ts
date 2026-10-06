import type { Parcel, RestrictionLayerItem, PilotRegion, LandmarkPoint } from '../types';

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
  {
    id: 'CH-PARCEL-09',
    ulpin: '04-28-2026-CH09',
    khasraOrPlotNo: 'SCO 147-148, Sector 17-C',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Commercial Complex',
    georeferencedAreaSqM: 450.0,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7388, 76.7818],
    polygon: [
      [30.73930, 76.78155],
      [30.73930, 76.78205],
      [30.73830, 76.78205],
      [30.73830, 76.78155]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Smt. Shashi Bala Mehra',
      fatherOrSpouseName: 'Late Somesh Mehra',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC17-915',
      mutationSerialNo: 'MUT-2022-07731',
      mutationSanctionDate: '2022-08-14',
      deedRegistrationDate: '2022-07-02',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'DISCHARGED',
      bankName: 'Bank of Baroda',
      branchName: 'Sector 17-C Chandigarh',
      lienAmountINR: 0,
      chargeSanctionDate: 'Discharged on 2023-01-10'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core',
      permissibleUse: 'Retail, Corporate Banking, Departmental Stores',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Continuous pedestrian arcade arcade frontage',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Constructed footprint strictly complies with Estate Office guidelines.',
      satelliteBuildingFootprint: [
        [30.73925, 76.78160],
        [30.73925, 76.78200],
        [30.73835, 76.78200],
        [30.73835, 76.78160]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-10',
    ulpin: '04-28-2026-CH10',
    khasraOrPlotNo: 'Plot No. 52, Sector 18-A',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-A Residential Estate',
    georeferencedAreaSqM: 836.0,
    recordedDeedAreaSqM: 836.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7410, 76.7867],
    polygon: [
      [30.74130, 76.78630],
      [30.74130, 76.78710],
      [30.74070, 76.78710],
      [30.74070, 76.78630]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Sardar Harpreet Singh Dhillon',
      fatherOrSpouseName: 'Sardar Balwinder Singh Dhillon',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC18-1048',
      mutationSerialNo: 'MUT-2023-01844',
      mutationSanctionDate: '2023-03-21',
      deedRegistrationDate: '2023-02-14',
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
      breachDescription: 'Fully aligned with municipal plot coordinates.',
      satelliteBuildingFootprint: [
        [30.74120, 76.78640],
        [30.74120, 76.78700],
        [30.74080, 76.78700],
        [30.74080, 76.78640]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-11',
    ulpin: '04-28-2026-CH11',
    khasraOrPlotNo: 'SCO 120-121, Sector 17-D',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-D Financial Corridor',
    georeferencedAreaSqM: 450.0,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7420, 76.7805],
    polygon: [
      [30.74250, 76.78025],
      [30.74250, 76.78075],
      [30.74150, 76.78075],
      [30.74150, 76.78025]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'M/s Apex Infotech Holdings LLP',
      fatherOrSpouseName: 'Rep. by Dir. Rajesh K. Singla',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-EST-SEC17-742',
      mutationSerialNo: 'MUT-2023-04981',
      mutationSanctionDate: '2023-06-11',
      deedRegistrationDate: '2023-05-18',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Punjab National Bank',
      branchName: 'Bank Square, Sector 17-B Chandigarh',
      lienAmountINR: 32000000,
      chargeIdCERSAI: 'CERSAI-CH-2023-441092',
      deedRefNo: 'REG/2023/BOOK-I/VOL-914/PAGE-402',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2023-06-05'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core',
      permissibleUse: 'Corporate Offices, IT Services, Banking',
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
      breachDescription: 'Zero boundary breach detected by survey.',
      satelliteBuildingFootprint: [
        [30.74240, 76.78030],
        [30.74240, 76.78070],
        [30.74160, 76.78070],
        [30.74160, 76.78030]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-12',
    ulpin: '04-28-2026-CH12',
    khasraOrPlotNo: 'Plot No. 1, Sector 18-D (UT Estate Reserve)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-D Administrative Belt',
    georeferencedAreaSqM: 2050.0,
    recordedDeedAreaSqM: 2050.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7395, 76.7870],
    polygon: [
      [30.74020, 76.78650],
      [30.74020, 76.78750],
      [30.73880, 76.78750],
      [30.73880, 76.78650]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'Chandigarh Administration (UT Estate Office)',
      fatherOrSpouseName: 'Government of India / UT Cadre',
      sharePercentage: 100,
      khatauniOrPattaNo: 'CH-GOVT-SEC18-001',
      mutationSerialNo: 'MUT-GAZETTE-PERMANENT',
      mutationSanctionDate: '1966-11-01',
      deedRegistrationDate: '1966-11-01',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'INST-1',
      zoneName: 'Institutional / Government Reserve Zone',
      permissibleUse: 'Government Administrative Complex & Public Utilities',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 1.5,
      maxGroundCoveragePercent: 40,
      setbackRequirement: 'Front 10m; Rear 8m; Side 6m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Sovereign institutional property; zero civilian encroachment.',
      satelliteBuildingFootprint: [
        [30.74000, 76.78670],
        [30.74000, 76.78730],
        [30.73900, 76.78730],
        [30.73900, 76.78670]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-13',
    ulpin: '04-28-2026-CH13',
    khasraOrPlotNo: 'SCO 150-151, Sector 17-C',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Bank Square Annex',
    georeferencedAreaSqM: 450.0,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7418, 76.7825],
    polygon: [
      [30.74205, 76.78225],
      [30.74205, 76.78275],
      [30.74155, 76.78275],
      [30.74155, 76.78225]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Punjab National Bank Regional Office',
      fatherOrSpouseName: 'Public Sector Undertaking (Govt of India)',
      sharePercentage: 100,
      khewatNo: '48',
      khatauniOrPattaNo: 'CH-JAMABANDI-2023-SEC17C-150',
      mutationSerialNo: 'MUT-2018-CH-612',
      mutationSanctionDate: '2018-04-12',
      deedRegistrationDate: '2018-03-20',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-17C/Block-4',
      landRevenueTaxINR: 1250,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Core (Banking Sector)',
      permissibleUse: 'Banking Services, Financial Institutions, Corporate Offices',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Standard Sector 17 arcade colonnade setback',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Institutional commercial building within strict architectural controls.',
      satelliteBuildingFootprint: [
        [30.74195, 76.78235],
        [30.74195, 76.78265],
        [30.74165, 76.78265],
        [30.74165, 76.78235]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-14',
    ulpin: '04-28-2026-CH14',
    khasraOrPlotNo: 'Plot No. 18, Sector 17-A (Town Planning Complex)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-A Government Secretariat Area',
    georeferencedAreaSqM: 1200.0,
    recordedDeedAreaSqM: 1200.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7432, 76.7815],
    polygon: [
      [30.74360, 76.78100],
      [30.74360, 76.78200],
      [30.74280, 76.78200],
      [30.74280, 76.78100]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'Department of Urban Planning, UT Chandigarh',
      fatherOrSpouseName: 'Chandigarh Administration',
      sharePercentage: 100,
      khewatNo: '12',
      khatauniOrPattaNo: 'CH-GOVT-SEC17A-018',
      mutationSerialNo: 'MUT-1970-UT-008',
      mutationSanctionDate: '1970-08-15',
      deedRegistrationDate: '1970-08-15',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-17A/Cadastre-01',
      landRevenueTaxINR: 0,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'INST-GOV',
      zoneName: 'Institutional Administration Zone',
      permissibleUse: 'Government Offices, Planning Studios, GIS Cell',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 1.5,
      maxGroundCoveragePercent: 45,
      setbackRequirement: 'Front 10m; Rear 8m; Side 6m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Government administrative complex built to Pierre Jeanneret architectural master design.',
      satelliteBuildingFootprint: [
        [30.74345, 76.78120],
        [30.74345, 76.78180],
        [30.74295, 76.78180],
        [30.74295, 76.78120]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-15',
    ulpin: '04-28-2026-CH15',
    khasraOrPlotNo: 'SCO 80-81, Sector 17-D (Plaza Central)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-D Commercial Plaza',
    georeferencedAreaSqM: 520.0,
    recordedDeedAreaSqM: 520.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7386, 76.7825],
    polygon: [
      [30.73890, 76.78220],
      [30.73890, 76.78280],
      [30.73830, 76.78280],
      [30.73830, 76.78220]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'Shri Vikramaditya Sethi & Sons',
      fatherOrSpouseName: 'Late Om Prakash Sethi',
      sharePercentage: 100,
      khewatNo: '84',
      khatauniOrPattaNo: 'CH-JAMABANDI-2023-SEC17D-080',
      mutationSerialNo: 'MUT-2015-CH-490',
      mutationSanctionDate: '2015-11-22',
      deedRegistrationDate: '2015-10-18',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-17D/Block-2',
      landRevenueTaxINR: 2400,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Punjab National Bank',
      branchName: 'Sector 17-B Large Corporate Branch',
      lienAmountINR: 38500000,
      chargeIdCERSAI: 'CERSAI-CH-7749202',
      deedRefNo: 'MODT-2021-REG-3941',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2021-06-14'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Plaza',
      permissibleUse: 'Retail Showroom, Departmental Store, Upper Floor Commercial Offices',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Plaza pedestrian promenade setback 6m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Active mortgage charge registered in CERSAI database.',
      satelliteBuildingFootprint: [
        [30.73880, 76.78230],
        [30.73880, 76.78270],
        [30.73840, 76.78270],
        [30.73840, 76.78230]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-16',
    ulpin: '04-28-2026-CH16',
    khasraOrPlotNo: 'Plot No. 5-A, Sector 18-A (Plotted Residential)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-A Residential Estate',
    georeferencedAreaSqM: 502.4, // 1 Kanal (500 sq yds)
    recordedDeedAreaSqM: 502.4,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7408, 76.7885],
    polygon: [
      [30.74115, 76.78810],
      [30.74115, 76.78890],
      [30.74045, 76.78890],
      [30.74045, 76.78810]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Dr. Gurpreet Singh Sandhu',
      fatherOrSpouseName: 'Col. Inderjit Singh Sandhu',
      sharePercentage: 100,
      khewatNo: '102',
      khatauniOrPattaNo: 'CH-RES-SEC18A-005A',
      mutationSerialNo: 'MUT-2020-CH-331',
      mutationSanctionDate: '2020-09-08',
      deedRegistrationDate: '2020-08-14',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-18A/Cadastre-03',
      landRevenueTaxINR: 850,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'R-1',
      zoneName: 'Low Density Plotted Residential (1 Kanal)',
      permissibleUse: 'Single-family detached dwelling unit / Ground + 2 Floors',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 1.25,
      maxGroundCoveragePercent: 50,
      setbackRequirement: 'Front 6m; Rear 4.5m; Side 2m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Verified residential bungalow aligned strictly to sector grid.',
      satelliteBuildingFootprint: [
        [30.74095, 76.78825],
        [30.74095, 76.78875],
        [30.74065, 76.78875],
        [30.74065, 76.78825]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-17',
    ulpin: '04-28-2026-CH17',
    khasraOrPlotNo: 'Plot No. 12, Sector 18-B (Residential)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 18-B Residential Estate',
    georeferencedAreaSqM: 500.0,
    recordedDeedAreaSqM: 500.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7398, 76.7890],
    polygon: [
      [30.74015, 76.78860],
      [30.74015, 76.78940],
      [30.73945, 76.78940],
      [30.73945, 76.78860]
    ],
    titleStatus: 'DISPUTED',
    landClassification: 'Urban Residential',
    ror: {
      ownerName: 'Harinder Singh Dhillon & Sukhdev Singh Dhillon',
      fatherOrSpouseName: 'Late Balwant Singh Dhillon',
      sharePercentage: 50,
      khewatNo: '114',
      khatauniOrPattaNo: 'CH-RES-SEC18B-012',
      mutationSerialNo: 'MUT-DISPUTED-PENDING',
      mutationSanctionDate: '2022-03-10',
      deedRegistrationDate: '2019-01-15',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-18B/Cadastre-02',
      landRevenueTaxINR: 850,
      disputeFlag: true,
      disputeDetails: 'Injunction order issued by Punjab & Haryana High Court in Civil Revision Petition CR/1842/2023 staying alienation during partition suit.',
      courtCaseRef: 'P&H High Court CR No. 1842 of 2023'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'R-1',
      zoneName: 'Plotted Residential Zone',
      permissibleUse: 'Residential Dwelling Unit',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 1.25,
      maxGroundCoveragePercent: 50,
      setbackRequirement: 'Front 6m; Rear 4.5m; Side 2m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Status-quo injunction registered; transfer or alienation legally restrained.',
      satelliteBuildingFootprint: [
        [30.73995, 76.78875],
        [30.73995, 76.78925],
        [30.73965, 76.78925],
        [30.73965, 76.78875]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-18',
    ulpin: '04-28-2026-CH18',
    khasraOrPlotNo: 'SCO 160-161, Sector 17-C (Bridge Market)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-C Bridge Market Arcade',
    georeferencedAreaSqM: 448.5,
    recordedDeedAreaSqM: 450.0,
    areaDiscrepancyPercent: -0.33,
    centroid: [30.7418, 76.7832],
    polygon: [
      [30.74205, 76.78295],
      [30.74205, 76.78345],
      [30.74155, 76.78345],
      [30.74155, 76.78295]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Urban Commercial',
    ror: {
      ownerName: 'M/s Bridge Market Commercial Properties LLP',
      fatherOrSpouseName: 'Designated Partner: Rajeshwar Goel',
      sharePercentage: 100,
      khewatNo: '56',
      khatauniOrPattaNo: 'CH-JAMABANDI-2023-SEC17C-160',
      mutationSerialNo: 'MUT-2021-CH-779',
      mutationSanctionDate: '2021-12-05',
      deedRegistrationDate: '2021-11-10',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-17C/Block-5',
      landRevenueTaxINR: 1800,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'C-1',
      zoneName: 'Central Commercial Retail',
      permissibleUse: 'Commercial Retail Showroom, Electronics, Apparel',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 2.0,
      maxGroundCoveragePercent: 75,
      setbackRequirement: 'Covered pedestrian corridor 4.5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Commercial building within approved building line.',
      satelliteBuildingFootprint: [
        [30.74195, 76.78305],
        [30.74195, 76.78335],
        [30.74165, 76.78335],
        [30.74165, 76.78305]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-19',
    ulpin: '04-28-2026-CH19',
    khasraOrPlotNo: 'Plot No. 24, Sector 17-B (P&T / Telecom Exchange)',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17-B Institutional District',
    georeferencedAreaSqM: 1450.0,
    recordedDeedAreaSqM: 1450.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7428, 76.7838],
    polygon: [
      [30.74315, 76.78340],
      [30.74315, 76.78420],
      [30.74245, 76.78420],
      [30.74245, 76.78340]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'Department of Telecommunications / BSNL UT Division',
      fatherOrSpouseName: 'Ministry of Communications, Govt of India',
      sharePercentage: 100,
      khewatNo: '16',
      khatauniOrPattaNo: 'CH-GOVT-SEC17B-024',
      mutationSerialNo: 'MUT-1974-CEN-012',
      mutationSanctionDate: '1974-05-18',
      deedRegistrationDate: '1974-05-18',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-17B/Cadastre-02',
      landRevenueTaxINR: 0,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'INST-PUB',
      zoneName: 'Public Telecommunication & Postal Utility',
      permissibleUse: 'Telecom Exchange, Fibre Optical Nodal Office, Postal Sorting Center',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 1.5,
      maxGroundCoveragePercent: 50,
      setbackRequirement: 'Front 8m; Rear 6m; Side 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Sovereign institutional telecommunication utility.',
      satelliteBuildingFootprint: [
        [30.74300, 76.78355],
        [30.74300, 76.78405],
        [30.74260, 76.78405],
        [30.74260, 76.78355]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'CH-PARCEL-20',
    ulpin: '04-28-2026-CH20',
    khasraOrPlotNo: 'Plot No. 1, Sector 17 Green Leisure Promenade',
    pilot: 'chandigarh',
    state: 'Chandigarh (UT)',
    district: 'Chandigarh',
    tehsil: 'Chandigarh Central',
    villageOrSector: 'Sector 17 Public Open Space',
    georeferencedAreaSqM: 1850.0,
    recordedDeedAreaSqM: 1850.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [30.7380, 76.7818],
    polygon: [
      [30.73830, 76.78130],
      [30.73830, 76.78230],
      [30.73770, 76.78230],
      [30.73770, 76.78130]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'Municipal Corporation Chandigarh (Horticulture Wing)',
      fatherOrSpouseName: 'UT Administration Chandigarh',
      sharePercentage: 100,
      khewatNo: '02',
      khatauniOrPattaNo: 'CH-MUN-PARK-001',
      mutationSerialNo: 'MUT-GAZETTE-MCC-1994',
      mutationSanctionDate: '1994-06-01',
      deedRegistrationDate: '1994-06-01',
      sroOffice: 'Sub-Registrar Office, Sector 17, Chandigarh',
      jamabandiOrFasliYear: '2023-2024',
      fmbSheetNo: 'Sheet-17/Green-01',
      landRevenueTaxINR: 0,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'GREEN-PUB',
      zoneName: 'Urban Green Promenade & Public Open Space',
      permissibleUse: 'Public Park, Botanical Landscaping, Open Air Amphitheatre',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.05,
      maxGroundCoveragePercent: 5,
      setbackRequirement: 'Statutory Green Buffer 100% pervious ground surface',
      ecoRestrictionFlag: true,
      restrictionDescription: 'Protected public green lung under Chandigarh Master Plan 2031; zero permanent commercial construction permitted.'
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Protected municipal leisure garden and urban green corridor.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },

  // ================= TAMIL NADU RURAL PILOT (14 PARCELS) =================
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
  },
  {
    id: 'TN-PARCEL-11',
    ulpin: '33-03-2026-TN11',
    khasraOrPlotNo: 'Survey No. 145/1A',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 05)',
    georeferencedAreaSqM: 3237.5, // 0.80 Acre
    recordedDeedAreaSqM: 3237.48,
    areaDiscrepancyPercent: 0.001,
    centroid: [12.9855, 79.7195],
    polygon: [
      [12.9860, 79.7190],
      [12.9860, 79.7200],
      [12.9850, 79.7200],
      [12.9850, 79.7190]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'S. Muthukumar',
      fatherOrSpouseName: 'Subramanian Pillai',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2041',
      mutationSerialNo: 'TN-MUT-2022-8114',
      mutationSanctionDate: '2022-10-14',
      deedRegistrationDate: '2022-09-05',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Indian Overseas Bank',
      branchName: 'Sriperumbudur Agricultural Branch',
      lienAmountINR: 1250000,
      chargeIdCERSAI: 'CERSAI-TN-2022-319041',
      deedRefNo: 'REG/2022/DEED-4412/PAGE-19',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2022-09-28'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Wet Cultivation, Agro-Forestry, Farm Tubewell',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road front 5m; Field channel 3m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'FMB boundary aligns perfectly with physical bunds.',
      satelliteBuildingFootprint: [
        [12.9858, 79.7192],
        [12.9858, 79.7198],
        [12.9852, 79.7198],
        [12.9852, 79.7192]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-12',
    ulpin: '33-03-2026-TN12',
    khasraOrPlotNo: 'Survey No. 145/1B',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 05)',
    georeferencedAreaSqM: 2832.8, // 0.70 Acre
    recordedDeedAreaSqM: 2832.8,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9845, 79.7195],
    polygon: [
      [12.9850, 79.7190],
      [12.9850, 79.7200],
      [12.9840, 79.7200],
      [12.9840, 79.7190]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'V. Lakshmi Ammal',
      fatherOrSpouseName: 'Late Vadivelu Naicker',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Patta No. 2042',
      mutationSerialNo: 'TN-MUT-2021-3910',
      mutationSanctionDate: '2021-04-18',
      deedRegistrationDate: '2021-03-02',
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
      permissibleUse: 'Dry Millets Cultivation, Horticulture',
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
      breachDescription: 'Unencumbered boundary adhering to FMB survey.',
      satelliteBuildingFootprint: [
        [12.9848, 79.7192],
        [12.9848, 79.7198],
        [12.9842, 79.7198],
        [12.9842, 79.7192]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-13',
    ulpin: '33-03-2026-TN13',
    khasraOrPlotNo: 'Survey No. 146/2',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 06)',
    georeferencedAreaSqM: 4047.0, // 1.00 Acre
    recordedDeedAreaSqM: 4046.86,
    areaDiscrepancyPercent: 0.003,
    centroid: [12.9870, 79.7145],
    polygon: [
      [12.9876, 79.7138],
      [12.9876, 79.7152],
      [12.9864, 79.7152],
      [12.9864, 79.7138]
    ],
    titleStatus: 'DISPUTED',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'C. Subramani & C. Vedachalam',
      fatherOrSpouseName: 'Late Chokkalingam Mudaliar',
      sharePercentage: 50,
      khatauniOrPattaNo: 'Patta No. 1774',
      mutationSerialNo: 'TN-MUT-PENDING-RDO',
      mutationSanctionDate: 'Pending Revenue Court',
      deedRegistrationDate: '2008-05-19',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: true,
      disputeDetails: 'Partition Revision Petition No. RP/2023/419 pending before Revenue Divisional Officer (RDO), Kanchipuram.',
      courtCaseRef: 'RDO-KPM-RP-419-2023'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AG-1',
      zoneName: 'Primary Agricultural Protection Zone',
      permissibleUse: 'Agricultural Cultivation',
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
      breachDescription: 'Title dispute in revenue court; boundary vectors intact.',
      satelliteBuildingFootprint: [
        [12.9874, 79.7140],
        [12.9874, 79.7150],
        [12.9866, 79.7150],
        [12.9866, 79.7140]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-14',
    ulpin: '33-03-2026-TN14',
    khasraOrPlotNo: 'Survey No. 147 (Grama Natham)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village Settlement (Grama Natham)',
    georeferencedAreaSqM: 1618.7, // 0.40 Acre
    recordedDeedAreaSqM: 1618.7,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9880, 79.7135],
    polygon: [
      [12.9885, 79.7130],
      [12.9885, 79.7140],
      [12.9875, 79.7140],
      [12.9875, 79.7130]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'Nemili Gram Panchayat / Natham Abadi Common Site',
      fatherOrSpouseName: 'Government of Tamil Nadu',
      sharePercentage: 100,
      khatauniOrPattaNo: 'Natham Block 01-A',
      mutationSerialNo: 'TN-GAZETTE-NATHAM-1972',
      mutationSanctionDate: '1972-01-01',
      deedRegistrationDate: '1972-01-01',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'VIL-RES',
      zoneName: 'Village Habitation & Panchayat Core',
      permissibleUse: 'Panchayat Community Hall, Rural Housing, Common Threshing Floor',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 1.5,
      maxGroundCoveragePercent: 60,
      setbackRequirement: 'Front 3m; Street alignment 2m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Village community settlement land; non-alienable communal tenure.',
      satelliteBuildingFootprint: [
        [12.9883, 79.7132],
        [12.9883, 79.7138],
        [12.9877, 79.7138],
        [12.9877, 79.7132]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-15',
    ulpin: '33-03-2026-TN15',
    khasraOrPlotNo: 'Survey No. 142/4',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 3237.5, // 0.80 Acre
    recordedDeedAreaSqM: 3237.5,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9860, 79.7210],
    polygon: [
      [12.9864, 79.7206],
      [12.9864, 79.7214],
      [12.9856, 79.7214],
      [12.9856, 79.7206]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'Thiru K. Ramanathan & Sons (Joint Patta)',
      fatherOrSpouseName: 'Late Krishnamurthy Gounder',
      sharePercentage: 100,
      khewatNo: '142-W',
      khatauniOrPattaNo: '892',
      mutationSerialNo: 'TN-MUT-2016-SPB-084',
      mutationSanctionDate: '2016-04-18',
      deedRegistrationDate: '2016-03-12',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-Nemili-Field-142',
      landRevenueTaxINR: 180,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AGR-WET',
      zoneName: 'Agricultural Wet Land (Nanja)',
      permissibleUse: 'Wet Cultivation (Paddy / Sugarcane) & Micro-Irrigation',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.2,
      maxGroundCoveragePercent: 15,
      setbackRequirement: 'Canal buffer 10m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Active double-crop paddy parcel with intact field bunds (varappu).',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-16',
    ulpin: '33-03-2026-TN16',
    khasraOrPlotNo: 'Survey No. 143/4',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 3237.5,
    recordedDeedAreaSqM: 3237.5,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9850, 79.7210],
    polygon: [
      [12.9854, 79.7206],
      [12.9854, 79.7214],
      [12.9846, 79.7214],
      [12.9846, 79.7206]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'Tmt. V. Meenakshi Ammal',
      fatherOrSpouseName: 'W/o Late Varadarajan Mudaliar',
      sharePercentage: 100,
      khewatNo: '143-W',
      khatauniOrPattaNo: '914',
      mutationSerialNo: 'TN-MUT-2019-SPB-112',
      mutationSanctionDate: '2019-07-25',
      deedRegistrationDate: '2019-06-30',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-Nemili-Field-143',
      landRevenueTaxINR: 195,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'AGR-WET',
      zoneName: 'Agricultural Wet Land (Nanja)',
      permissibleUse: 'Wet Cultivation, Horticulture, Farm Machinery Shed',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.2,
      maxGroundCoveragePercent: 15,
      setbackRequirement: 'Canal bund 10m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Verified canal-fed agricultural parcel.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-17',
    ulpin: '33-03-2026-TN17',
    khasraOrPlotNo: 'Survey No. 144/4',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village (Revenue Block 04)',
    georeferencedAreaSqM: 3237.5,
    recordedDeedAreaSqM: 3237.5,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9840, 79.7210],
    polygon: [
      [12.9844, 79.7206],
      [12.9844, 79.7214],
      [12.9836, 79.7214],
      [12.9836, 79.7206]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Rural Agricultural (Dry)',
    ror: {
      ownerName: 'Thiru S. Murugesan',
      fatherOrSpouseName: 'S/o Shanmugam Pillai',
      sharePercentage: 100,
      khewatNo: '144-D',
      khatauniOrPattaNo: '958',
      mutationSerialNo: 'TN-MUT-2021-SPB-245',
      mutationSanctionDate: '2021-09-15',
      deedRegistrationDate: '2021-08-10',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-Nemili-Field-144',
      landRevenueTaxINR: 120,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'Canara Bank',
      branchName: 'Sriperumbudur Agricultural Development Branch',
      lienAmountINR: 1850000,
      chargeIdCERSAI: 'CERSAI-TN-9921402',
      deedRefNo: 'MODT-2021-SRO-SPB-1849',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2021-10-04'
    },
    zoning: {
      zoneCode: 'AGR-DRY',
      zoneName: 'Agricultural Dry Land (Punja)',
      permissibleUse: 'Dry Crops (Millets/Groundnut), Borewell Micro-Drip Farm',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.25,
      maxGroundCoveragePercent: 20,
      setbackRequirement: 'Road setback 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Mortgaged to Canara Bank for tractor and drip-irrigation loan.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-18',
    ulpin: '33-03-2026-TN18',
    khasraOrPlotNo: 'Survey No. 170/1 (SIPCOT Industrial Zone)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili SIPCOT Industrial Estate',
    georeferencedAreaSqM: 4850.0, // ~1.20 Acre
    recordedDeedAreaSqM: 4850.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9830, 79.7180],
    polygon: [
      [12.9835, 79.7174],
      [12.9835, 79.7186],
      [12.9825, 79.7186],
      [12.9825, 79.7174]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Industrial Zone',
    ror: {
      ownerName: 'M/s Sriperumbudur Precision Engineering Pvt. Ltd.',
      fatherOrSpouseName: 'Director: R. Venkatesh',
      sharePercentage: 100,
      khewatNo: '170-IND',
      khatauniOrPattaNo: '1204',
      mutationSerialNo: 'TN-MUT-2018-IND-091',
      mutationSanctionDate: '2018-05-14',
      deedRegistrationDate: '2018-04-10',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-SIPCOT-Plot-170A',
      landRevenueTaxINR: 8500,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'IND-SP',
      zoneName: 'Special Industrial & Electronics Manufacturing Zone',
      permissibleUse: 'Aerospace Components, Auto Ancillaries, Precision Machining',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 1.5,
      maxGroundCoveragePercent: 60,
      setbackRequirement: 'Front 10m; Rear 6m; Side 5m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Industrial facility compliant with SIPCOT Master Layout.',
      satelliteBuildingFootprint: [
        [12.9833, 79.7176],
        [12.9833, 79.7184],
        [12.9827, 79.7184],
        [12.9827, 79.7176]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-19',
    ulpin: '33-03-2026-TN19',
    khasraOrPlotNo: 'Survey No. 170/2 (SIPCOT Logistics Hub)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili SIPCOT Industrial Estate',
    georeferencedAreaSqM: 4850.0,
    recordedDeedAreaSqM: 4850.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9830, 79.7195],
    polygon: [
      [12.9835, 79.7189],
      [12.9835, 79.7201],
      [12.9825, 79.7201],
      [12.9825, 79.7189]
    ],
    titleStatus: 'ENCUMBERED',
    landClassification: 'Industrial Zone',
    ror: {
      ownerName: 'Apex Southern Logistics Parks India LLP',
      fatherOrSpouseName: 'Managing Partner: G. Jayakumar',
      sharePercentage: 100,
      khewatNo: '170-LOG',
      khatauniOrPattaNo: '1205',
      mutationSerialNo: 'TN-MUT-2020-LOG-044',
      mutationSanctionDate: '2020-11-19',
      deedRegistrationDate: '2020-10-24',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-SIPCOT-Plot-170B',
      landRevenueTaxINR: 9200,
      disputeFlag: false
    },
    encumbrance: {
      hasLien: true,
      bankName: 'HDFC Bank',
      branchName: 'Guindy Industrial Finance Branch, Chennai',
      lienAmountINR: 42000000,
      chargeIdCERSAI: 'CERSAI-TN-9921403',
      deedRefNo: 'MODT-2021-SRO-SPB-3104',
      chargeStatus: 'ACTIVE_CHARGE',
      chargeSanctionDate: '2021-03-12'
    },
    zoning: {
      zoneCode: 'IND-LOG',
      zoneName: 'Logistics, Warehousing & Cold Chain Zone',
      permissibleUse: 'Automated Warehousing, Logistics Trans-shipment, Container Freight Depot',
      cluStatus: 'APPROVED',
      maxPermissibleFSI: 1.5,
      maxGroundCoveragePercent: 65,
      setbackRequirement: 'Internal Ring Road setback 12m',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Mortgage registered with CERSAI for ₹4.20 Crore.',
      satelliteBuildingFootprint: [
        [12.9833, 79.7191],
        [12.9833, 79.7199],
        [12.9827, 79.7199],
        [12.9827, 79.7191]
      ],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-20',
    ulpin: '33-03-2026-TN20',
    khasraOrPlotNo: 'Survey No. 175/1 (Temple Inam Land)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village Settlement',
    georeferencedAreaSqM: 4046.8, // 1.00 Acre
    recordedDeedAreaSqM: 4046.8,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9875, 79.7160],
    polygon: [
      [12.9880, 79.7155],
      [12.9880, 79.7165],
      [12.9870, 79.7165],
      [12.9870, 79.7155]
    ],
    titleStatus: 'DISPUTED',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'Arulmigu Sri Sundararaja Perumal Temple (Inam Heritage Land)',
      fatherOrSpouseName: 'Hindu Religious & Charitable Endowments (HR&CE) Dept, Govt of Tamil Nadu',
      sharePercentage: 100,
      khewatNo: '175-INAM',
      khatauniOrPattaNo: 'Inam Patta 04',
      mutationSerialNo: 'TN-INAM-INJUNCTION-2022',
      mutationSanctionDate: '2022-04-10',
      deedRegistrationDate: '1961-02-14',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-Nemili-Inam-175',
      landRevenueTaxINR: 0,
      disputeFlag: true,
      disputeDetails: 'Injunction suit O.S. 284/2022 pending before Sub-Court Kanchipuram under TN HR&CE Act 1959 restraining illegal alienation and third-party claims.',
      courtCaseRef: 'Sub-Court Kanchipuram O.S. No. 284/2022'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'INAM-REL',
      zoneName: 'Temple Inam Heritage & Public Religious Trust Zone',
      permissibleUse: 'Religious Ceremonies, Temple Tank Sacred Grove, Non-alienable Charity',
      cluStatus: 'NON_PERMITTED',
      maxPermissibleFSI: 0.1,
      maxGroundCoveragePercent: 10,
      setbackRequirement: 'Heritage boundary 15m',
      ecoRestrictionFlag: true,
      restrictionDescription: 'Statutory bar on registry transfer under Section 22-A of Registration (Tamil Nadu Amendment) Act 2008.'
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Statutory stay on registration; encumbrance search reveals Section 22-A block.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-21',
    ulpin: '33-03-2026-TN21',
    khasraOrPlotNo: 'Survey No. 180/3 (Eri Poramboke Eco-Buffer)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Village Catchment Area',
    georeferencedAreaSqM: 4500.0,
    recordedDeedAreaSqM: 4500.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9820, 79.7160],
    polygon: [
      [12.9825, 79.7154],
      [12.9825, 79.7166],
      [12.9815, 79.7166],
      [12.9815, 79.7154]
    ],
    titleStatus: 'CLEAR',
    landClassification: 'Rural Agricultural (Wet)',
    ror: {
      ownerName: 'Public Works Department (Water Resources Organisation), Govt of Tamil Nadu',
      fatherOrSpouseName: 'State Government Sovereign Water Body',
      sharePercentage: 100,
      khewatNo: '180-WRO',
      khatauniOrPattaNo: 'Eri Poramboke 01',
      mutationSerialNo: 'TN-WRO-GAZETTE-1954',
      mutationSanctionDate: '1954-01-01',
      deedRegistrationDate: '1954-01-01',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-Nemili-Eri-180',
      landRevenueTaxINR: 0,
      disputeFlag: false
    },
    zoning: {
      zoneCode: 'WATER-PROT',
      zoneName: 'PWD Irrigation Tank & Waterbody Protection Zone',
      permissibleUse: 'Rainwater Catchment, Aquifer Recharge, Zero Construction',
      cluStatus: 'NON_PERMITTED',
      maxPermissibleFSI: 0.0,
      maxGroundCoveragePercent: 0,
      setbackRequirement: 'Statutory 50m non-constructible buffer',
      ecoRestrictionFlag: true,
      restrictionDescription: 'Protected under Tamil Nadu Protection of Tanks and Eviction of Encroachment Act 2007; permanent zero development zone.'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Sovereign wetland and groundwater replenishment basin.',
      satelliteBuildingFootprint: [],
      encroachmentSliver: []
    }
  },
  {
    id: 'TN-PARCEL-22',
    ulpin: '33-03-2026-TN22',
    khasraOrPlotNo: 'Survey No. 182/1A (NH-48 Acquisition Corridor)',
    pilot: 'tamilnadu',
    state: 'Tamil Nadu',
    district: 'Kanchipuram',
    tehsil: 'Sriperumbudur Taluk',
    villageOrSector: 'Nemili Highway Corridor (NH-48)',
    georeferencedAreaSqM: 5200.0,
    recordedDeedAreaSqM: 5200.0,
    areaDiscrepancyPercent: 0.0,
    centroid: [12.9810, 79.7185],
    polygon: [
      [12.9815, 79.7178],
      [12.9815, 79.7192],
      [12.9805, 79.7192],
      [12.9805, 79.7178]
    ],
    titleStatus: 'DISPUTED',
    landClassification: 'Government Institutional',
    ror: {
      ownerName: 'National Highways Authority of India (NHAI)',
      fatherOrSpouseName: 'Ministry of Road Transport & Highways, Govt of India',
      sharePercentage: 100,
      khewatNo: '182-NHAI',
      khatauniOrPattaNo: 'NHAI-LA-SEC3A-2023',
      mutationSerialNo: 'TN-NHAI-GAZETTE-3A-882',
      mutationSanctionDate: '2023-08-14',
      deedRegistrationDate: '2023-08-14',
      sroOffice: 'Sub-Registrar Office, Sriperumbudur',
      jamabandiOrFasliYear: 'Fasli 1433 (2023-2024)',
      fmbSheetNo: 'FMB-NH48-Expansion-Strip',
      landRevenueTaxINR: 0,
      disputeFlag: true,
      disputeDetails: 'Gazette Section 3A Acquisition Notification issued for 8-lane expressway expansion; landowner compensation determination petition pending before Special DRO (Land Acquisition - NH).',
      courtCaseRef: 'Special DRO (LA-NH) Arb. Pet. 44/2023'
    },
    encumbrance: {
      hasLien: false,
      chargeStatus: 'NO_CHARGE'
    },
    zoning: {
      zoneCode: 'TRANS-NH',
      zoneName: 'National Highway Express Corridor',
      permissibleUse: 'Expressway Pavement, Service Road, Grade Separators, Drainage Culverts',
      cluStatus: 'EXEMPT',
      maxPermissibleFSI: 0.0,
      maxGroundCoveragePercent: 0,
      setbackRequirement: 'Building line 40m from Highway Centerline',
      ecoRestrictionFlag: false
    },
    encroachment: {
      hasAnomaly: false,
      anomalyAreaSqMeters: 0,
      anomalyDirection: 'None',
      breachDescription: 'Declared national highway right-of-way; acquisition gazette published.',
      satelliteBuildingFootprint: [],
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

export const LANDMARK_POINTS: LandmarkPoint[] = [
  // Chandigarh Pilot Landmarks
  {
    id: 'CH-LM-01',
    name: 'Sector 17 Plaza (Central Pedestrian Core)',
    category: 'Transit / Commercial',
    pilot: 'chandigarh',
    coords: [30.7411, 76.7820],
    description: 'Iconic public pedestrian precinct, retail arcade, and urban gathering plaza.'
  },
  {
    id: 'CH-LM-02',
    name: 'UT Estate Office & Sub-Registrar Office, Sector 17',
    category: 'Government / SRO',
    pilot: 'chandigarh',
    coords: [30.7432, 76.7810],
    description: 'Jurisdictional Sub-Registrar Office, property deed records, and UT building plan sanctions.'
  },
  {
    id: 'CH-LM-03',
    name: 'Bank Square, Sector 17-B',
    category: 'Transit / Commercial',
    pilot: 'chandigarh',
    coords: [30.7405, 76.7802],
    description: 'Regional financial institutional node housing SBI, PNB, and commercial banking vaults.'
  },
  {
    id: 'CH-LM-04',
    name: 'ISBT Sector 17 (Inter-State Bus Terminal)',
    category: 'Transit / Commercial',
    pilot: 'chandigarh',
    coords: [30.7380, 76.7790],
    description: 'Central transit interchange and transportation hub of the Chandigarh capital region.'
  },
  {
    id: 'CH-LM-05',
    name: 'Sector 18 Commercial Market',
    category: 'Transit / Commercial',
    pilot: 'chandigarh',
    coords: [30.7420, 76.7870],
    description: 'Local sector market, neighborhood retail services, and post office.'
  },
  {
    id: 'CH-LM-06',
    name: 'Survey of India CORS Station (CH-CORS-01)',
    category: 'Cadastral / Geodetic',
    pilot: 'chandigarh',
    coords: [30.7445, 76.7850],
    description: 'National CORS reference GNSS station providing real-time ±2cm DGPS positional correction.'
  },

  // Tamil Nadu Pilot Landmarks
  {
    id: 'TN-LM-01',
    name: 'Nemili Village Panchayat Office',
    category: 'Government / SRO',
    pilot: 'tamilnadu',
    coords: [12.9865, 79.7170],
    description: 'Panchayat secretariat, Village Administrative Officer (VAO) e-Seva desk, and local records.'
  },
  {
    id: 'TN-LM-02',
    name: 'Sub-Registrar Office (SRO), Sriperumbudur',
    category: 'Government / SRO',
    pilot: 'tamilnadu',
    coords: [12.9730, 79.9420],
    description: 'Registration office for deeds, conveyances, and stamp valuation across Sriperumbudur taluk.'
  },
  {
    id: 'TN-LM-03',
    name: 'Palar River Basin Riparian Catchment',
    category: 'Ecology / Water',
    pilot: 'tamilnadu',
    coords: [12.9880, 79.7215],
    description: 'Protected riparian aquifer recharge channel governed by statutory 50m non-construction buffer.'
  },
  {
    id: 'TN-LM-04',
    name: 'Sriperumbudur SIPCOT Industrial Corridor',
    category: 'Transit / Commercial',
    pilot: 'tamilnadu',
    coords: [12.9920, 79.9650],
    description: 'Major automotive and electronics manufacturing hub and special economic corridor.'
  },
  {
    id: 'TN-LM-05',
    name: 'Kanchipuram District Collectorate & Revenue Court',
    category: 'Government / SRO',
    pilot: 'tamilnadu',
    coords: [12.8340, 79.7030],
    description: 'Apex district revenue administration, District Revenue Officer (DRO), and land survey division.'
  },
  {
    id: 'TN-LM-06',
    name: 'TANTRANSCO 110kV Nemili Substation',
    category: 'Cadastral / Geodetic',
    pilot: 'tamilnadu',
    coords: [12.9865, 79.7150],
    description: 'High-voltage grid transmission node with statutory 18m easement corridor protection.'
  },
  {
    id: 'TN-LM-07',
    name: 'Survey of India CORS Station (TN-CORS-04)',
    category: 'Cadastral / Geodetic',
    pilot: 'tamilnadu',
    coords: [12.9900, 79.7190],
    description: 'National CORS ground control station calibrated to WGS-84 / UTM Zone 44N datum.'
  },

  // National Administrative Points
  {
    id: 'NAT-LM-01',
    name: 'Nirman Bhawan, New Delhi (DoLR MoRD Headquarters)',
    category: 'Government / SRO',
    coords: [28.6110, 77.2180],
    description: 'Department of Land Resources, Ministry of Rural Development, Government of India.'
  },
  {
    id: 'NAT-LM-02',
    name: 'Survey of India National Headquarters, Dehradun',
    category: 'Cadastral / Geodetic',
    coords: [30.3410, 78.0530],
    description: 'Hathibarkala Estate, Dehradun — Apex national geodetic survey authority established 1767.'
  }
];

export interface GeodeticBenchmark {
  id: string;
  stationCode: string;
  name: string;
  agency: string;
  pilot: PilotRegion;
  coords: [number, number];
  ellipsoidalHeightM: number;
  orthometricHeightM: number;
  datum: string;
  epoch: string;
  horizontalRmsAccuracyM: number;
  stationType: 'Continuously Operating Reference Station (CORS)' | 'Primary GTS Benchmark' | 'Secondary Cadastral Pillar';
  description: string;
}

export const GOV_GEODETIC_BENCHMARKS: GeodeticBenchmark[] = [
  // Chandigarh Pilot Benchmarks
  {
    id: 'BM-CHD-01',
    stationCode: 'CORS-CHD-01',
    name: 'Survey of India CORS Ground Station UT-01',
    agency: 'Survey of India (Geodetic & Research Branch)',
    pilot: 'chandigarh',
    coords: [30.7415, 76.7820],
    ellipsoidalHeightM: 351.24,
    orthometricHeightM: 304.18,
    datum: 'WGS-84 (EPSG:4326)',
    epoch: '2020.0 (ITRF-2014)',
    horizontalRmsAccuracyM: 0.015,
    stationType: 'Continuously Operating Reference Station (CORS)',
    description: 'Choke-ring GNSS dual-frequency receiver broadcasting RTCM 3.2 real-time kinematic corrections.'
  },
  {
    id: 'BM-CHD-02',
    stationCode: 'GTS-CHD-04',
    name: 'Great Trigonometrical Survey Benchmark (GTS-04)',
    agency: 'Survey of India',
    pilot: 'chandigarh',
    coords: [30.7440, 76.7840],
    ellipsoidalHeightM: 355.80,
    orthometricHeightM: 308.74,
    datum: 'Everest 1830 / WGS-84',
    epoch: 'Historic GTS Tie',
    horizontalRmsAccuracyM: 0.022,
    stationType: 'Primary GTS Benchmark',
    description: 'Carved stone geodetic pillar bench-mark tied to high-precision Spirit Leveling line.'
  },
  {
    id: 'BM-CHD-03',
    stationCode: 'CAD-CHD-17',
    name: 'Sector 17/18 Revenue Hudbast Boundary Pillar',
    agency: 'UT Cadastral Survey Division',
    pilot: 'chandigarh',
    coords: [30.7390, 76.7850],
    ellipsoidalHeightM: 349.12,
    orthometricHeightM: 302.05,
    datum: 'WGS-84',
    epoch: '2023.5',
    horizontalRmsAccuracyM: 0.028,
    stationType: 'Secondary Cadastral Pillar',
    description: 'Permanent DGPS-surveyed brass plug monument marking the boundary between Sectors 17 & 18.'
  },

  // Tamil Nadu Pilot Benchmarks
  {
    id: 'BM-TN-01',
    stationCode: 'CORS-TN-08',
    name: 'Survey of India CORS Station TN-CORS-08',
    agency: 'Survey of India / TN Land Survey Dept',
    pilot: 'tamilnadu',
    coords: [12.9868, 79.7175],
    ellipsoidalHeightM: 48.35,
    orthometricHeightM: 102.50,
    datum: 'WGS-84 (EPSG:4326)',
    epoch: '2020.0 (ITRF-2014)',
    horizontalRmsAccuracyM: 0.018,
    stationType: 'Continuously Operating Reference Station (CORS)',
    description: 'Continuous GNSS ground receiver serving Sriperumbudur taluk cadastral re-survey missions.'
  },
  {
    id: 'BM-TN-02',
    stationCode: 'GTS-TN-12',
    name: 'GTS Secondary Levelling Benchmark BM-12',
    agency: 'Survey of India',
    pilot: 'tamilnadu',
    coords: [12.9845, 79.7215],
    ellipsoidalHeightM: 44.12,
    orthometricHeightM: 98.26,
    datum: 'Everest 1830 / WGS-84',
    epoch: 'Historic GTS Tie',
    horizontalRmsAccuracyM: 0.025,
    stationType: 'Primary GTS Benchmark',
    description: 'Benchmark cut on irrigation sluice masonry providing local Mean Sea Level (MSL) vertical control.'
  },
  {
    id: 'BM-TN-03',
    stationCode: 'CAD-TN-42',
    name: 'Nemili Revenue Village Tri-Junction (Mukkoodal) Pillar',
    agency: 'Directorate of Survey & Settlement Tamil Nadu',
    pilot: 'tamilnadu',
    coords: [12.9825, 79.7190],
    ellipsoidalHeightM: 42.80,
    orthometricHeightM: 96.95,
    datum: 'WGS-84',
    epoch: '2023.5',
    horizontalRmsAccuracyM: 0.030,
    stationType: 'Secondary Cadastral Pillar',
    description: 'Carved granite boundary stone marking village tri-junction under Tamil Nadu Survey & Boundaries Act 1923.'
  }
];

export interface BhuNakshaSheet {
  id: string;
  sheetNo: string;
  villageOrSector: string;
  scale: string;
  pilot: PilotRegion;
  surveyAgency: string;
  coordinates: [number, number][];
}

export const BHUNAKSHA_SURVEY_SHEETS: BhuNakshaSheet[] = [
  {
    id: 'BNS-CHD-01',
    sheetNo: 'Revenue Sheet No. 04 (Sector 17-C)',
    villageOrSector: 'Sector 17-C Commercial Core',
    scale: '1:500 Cadastral DGPS',
    pilot: 'chandigarh',
    surveyAgency: 'UT Cadastral Authority & NIC BhuNaksha',
    coordinates: [
      [30.7425, 76.7810],
      [30.7425, 76.7836],
      [30.7380, 76.7836],
      [30.7380, 76.7810]
    ]
  },
  {
    id: 'BNS-CHD-02',
    sheetNo: 'Revenue Sheet No. 05 (Sector 18-A/B)',
    villageOrSector: 'Sector 18 Plotted Estate',
    scale: '1:1000 Cadastral DGPS',
    pilot: 'chandigarh',
    surveyAgency: 'UT Cadastral Authority & NIC BhuNaksha',
    coordinates: [
      [30.7425, 76.7838],
      [30.7425, 76.7900],
      [30.7380, 76.7900],
      [30.7380, 76.7838]
    ]
  },
  {
    id: 'BNS-TN-01',
    sheetNo: 'Village Cadastral Sheet No. 12 (Block 04)',
    villageOrSector: 'Nemili Revenue Village',
    scale: '1:2000 Theodolite / DGPS Re-survey',
    pilot: 'tamilnadu',
    surveyAgency: 'TN Survey & Settlement & NIC BhuNaksha',
    coordinates: [
      [12.9880, 79.7170],
      [12.9880, 79.7225],
      [12.9820, 79.7225],
      [12.9820, 79.7170]
    ]
  },
  {
    id: 'BNS-TN-02',
    sheetNo: 'SIPCOT Industrial Cadastral Sheet No. 03',
    villageOrSector: 'Nemili Industrial Corridor',
    scale: '1:1000 Engineering Cadastre',
    pilot: 'tamilnadu',
    surveyAgency: 'SIPCOT GIS Cell & Survey of India',
    coordinates: [
      [12.9845, 79.7160],
      [12.9845, 79.7210],
      [12.9805, 79.7210],
      [12.9805, 79.7160]
    ]
  }
];

