from flask_sqlalchemy import SQLAlchemy
from app import app, db
from api.models import Category, Goal, User

def populate_categories(*categories):
    for category in categories:
        if not Category.query.filter_by(task=category.task).one_or_none():
            db.session.add(category)
    db.session.commit()

def populate_users(*users):
    for user in users:
        if not User.query.filter_by(email=user.email).one_or_none():
            db.session.add(user)
    db.session.commit()
    
def populate_goals(*goals):
    for goal in goals:
        if not Goal.query.filter_by(goal_name=goal.goal_name).one_or_none():
            db.session.add(goal)
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        populate_categories(
            Category(task="School"),
            Category(task="Professional"),
            Category(task="Creative"),
            Category(task="Health"),
        )
        schoolCat = Category.query.filter_by(task="School").one_or_none()
        professionalCat = Category.query.filter_by(task="Professional").one_or_none()
        creativeCat = Category.query.filter_by(task="Creative").one_or_none()
        healthCat = Category.query.filter_by(task="Health").one_or_none()
        testUser = User(username="admin", email="admin@admin.com")
        testUser.password = "123"
        print(testUser.password)
        populate_users(
            testUser
        )
        populate_goals(    
            Goal(goal_name="Study for test/quiz",category_id=schoolCat.id),
            Goal(goal_name="Write paper",category_id=schoolCat.id),
            Goal(goal_name="Make-up work",category_id=schoolCat.id),
            Goal(goal_name="Finish reading",category_id=schoolCat.id),
            Goal(goal_name="Resume",category_id=professionalCat.id),
            Goal(goal_name="Networking",category_id=professionalCat.id),
            Goal(goal_name="Apply for jobs",category_id=professionalCat.id),
            Goal(goal_name="Prepare for interview",category_id=professionalCat.id),
            Goal(goal_name="Brainstorm",category_id=creativeCat.id),
            Goal(goal_name="Look for gigs",category_id=creativeCat.id),
            Goal(goal_name="Compose/create",category_id=creativeCat.id),
            Goal(goal_name="Build artist brand",category_id=creativeCat.id),
            Goal(goal_name="Fitness",category_id=healthCat.id),
            Goal(goal_name="Diet",category_id=healthCat.id),
            Goal(goal_name="Research",category_id=healthCat.id),
            Goal(goal_name="Quit bad habits",category_id=healthCat.id),
        )


