from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


user_goal = db.Table('user_goal',
    db.Column('user_id',db.Integer, db.ForeignKey('user.id'),primary_key=True),
    db.Column('goal_id',db.Integer, db.ForeignKey('goal.id'),primary_key=True),
    db.Column('is_done',db.Boolean, default= False)
)
user_category = db.Table('user_category',
    db.Column('user_id',db.Integer, db.ForeignKey('user.id'),primary_key=True),
    db.Column('category_id',db.Integer, db.ForeignKey('category.id'),primary_key=True),
)


    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    inspiration = db.Column(db.String(250), unique=False, nullable=False)
    fun_fact = db.Column(db.String(250), unique=False, nullable=False)
    todo_item = db.relationship("TodoItem")
    categories = db.relationship(
        "Category", secondary=user_category, back_populates="users"
    )
    goals_done = db.relationship("Goal", secondary=user_goal, back_populates="users", )



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
            # "categories": list(map(lambda category: category.serialize(), self.categories))

            # serialize line10?
            # do not serialize the password,l its a security breach
        }


class TodoItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.String(120), unique=False, nullable=False)
    task_done = db.Column(db.Boolean, default=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return '<Task %r>' % self.label

    def serialize(self):
        return {
            "id": self.id,
            "label": self.label,
            "task_done": self.task_done
        }

    

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(120), unique=True, nullable=False)
    goals = db.relationship('Goal', backref='category')
    users = db.relationship(
        "User", secondary=user_category, back_populates="categories"
    )



    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)ool

    def __repr__(self):
        return '<Category %r>' % self.task

    def serialize(self):
        return {
            "id": self.id,
            "task": self.task,
            "goals": [goal.serialize() for goal in self.goals]
        }




class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    goal_name = db.Column(db.String(120), unique=True, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    is_done = db.Column(db.Boolean, default= False)
    # user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    users = db.relationship(
        "User", secondary=user_goal, back_populates="goals_done"
    )

    # category = db.relationship('Category')
    # selected_category = db.relationship('SelectedCategory',backref='category')
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "goal_name": self.goal_name, 
            "is_done": self.is_done,
        }
