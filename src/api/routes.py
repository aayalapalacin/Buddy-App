"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Category, Goal
from api.utils import generate_sitemap, APIException
from flask_cors import cross_origin

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

@api.route('/user/<int:user_id>', methods=['GET'])
@cross_origin()
def get_user(user_id):
    user = User.query.filter_by(id=user_id).one_or_none()
    return jsonify(user.serialize()), 200

@api.route('/goal', methods=['PUT'])
@cross_origin()
def change_goal():
    data = request.get_json()
    print("data variable",data)
    # print(data["id"])
    # print(data["is_done"])
    checked_goal = Goal.query.filter_by(id=data["id"]).one_or_none()
    checked_goal.is_done = data["is_done"]
    db.session.commit()
    return jsonify(checked_goal.serialize()), 200

@api.route("/signup", methods=['POST'])
@cross_origin()
def user_signup():
    data = request.get_json()
    user = User(username = data["username"],email = data["email"],password = data["password"], inspiration = data["inspiration"], fun_fact = data["fun_fact"])
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())

@api.route("/login", methods=['POST'])
@cross_origin()
def user_login():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"],password=data["password"]).one_or_none()
    return jsonify(user.serialize())

@api.route("/userCategory", methods=['PUT'])
@cross_origin()
def user_category():
    data = request.get_json()
    user = User.query.filter_by(id=data["id"]).one_or_none()
    print(user)
    categories = []

    for category in data["categories"]:
        catItem = Category.query.filter_by(id=category["id"]).one_or_none()
        categories.append(catItem)
    user["categories"] = categories

    # db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())



# @api.route('/update_goal', methods=['PUT'])
# @cross_origin()
# def change_goal():
#     json = request.json
#     current_goal = Goal.query.filter_by(id=json["id"]).first() 
#     print(current_goal)
#     checked_goal.is_done = json["is_done"]
#     db.session.add(checked_goal)
#     db.session.commit()
#     return jsonify(checked_goal.serialize()), 200


# @api.route('/goals', methods=['GET'])
# @cross_origin()
# def cateogry_goals():
#     goal_list = Goal.query.all()
#     goal_serialized = [goal.serialize() for goal in goal_list] 
#     return jsonify(goal_serialized), 200