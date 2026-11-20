/**
 * LandClarity Shared Interfaces and Types
 */

import {
  UserRole,
  ParcelVerificationStatus,
  GeometrySourceType,
  DocumentType,
  DiscrepancySeverity,
  DiscrepancyStatus,
  MortgageStatus,
  MutationType,
  MutationStatus,
  DisputeStatus,
  AuditActionType,
} from './enums';

export interface UserSummary {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  organization?: string;
  jurisdictionState?: string;
  jurisdictionDistrict?: string;
}

export interface GeoJSONGeometry {
  type: 'Polygon' | 'MultiPolygon';
  coordinates: number[][][] | number[][][][];
}

export interface ParcelSummary {
  id: string;
  ulpin: string;
  state: string;
  district: string;
  taluk: string;
  village: string;
  surveyNumber: string;
  subSurveyNumber?: string;
  totalAreaSqm: number;
  landClassification: string;
  verificationStatus: ParcelVerificationStatus;
  geometrySource: GeometrySourceType;
  updatedAt: string;
}

export interface ParcelProfile extends ParcelSummary {
  geometry: GeoJSONGeometry;
  owners: ParcelOwnerRecord[];
  documents: ParcelDocumentRecord[];
  discrepancies: DiscrepancyRecord[];
  mutations: MutationRecordSummary[];
  mortgages: MortgageRecordSummary[];
  disputes: DisputeRecordSummary[];
  activeRestrictions: string[];
  lastReviewer?: string;
  lastReviewedAt?: string;
}

export interface ParcelOwnerRecord {
  id: string;
  ownerName: string;
  sharePercentage: number;
  acquisitionType: string;
  registeredDate: string;
  isCoOwner: boolean;
  hasConsented?: boolean;
}

export interface ParcelDocumentRecord {
  id: string;
  documentType: DocumentType;
  fileName: string;
  fileSizeBytes: number;
  mimeType: string;
  sha256Hash: string;
  verificationStatus: ParcelVerificationStatus;
  uploadedAt: string;
  aiProcessed: boolean;
}

export interface DiscrepancyRecord {
  id: string;
  parcelId: string;
  fieldName: string;
  primaryDocName: string;
  primaryValue: string;
  primaryDocPage?: number;
  conflictingDocName: string;
  conflictingValue: string;
  conflictingDocPage?: number;
  severity: DiscrepancySeverity;
  status: DiscrepancyStatus;
  explanation: string;
  detectedAt: string;
  resolvedAt?: string;
}

export interface MutationRecordSummary {
  id: string;
  mutationNumber: string;
  mutationType: MutationType;
  status: MutationStatus;
  appliedDate: string;
  approvedDate?: string;
}

export interface MortgageRecordSummary {
  id: string;
  bankName: string;
  loanAccountNoMasked: string;
  sanctionedAmount: number;
  status: MortgageStatus;
  registeredDate: string;
  releasedDate?: string;
}

export interface DisputeRecordSummary {
  id: string;
  caseNumber: string;
  courtOrAuthority: string;
  disputeType: string;
  status: DisputeStatus;
  filingDate: string;
}

export interface AuditLogEntry {
  id: string;
  parcelId: string;
  userId: string;
  userRole: UserRole;
  action: AuditActionType;
  description: string;
  timestamp: string;
  ipAddress?: string;
  fabricTxId?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  statusCode: number;
  message: string;
  error: string;
  timestamp: string;
}
