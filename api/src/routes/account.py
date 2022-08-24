from flask import Flask, jsonify, request, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import User

account = Blueprint('account', __name__)

@account.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# CLIENTS ROUTES

# Get current user profile
@account.route('/profile', methods=['GET'])
@jwt_required()
def get_profile():
    id = get_jwt_identity()
    user = User.query.get(id)
    data = {
        'user': user.serialize()
    }
    return jsonify({'status': 'success', 'message': 'Login successfully', 'data': data}), 200

# Update current user profile
@account.route('/update_profile', methods=['PUT'])
@jwt_required()
def update_profile():
    id = get_jwt_identity()
    user = User.query.get(id)

    name = request.json.get('name')
    lastname = request.json.get('lastname')
    email = request.json.get('email')
    password = request.json.get('password')
    phone = request.json.get('phone')
    # missing update image

    if not email: return jsonify({'status': 'failed', 'message': 'Email is required', 'data': None}), 400

    # update profile

    # check if user already exist
    userFound = User.query.filter_by(email = email).first()
    # if user found and its id is different from the current user id
    if userFound and userFound.id != id: return jsonify({'status': 'failed', 'message': 'User already exists', 'data': None}), 400

    # if user sends password
    if password:
        user.password = generate_password_hash(password)

    user.name = name
    user.lastname = lastname
    user.email = email
    user.phone = phone
    user.update()

    data = {
        'user': user.serialize()
    }
    return jsonify({'status': 'success', 'message': 'Profile Updated', 'data': data}), 200


# ADMIN ROUTES

# Register doctor from admin dashboard
@account.route('/register/doctor', methods=['POST'])
def register_doctor():
    name = request.json.get('name')
    lastname = request.json.get('lastname')
    email = request.json.get('email')
    password = request.json.get('password')
    phone = request.json.get('phone')
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
    if not experience: return jsonify({'status': 'failed', 'message': 'Experience is required', 'data': None}), 400
    if not education: return jsonify({'status': 'failed', 'message': 'Education is required', 'data': None}), 400
    if not specialization1: return jsonify({'status': 'failed', 'message': 'Specialization1 is required', 'data': None}), 400
    if not specialization2: return jsonify({'status': 'failed', 'message': 'Specialization2 is required', 'data': None}), 400
    if not image: return jsonify({'status': 'failed', 'message': 'Image is required', 'data': None}), 400

    # check if user already exist
    userFound = User.query.filter_by(email = email).first()
    if userFound: return jsonify({'status': 'failed', 'message': 'User already exists', 'data': None}), 400

    # if user doesn't exist, create one
    # doctor model
    user = User()
    user.name = name
    user.lastname = lastname
    user.email = email
    user.password = generate_password_hash(password)
    user.phone = phone
    user.role_id = 2 # Default role for doctors 2
    user.experience = experience
    user.education = education
    user.specialization1 = specialization1
    user.specialization2 = specialization2
    user.image = image

    # save the user
    user.save()

    # if register succeded
    if user: return jsonify({'status': 'success', 'message': 'Registered successfully, please login', 'data': None}), 200
    else: return jsonify({'status': 'failed', 'message': 'Error in register, please try again', 'data': None}), 200

# Edit user by id
@account.route('/edit_user/<int:id>', methods=['PUT'])
def edit_user(id):
    user = User.query.filter_by(id=id).first()
    name = request.json.get('name')
    lastname = request.json.get('lastname')
    email = request.json.get('email')
    password = request.json.get('password')
    phone = request.json.get('phone')
    is_active = request.json.get('is_active')
    role_id = request.json.get('role_id')   

    # Check if user doesn't exist
    if not user:  return jsonify({ "status": "failed", "code": 404, "message": "User not found", "data": None }), 404

    user.name = name if name is not None else user.name
    user.lastname = lastname
    user.email = email
    user.password = generate_password_hash(password)
    user.phone = phone
    user.is_active = is_active
    user.role_id = role_id
    user.update()

    data = {
        'user': user.serialize()
    }
    return jsonify({'status': 'success', 'message': 'User Updated', 'data': data}), 200

# Delete user by id
@account.route('/delete_user/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_user(id):
    user = User.query.filter_by(id=id).first()
    user.delete()
    return jsonify({'status': 'success', 'message': 'User Deleted', 'data': None}), 200


# Get all users registrated
@account.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200
    
# Get all clients
@account.route('/clients', methods=['GET'])
def get_clients():
    users = User.query.filter_by(role_id = 3)
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200

# Get all doctors
@account.route('/doctors', methods=['GET'])
def get_doctors():
    users = User.query.filter_by(role_id = 2)
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200
    
# Get all admins
@account.route('/admins', methods=['GET'])
def get_admins():
    users = User.query.filter_by(role_id = 1)
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200
    

# @account.route('/admin/services', methods=['GET', 'POST'])
# @account.route('/admin/services/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# def services(id):