# LandClarity 🌐🏛️

> **Unified AI-Powered, GIS-Enabled, and Blockchain-Backed Digital Land Ecosystem**  
> *"Land records are too unclear to sell, inherit or borrow against."*

---

## 👥 Team Identity
- **Team Name**: bruteforce
- **Team Members**:
  - **Kumar Adarsh** 
  - **Harsh Kumar**
  - **Ankit Singh**
  - **Awanish Kumar**
- **Theme**: Real Estate and Land

---

## 🧭 Project Vision & Problem Statement

Land records in traditional systems are fragmented across isolated government departments, revenue offices, sub-registrars, survey teams, and financial institutions. Discrepancies between sale deeds, Record of Rights (RoR / Jamabandi / 7/12), mutation records, and physical cadastral surveys lead to protracted litigation, fraudulent property listings, delayed mortgage approvals, and blocked inheritance transitions.

**LandClarity** solves this by establishing a **single, unified Digital Land Parcel Profile** for every parcel:
- Integrates cadastral boundaries with PostGIS spatial indexing.
- Uses an AI Document Intelligence Pipeline (FastAPI, PaddleOCR, Layout Analysis) to cross-compare deeds with revenue records and flag discrepancies with page-level citations.
- Maintains cryptographic SHA-256 integrity trees and audit trails backed by Hyperledger Fabric chaincode.
- Provides role-aware, jurisdiction-isolated dashboards for citizens, surveyors, legal officers, banks, and revenue officials.

---

## 🏗️ Monorepo Architecture

```
LandClarity/
├── apps/
│   ├── web/              # Frontend: React 19, Vite, TypeScript, Tailwind CSS, MapLibre GL JS
│   ├── api/              # Backend: NestJS, TypeScript, Prisma ORM, PostGIS, BullMQ, Redis
│   └── ai-service/       # AI Engine: Python FastAPI, PaddleOCR, LayoutLM/Text Matching, RAG
├── packages/
│   └── shared/           # Shared domain models, enums, DTO interfaces, error schemas
├── infrastructure/
│   └── docker/           # Docker Compose for PostgreSQL/PostGIS, Redis, MinIO
├── docs/
│   ├── architecture/     # System architecture, data modeling, API specifications
│   └── setup/            # Local development guides and deployment runbooks
├── scripts/              # Verification, seeding, and orchestration helper scripts
├── .env.example          # Unified environment variables template
├── .gitignore            # Monorepo-wide ignore rules
├── package.json          # Monorepo root workspace orchestrator
└── tsconfig.base.json    # Shared TypeScript compiler configuration
```

---

## 🧱 Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, Vite, TypeScript, Tailwind CSS, shadcn/ui, MapLibre GL JS, TanStack Query, Zustand, React Hook Form, Zod, Recharts |
| **Backend** | NestJS, TypeScript, Prisma ORM, PostgreSQL + PostGIS, BullMQ, Redis, Passport, JWT, class-validator, Swagger / OpenAPI, Socket.IO |
| **AI Intelligence** | Python 3.14 / 3.11+, FastAPI, PaddleOCR / Tesseract, Pandas, scikit-learn, XGBoost, SHAP, pgvector for semantic retrieval |
| **Document Storage** | MinIO (S3-compatible) with pre-signed temporary URLs, SHA-256 checksums, and versioning |
| **Integrity Ledger** | Hyperledger Fabric (permissioned ledger for integrity anchoring) + SHA-256 digital document receipts |
| **Spatial / GIS** | PostGIS spatial queries (ST_Contains, ST_Intersects, ST_Area), GeoJSON cadastral layers |

---

## 🚦 Phase Roadmap

- [x] **Phase 1: Project Foundation & Architecture** (Workspace orchestration, base configs, docs, environment validation)
- [ ] **Phase 2: Database & Backend Foundation** (PostGIS schema, Prisma migrations, NestJS core modules, RBAC)
- [ ] **Phase 3: Frontend Foundation & Design System** (Tailwind, component library, authentication, shell layouts)
- [ ] **Phase 4: Digital Parcel Profile & Interactive GIS** (Cadastral map viewer, search, spatial discrepancy detection)
- [ ] **Phase 5: Document Management & AI Intelligence Engine** (Private uploads, OCR extraction, discrepancy analysis, RAG assistant)
- [ ] **Phase 6: Multi-Stakeholder Connected Workflows** (Sale due diligence, inheritance mutation, bank mortgage pack)
- [ ] **Phase 7: Blockchain Audit Ledger & Demonstration Polish** (Hyperledger Fabric integrity receipts, end-to-end integration)

---

## ⚡ Quick Start (Phase 1 Setup)

### 1. Prerequisites
- **Node.js**: v20+ (v24.x tested)
- **npm**: v10+ (v11.x tested)
- **Python**: 3.10+ (3.14.x tested)
- **Git**: Installed
- **Docker & Docker Compose**: Recommended for local PostgreSQL/PostGIS, Redis, MinIO

### 2. Install Workspace Dependencies
```powershell
npm install
```

### 3. Build Shared Packages
```powershell
npm run build
```

### 4. Verify Monorepo Health
```powershell
node scripts/verify-environment.js
```
