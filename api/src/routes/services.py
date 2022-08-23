from flask import Flask, jsonify, request, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required
from models import User, Service

services = Blueprint('services', __name__)

@services.route('/service', methods=['POST'])
@jwt_required()
def create_service():
    name = request.json.get('name')
    description = request.json.get('description')
    price = request.json.get('price')
    time = request.json.get('time')
    image = request.json.get('image')

     # check if all is filled
    if not name: return jsonify({'status': 'failed', 'message': 'Name is required', 'data': None}), 400
    if not description: return jsonify({'status': 'failed', 'message': 'Description is required', 'data': None}), 400
    if not price: return jsonify({'status': 'failed', 'message': 'Price is required', 'data': None}), 400
    if not time: return jsonify({'status': 'failed', 'message': 'Time is required', 'data': None}), 400
    if not image: return jsonify({'status': 'failed', 'message': 'Service Image is required', 'data': None}), 400

    service = Service()

    service.name = name
    service.description = description
    service.price = price
    service.time = time
    service.image = image

    service.save()

    # if create service succeded
    if service: return jsonify({'status': 'success', 'message': 'Service created successfully', 'data': None}), 200
    else: return jsonify({'status': 'failed', 'message': 'Error creating service, please try again', 'data': None}), 200
   
# Edit service by id
@services.route('/edit_service/<int:id>', methods=['PUT'])
def edit_service(id):
    service = Service.query.filter_by(id=id).first()
    name = request.json.get('name')
    description = request.json.get('description')
    price = request.json.get('price')
    time = request.json.get('time')
    image = request.json.get('image')
    
    # Check if service doesn't exist
    if not service:  return jsonify({ "status": "failed", "code": 404, "message": "Service not found", "data": None }), 404


    service.name = name if name is not None else service.name
    service.description = description
    service.price = price
    service.time = time
    service.image = image
    service.update()

    data = {
        'service': service.serialize()
    }
    return jsonify({'status': 'success', 'message': 'Service Updated', 'data': data}), 200

# Delete service by id
@services.route('/delete_service/<int:id>', methods=['DELETE'])
def delete_service(id):
    service = Service.query.filter_by(id=id).first()
    service.delete()
    return jsonify({'status': 'success', 'message': 'Service Deleted', 'data': None}), 200

# Get all services registrated
@services.route("/services", methods=["GET"])
def get_services():
    services = Service.query.all()
    services = list(map(lambda service: service.serialize(), services))
    return jsonify(services), 200
    