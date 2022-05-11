"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Account, Category, Goal
from api.utils import generate_sitemap, APIException
from flask_cors import cross_origin

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, decode_token


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





@api.route('/accounts', methods=['GET'])
def get_account_data():
    accounts = Account.query.all()
    all_accounts = list(map(lambda x:x.serialize(),accounts))
    return jsonify(all_accounts), 200    


@api.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    print(data)
    account_exists =  Account.query.filter(Account.email==data["email"]).count()>0

    if account_exists:
        return "account exists", 400

    account = Account(
        username = data["username"],
        email = data["email"],
        password = data["password"],
        # is_active = True
    )
    db.session.add(account)    
    db.session.commit()
    return jsonify(account.serialize()), 200

 


@api.route('/register/<int:register_id>', methods=['GET'])
def get_register(register_id):
    registers = Account.query.get(register_id)
    if registers is None:
        raise APIException('account not found', status_code=404)
    return jsonify(registers.serialize()), 200


@api.route('/login', methods=['GET'])
def get_login_data():
    login = Account.query.all()
    all_login = list(map(lambda x:x.serialize(),login))
    return jsonify(all_login), 200  


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    account = Account.query.filter_by(email=email).one_or_none()
    if account is not None:
        if account.password==password:
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


