# LandClarity Domain Data Model Specification

## 1. Core Entity Relationship Overview

The core domain model is anchored around the **`Parcel`** entity, connecting spatial boundaries, ownership ledgers, physical deeds, encumbrances, and mutation events.

```mermaid
erDiagram
    PARCEL ||--o{ PARCEL_OWNER : "has current/past"
    PARCEL ||--o{ PARCEL_DOCUMENT : "contains"
    PARCEL ||--o{ MUTATION_RECORD : "undergoes"
    PARCEL ||--o{ MORTGAGE_CHARGE : "encumbered by"
    PARCEL ||--o{ DISPUTE_OBJECTION : "subject to"
    PARCEL ||--o{ AUDIT_TRAIL : "generates"

    USER ||--o{ PARCEL_OWNER : "holds title as"
    USER ||--o{ AUDIT_TRAIL : "triggers action"
    USER ||--o{ CONSENT_GRANT : "issues"

    PARCEL_DOCUMENT ||--o{ DOCUMENT_EXTRACTION : "analyzed by AI"
    DOCUMENT_EXTRACTION ||--o{ DISCREPANCY_FLAG : "triggers"

    PARCEL {
        uuid id PK
        string ulpin UK "Unique Land Parcel Identification Number"
        string state
        string district
        string taluk
        string village
        string survey_number
        string sub_survey_number
        decimal total_area_sqm
        string land_classification
        geometry boundary_geom "PostGIS Polygon / MultiPolygon"
        string verification_status
        string source_type
        timestamp created_at
        timestamp updated_at
    }

    PARCEL_DOCUMENT {
        uuid id PK
        uuid parcel_id FK
        string document_type "SALE_DEED, ROR_JAMABANDI, MUTATION_CERT, etc."
        string file_storage_key
        string file_name
        string mime_type
        integer file_size_bytes
        string sha256_hash "Tamper-evident checksum"
        string verification_status
        timestamp uploaded_at
    }

    DOCUMENT_EXTRACTION {
        uuid id PK
        uuid document_id FK
        jsonb extracted_fields "Owner names, survey numbers, areas"
        decimal confidence_score
        string ocr_engine
        timestamp processed_at
    }

    DISCREPANCY_FLAG {
        uuid id PK
        uuid parcel_id FK
        uuid primary_doc_id FK
        uuid conflicting_doc_id FK
        string field_name "e.g. survey_number, area, owner_name"
        string primary_value
        string conflicting_value
        string severity "CRITICAL, WARNING, INFO"
        string status "DETECTED, REVIEWED, RESOLVED, DISMISSED"
        text reviewer_notes
    }

    MORTGAGE_CHARGE {
        uuid id PK
        uuid parcel_id FK
        string bank_name
        string loan_account_no
        decimal sanctioned_amount
        string status "ACTIVE, RELEASED, IN_DEFAULT"
        timestamp registered_date
        timestamp release_date
    }

    MUTATION_RECORD {
        uuid id PK
        uuid parcel_id FK
        string mutation_number UK
        string mutation_type "SALE, INHERITANCE, PARTITION, COURT_ORDER"
        string status "APPLIED, NOTICE_ISSUED, OBJECTION_RECEIVED, APPROVED, REJECTED"
        timestamp application_date
        timestamp completion_date
    }

    AUDIT_TRAIL {
        uuid id PK
        uuid parcel_id FK
        uuid user_id FK
        string action_type
        string ip_address
        jsonb payload_delta
        string fabric_tx_id "Blockchain anchor transaction ID"
        timestamp timestamp
    }
```

---

## 2. Spatial Geometry Standards
- **CRS (Coordinate Reference System)**: WGS 84 (`EPSG:4326`) for GeoJSON exchange; projected system (such as UTM or EPSG:3857) for precise metric area calculations in PostGIS.
- **Geometry Types**: `POLYGON` or `MULTIPOLYGON` with standard topological validity checks (`ST_IsValid`, `ST_MakeValid`).
- **Cadastral Labels**: Each geometry boundary has a recorded status:
  - `OFFICIAL_GOVERNMENT`: Sourced from certified cadastral vectors.
  - `SURVEYOR_VERIFIED`: Measured and signed by a licensed ground surveyor.
  - `USER_SUBMITTED`: Indicative boundary uploaded by citizen/agent.
  - `APPROXIMATE`: Estimated centroid or buffer for discovery purposes.
