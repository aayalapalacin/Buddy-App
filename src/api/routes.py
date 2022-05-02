"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Category, Goal
from api.utils import generate_sitemap, APIException
from flask_cors import cross_origin

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/categories', methods=['GET'])
@cross_origin()
def get_all_categories():
    category_list = Category.query.all()
    category_serialized = [category.serialize() for category in category_list] 
    return jsonify(category_serialized), 200

@api.route('/<int:cat_id>/goals', methods=['GET'])
@cross_origin()
def cateogry_goals(cat_id):
    goal_list = Goal.query.filter_by(category_id=cat_id)
    goal_serialized = [goal.serialize() for goal in goal_list] 
    return jsonify(goal_serialized), 200




@api.route('/register', methods=['GET'])
def get_register_user_data():
    response_body = {
        "message": "balls"
    }
    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    user_exists =  User.query.filter(User.email==data["email"]).count()>0

    if user_exists:
        return "user exists", 400

    user = User(
        email = data["email"],
        password = data["password"],
        is_active = True
    )
    db.session.add(user)    
    db.session.commit()
    return 204

 


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()
    if user is not None:
        if user.check_password_hash(password):
            access_token = create_access_token(identity=email)
            return jsonify(access_token=access_token)
    return jsonify({"msg": "Invalid credentials."}), 401




@api.route('/goal', methods=['POST'])
@cross_origin()
def post_goal():
    json = request.json
    checked_goal = Goal.query.filter_by(id=json["id"]).one_or_none()
    checked_goal.is_done = json["is_done"]
    db.session.add(checked_goal)
    db.session.commit()
    return jsonify(checked_goal.serialize()), 200

