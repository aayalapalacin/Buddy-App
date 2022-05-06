from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class Account(db.Model):
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
        
    
   
    def update_password(self, password):
        self.password = generate_password_hash(password)

    def check_password_hash(self, password):
        print(generate_password_hash(password))
        return check_password_hash(self.password, password)
    






class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(120), unique=True, nullable=False)
    selected_category = db.relationship('SelectedCategory',backref='category')
    goals = db.relationship('Goal', backref='category')
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Category %r>' % self.task

    def serialize(self):
        return {
            "id": self.id,
            "task": self.task,
            "goals": [goal.serialize() for goal in self.goals]
        }



class SelectedCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'), nullable=False)
    task_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)

    # def __repr__(self):
        # return '<Category %r>' % self.task

    def serialize(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "category_id": self.category_id,
        }
    
class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    goal_name = db.Column(db.String(120), unique=True, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    # category = db.relationship('Category')
    # selected_category = db.relationship('SelectedCategory',backref='category')
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "goal_name": self.goal_name,
            
        }
