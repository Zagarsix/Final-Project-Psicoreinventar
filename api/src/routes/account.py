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
