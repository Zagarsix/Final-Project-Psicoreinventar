from flask import Flask, jsonify, request, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import User, Profile

# account = Blueprint('account', __name__)

# @account.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200




account = Blueprint('account', __name__)

@account.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    id = get_jwt_identity()
    user = User.query.get(id)
    data = {
        "user": user.serialize()
    }
    return jsonify({ "status": "success", "message": "Profile loaded", "data": data }), 200


@account.route('/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    id = get_jwt_identity()
    user = User.query.get(id)

    email = request.json.get('email')
    password = request.json.get('password', "")

    name = request.json.get('name', '')
    biography = request.json.get('biography', '')

    if not email: return jsonify({ "status": "failed", "message": "Email is required", "data": None }), 400
    #if not password: return jsonify({ "status": "failed", "message": "Password is required", "data": None }), 400

    userFound = User.query.filter_by(email=email).first()
    if userFound and userFound.id != id: return jsonify({ "status": "failed", "message": "Email already exists", "data": None }), 400

    if password != "":
        user.password = generate_password_hash(password)

    user.email = email
    user.profile.name = name
    user.profile.biography = biography
    user.update()

    data = {
        "user": user.serialize()
    }
    return jsonify({ "status": "success", "message": "Profile loaded", "data": data }), 200