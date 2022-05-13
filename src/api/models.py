from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


association = db.Table('association',
    db.Column('user_id',db.Integer, db.ForeignKey('user.id'),primary_key=True),
    db.Column('category_id',db.Integer, db.ForeignKey('category.id'),primary_key=True)
)


    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # selected_category = db.relationship('SelectedCategory', backref='User',lazy=True)
    inspiration = db.Column(db.String(250), unique=False, nullable=False)
    fun_fact = db.Column(db.String(250), unique=False, nullable=False)
    
    categories = db.relationship("Category", secondary=association)



    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "inspiration": self.inspiration,
            "fun_fact": self.fun_fact,
            "categories": list(map(lambda category: category.serialize(), self.categories))

            # serialize line10?
            # do not serialize the password,l its a security breach
        }

    

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
    
class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    goal_name = db.Column(db.String(120), unique=True, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    is_done = db.Column(db.Boolean, default= False)
    # category = db.relationship('Category')
    # selected_category = db.relationship('SelectedCategory',backref='category')
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "goal_name": self.goal_name,
            "is_done": self.is_done
            
        }
