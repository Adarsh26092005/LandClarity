# LandClarity Local Development Setup Guide

## 1. Prerequisites Checklist

Ensure your development environment meets the following specifications:
- **Node.js**: `v20.x` or `v24.x` (LTS recommended)
- **npm**: `v10.x` or `v11.x`
- **Python**: `3.10` or higher (Python 3.14 supported for development)
- **Git**: Installed and configured
- **Docker Desktop**: Recommended for PostgreSQL/PostGIS, Redis, and MinIO

---

## 2. Step-by-Step Monorepo Installation

### Step 1: Clone and Enter the Repository
```powershell
cd LandClarity
```

### Step 2: Environment Configuration
Copy `.env.example` to `.env`:
```powershell
Copy-Item .env.example .env
```

### Step 3: Install Node.js Dependencies
Install all packages across all workspaces in one command:
```powershell
npm install
```

### Step 4: Build Shared Domain Types
The `@landclarity/shared` library must be built so both `api` and `web` can reference shared types:
```powershell
npm run build
```

### Step 5: Verify Environment & Toolchain
Run the diagnostic script:
```powershell
npm run verify
```

---

## 3. Starting Supporting Services via Docker (Optional / Phase 2)

When Docker is running, launch the local database, cache, and object store:
```powershell
docker compose -f infrastructure/docker/docker-compose.yml up -d
```

- **PostgreSQL / PostGIS**: `localhost:5432` (User: `landclarity_user`, DB: `landclarity_db`)
- **Redis**: `localhost:6379`
- **MinIO S3**: `http://localhost:9000` (Console: `http://localhost:9001`, User: `landclarity_minio_admin`)

---

## 4. Running Microservices in Development Mode

### API Backend (NestJS):
```powershell
npm run dev:api
```
Swagger UI will be accessible at `http://localhost:4000/api/docs`.

### Web Client (React + Vite):
```powershell
npm run dev:web
```
Web app will be accessible at `http://localhost:5173`.

### AI Intelligence Service (Python FastAPI):
```powershell
# Set up a python virtual environment inside apps/ai-service
cd apps/ai-service
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py
```
FastAPI documentation will be accessible at `http://localhost:8000/docs`.
