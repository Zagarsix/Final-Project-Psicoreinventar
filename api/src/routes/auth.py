import datetime
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
    role = request.json.get('role')
    experience = request.json.get('experience')
    education = request.json.get('education')
    specialization1 = request.json.get('specialization1')
    specialization2 = request.json.get('specialization2')
    image = request.json.get('image')

    # check if all inputs are filled
    if not name: return jsonify({'status': 'failed', 'message': 'Name is required', 'data': None}), 400
    if not lastname: return jsonify({'status': 'failed', 'message': 'Last Name is required', 'data': None}), 400
    if not email: return jsonify({'status': 'failed', 'message': 'Email is required', 'data': None}), 400
    if not password: return jsonify({'status': 'failed', 'message': 'Password is required', 'data': None}), 400
    if not phone: return jsonify({'status': 'failed', 'message': 'Phone is required', 'data': None}), 400

    # check if user already exist
    userFound = User.query.filter_by(email = email).first()
    if userFound: return jsonify({'status': 'failed', 'message': 'User already exists', 'data': None}), 400

    # if user doesn't exist, create one
    user = User()
    user.name = name
    user.lastname = lastname
    user.email = email
    user.password = generate_password_hash(password)
    user.phone = phone

    # doctor model
    user.experience = experience
    user.education = education
    user.specialization1 = specialization1
    user.specialization2 = specialization2
    user.image = image
    
    #!!!!!!!!! NEW VERSION!!!!!!!!!
    
    # if user pass role (admin)
    if(role):
        user.role_id = role
    # by default role 3
    else:
        user.role_id = 3

    # save the user
    user.save()

    # if register succeded
    if user: return jsonify({'status': 'success', 'message': 'Registered successfully, please login', 'data': None}), 200
    else: return jsonify({'status': 'failed', 'message': 'Error in register, please try again', 'data': None}), 200

@auth.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email: return jsonify({'status': 'failed', 'message': 'Email is required', 'data': None}), 400
    if not password: return jsonify({'status': 'failed', 'message': 'Password is required', 'data': None}), 400
    
    userExists = User.query.filter_by(email = email).first()
    # check if user does not exist
    if not userExists: return jsonify({'status': 'failed', 'message': 'Email or Password is incorrect', 'data': None}), 401
    # validate password, if the password of the user is different from the password being passed
    if not check_password_hash(userExists.password, password): 
        return jsonify({'status': 'failed', 'message': 'Email or Password is incorrect', 'data': None}), 401

    # expire date of access token 3 days
    expires = datetime.timedelta(days=3)

    # create access token    
    acces_token = create_access_token(identity = userExists.id, expires_delta= expires)

    data = {
        'access_token': acces_token,
        'user': userExists.serialize()
    }

    return jsonify({ "status": "success", "message": "Login successfully", "data": data }), 200