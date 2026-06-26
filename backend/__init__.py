from backend.extensions import init_extensions, db
from config import Config
from flask import Flask


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    init_extensions(app)

    with app.app_context():
        db.create_all()

    return app
