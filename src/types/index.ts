export type PilotRegion = 'chandigarh' | 'tamilnadu';

export type UserRole = 'citizen' | 'patwari' | 'planner';

export type TitleStatus = 'CLEAR' | 'ENCUMBERED' | 'DISPUTED';

export interface RoRDetails {
  ownerName: string;
  fatherOrSpouseName: string;
  sharePercentage: number;
  khewatNo?: string;
  khatauniOrPattaNo: string;
  mutationSerialNo: string;
  mutationSanctionDate: string;
  deedRegistrationDate: string;
  sroOffice: string;
  jamabandiOrFasliYear: string;
  fmbSheetNo?: string;
  landRevenueTaxINR?: number;
  disputeFlag: boolean;
  disputeDetails?: string;
  courtCaseRef?: string;
}

export interface EncumbranceDetails {
  hasLien: boolean;
  bankName?: string;
  branchName?: string;
  lienAmountINR?: number;
  chargeIdCERSAI?: string;
  deedRefNo?: string;
  chargeStatus: 'ACTIVE_CHARGE' | 'DISCHARGED' | 'NO_CHARGE';
  chargeSanctionDate?: string;
}

export interface ZoningDetails {
  zoneCode: string;
  zoneName: string;
  permissibleUse: string;
  cluStatus: 'APPROVED' | 'EXEMPT' | 'PENDING' | 'NON_PERMITTED';
  maxPermissibleFSI: number;
  maxGroundCoveragePercent: number;
  setbackRequirement: string;
  ecoRestrictionFlag: boolean;
  restrictionDescription?: string;
}

export interface EncroachmentDetails {
  hasAnomaly: boolean;
  anomalyAreaSqMeters: number;
  anomalyDirection: string;
  breachDescription: string;
  satelliteBuildingFootprint: [number, number][];
  encroachmentSliver: [number, number][];
}

export interface Parcel {
  id: string;
  ulpin: string; // 14-digit standardized code
  khasraOrPlotNo: string;
  pilot: PilotRegion;
  state: string;
  district: string;
  tehsil: string;
  tehsilOrTaluk?: string;
  villageOrSector: string;
  georeferencedAreaSqM: number;
  recordedDeedAreaSqM: number;
  areaDiscrepancyPercent: number;
  centroid: [number, number];
  polygon: [number, number][];
  titleStatus: TitleStatus;
  landClassification: 'Urban Commercial' | 'Urban Residential' | 'Rural Agricultural (Wet)' | 'Rural Agricultural (Dry)' | 'Government Institutional' | 'Industrial Zone' | 'Grama Natham (Habitation)';
  ror: RoRDetails;
  encumbrance: EncumbranceDetails;
  zoning: ZoningDetails;
  encroachment: EncroachmentDetails;
}

export interface RestrictionLayerItem {
  id: string;
  name: string;
  pilot: PilotRegion;
  type: 'water_buffer' | 'powerline_easement' | 'master_plan_zone';
  zoneClassification?: 'Commercial' | 'Residential' | 'Green_Belt' | 'Water_Buffer';
  coordinates: [number, number][] | [number, number][][];
  bufferWidthMeters?: number;
  description: string;
}

export interface LayerState {
  cadastralBoundaries: boolean;
  clearTitles: boolean;
  encumberedTitles: boolean;
  revenueDisputes: boolean;
  waterBodyBuffer: boolean;
  powerlineEasement: boolean;
  masterPlanZoning: boolean;
  satelliteFootprintComparison: boolean;
  soiCorsGrid: boolean;
  bhunakshaGrid: boolean;
  bhuvanLULC: boolean;
}

export interface LandmarkPoint {
  id: string;
  name: string;
  category: 'Government / SRO' | 'Transit / Commercial' | 'Cadastral / Geodetic' | 'Ecology / Water';
  pilot?: PilotRegion;
  coords: [number, number];
  description: string;
}

