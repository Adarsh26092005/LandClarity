"""
Configuration settings for LandClarity AI Service.
"""

import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "LandClarity AI Document Intelligence"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"
    
    HOST: str = os.getenv("AI_HOST", "0.0.0.0")
    PORT: int = int(os.getenv("AI_PORT", "8000"))
    
    BACKEND_CORS_ORIGINS: list[str] = [
        "http://localhost:5173",
        "http://localhost:4000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:4000",
    ]
    
    # Secret key for inter-service authentication
    AI_SECRET_KEY: str = os.getenv("AI_SECRET_KEY", "lc_ai_dev_shared_internal_secret_key")
    
    # AI Engine Configuration
    OCR_ENGINE: str = os.getenv("OCR_ENGINE", "paddleocr")
    EMBEDDING_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"

    class Config:
        case_sensitive = True

settings = Settings()
