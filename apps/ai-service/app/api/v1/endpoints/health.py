"""
Health check and diagnostics endpoint for LandClarity AI Service.
"""

from fastapi import APIRouter
from datetime import datetime, timezone
from app.core.config import settings

router = APIRouter()

@router.get("/")
def get_health():
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "subsystems": {
            "ocr_engine": settings.OCR_ENGINE,
            "discrepancy_pipeline": "initialized",
            "rag_assistant": "ready_for_phase5"
        }
    }
