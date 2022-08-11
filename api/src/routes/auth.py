from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from models import User, Role

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['POST'])
def register():
    name = request.json.get('name')
    lastname = request.json.get('lastname')
    email = request.json.get('email')
    password = request.json.get('password')
    phone = request.json.get('phone')
    roles = request.json.get('roles')

    user = User()
    user.name = name
    user.lastname = lastname
    user.email = email
    user.password = generate_password_hash(password)
    user.phone = phone
    
    # if the user pass a role, then assign that role to the user
    if(roles):
        for roles_id in roles:
            role = Role.query.get(roles_id)
            user.roles.append(role)
    # is this ok??? if the user does not specified a role, then assign it by default the 3 role (client)
    else:
        role = Role.query.get(3)
        user.roles.append(role)

    user.save()


    return jsonify(user.serialize()), 200
