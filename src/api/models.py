from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    selected_category = db.relationship('SelectedCategory', backref='user',lazy=True)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
            # serialize line10?
            # do not serialize the password, its a security breach
        }

    

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(120), unique=True, nullable=False)
    school = db.Column(db.String(120), unique=True, nullable=True)
    health = db.Column(db.String(120), unique=True, nullable=True)
    professional = db.Column(db.String(120), unique=True, nullable=True)
    creative = db.Column(db.String(120), unique=True, nullable=True)
    selected_category = db.relationship('SelectedCategory',backref='category')
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "task": self.task,
            "school": self.school,
            "health": self.health,
            "professional": self.professional,
            "creative": self.creative,
        }



class SelectedCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    task_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)

    # def __repr__(self):
        # return '<Category %r>' % self.task

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "category_id": self.category_id,
        }
    