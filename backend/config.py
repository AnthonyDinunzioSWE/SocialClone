from dotenv import load_dotenv
import os


class Config:
    load_dotenv()
    SECRET_KEY = os.environ.get("SECRET_KEY") or "you-will-never-guess"
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY") or "you-will-never-guess"
    DATABASE_URL = os.environ.get("DATABASE_URL") or "sqlite:///social_clone.db"
    MAIL_SERVER = os.environ.get("MAIL_SERVER") or "smtp.googlemail.com"
    MAIL_PORT = int(os.environ.get("MAIL_PORT") or 587)
    MAIL_USE_TLS = os.environ.get("MAIL_USE_TLS") is not None
    MAIL_USERNAME = os.environ.get("MAIL_USERNAME")
    MAIL_PASSWORD = os.environ.get("MAIL_PASSWORD")
    CORS_HEADERS = "Content-Type"
    CORS_RESOURCES = {r"/*": {"origins": "*"}}
