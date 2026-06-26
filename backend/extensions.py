from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail import Mail
from flask_cors import CORS

jwt = JWTManager()
migrate = Migrate()
db = SQLAlchemy()
mail = Mail()
cors = CORS()


def init_extensions(app):
    jwt.init_app(app)
    migrate.init_app(app, db)
    db.init_app(app)
    mail.init_app(app)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})
