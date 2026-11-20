import { Injectable } from '@nestjs/common';
import { ParcelVerificationStatus } from '@landclarity/shared';

@Injectable()
export class AppService {
  getHealthStatus() {
    return {
      status: 'healthy',
      service: 'LandClarity Core API',
      version: '0.1.0',
      timestamp: new Date().toISOString(),
      sampleEnumCheck: ParcelVerificationStatus.OFFICIALLY_CONFIRMED,
      modulesReady: [
        'Discovery & GIS',
        'Digital Parcel Profile',
        'Document Intelligence Gateway',
        'Blockchain Ledger Gateway',
      ],
    };
  }
}
