from flask_sqlalchemy import SQLAlchemy
from app import app, db
from api.models import Category

def populate_categories(*categories):
    with app.app_context():
        for category in categories:
            db.session.add(category)
        db.session.commit()

if __name__ == "__main__":
    populate_categories(
        Category(task="School"),
        Category(task="Professional"),
        Category(task="Creative"),
        Category(task="Health"),
    )


