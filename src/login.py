# from flask_sqlalchemy import SQLAlchemy
# from flask import Flask, request, abort, jsonify
# from flask_bcrypt import Bcrypt
# from config import ApplicationConfig
# from api.models import db, Users

# app = Flask(__name__)

# app.config.from_object(ApplicationConfig)

# bcrypt = Bcrypt(app)
# db.init_app(app)

# with app.app_context():
#     db.create_all()


# @api.route('/register', methods=['POST'])
# def register_user():
#     email = request.json["email"]
#     password = request.json["password"]

#     users_exits =  Users.query.filter_by(email=email).first() is not None

#     if users_exists:
#         abort(409)

#     hashed_password = bcrypt.generate_password_hash(password)
#     new_users = Users(email=email, password=hashed_password)
#     db.session.add(new_users)
#     db.session.commit()

#     return jsonify ({
#         "id": new_users.id,
#         "email": new_users.email
#     })




# if __name__ == "__main__":
#     app.run(debug=True)