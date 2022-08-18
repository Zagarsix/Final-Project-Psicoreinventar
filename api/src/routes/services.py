from flask import Flask, jsonify, request, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required
from models import User, Service

services = Blueprint('services', __name__)

@services.route('/service', methods=['POST'])
def create_service():
    name = request.json.get('name')
    description = request.json.get('description')
    price = request.json.get('price')
    image = request.json.get('image')

     # check if all is filled
    if not name: return jsonify({'status': 'failed', 'message': 'Name is required', 'data': None}), 400
    if not description: return jsonify({'status': 'failed', 'message': 'Description is required', 'data': None}), 400
    if not price: return jsonify({'status': 'failed', 'message': 'Price is required', 'data': None}), 400
    if not image: return jsonify({'status': 'failed', 'message': 'Service Image is required', 'data': None}), 400

    service = Service()

    service.name = name
    service.description = description
    service.price = price
    service.image = image

    service.save()

    # if create service succeded
    if service: return jsonify({'status': 'success', 'message': 'Service created successfully', 'data': None}), 200
    else: return jsonify({'status': 'failed', 'message': 'Error creating service, please try again', 'data': None}), 200
   


# @services.route('/edit_service', methods=['PUT'])
# def edit_service():
#     pass

# @services.route('/delete_service', methods=['PUT'])
# def edit_service():
#     pass