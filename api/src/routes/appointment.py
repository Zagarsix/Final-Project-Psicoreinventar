from flask import Flask, jsonify, request, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import User, Appointment

appointment = Blueprint('appointment', __name__)

@appointment.route('/appointment', methods=['POST'])
def add_appointment():
    
    date = request.json.get('date')
    pacient_id = request.json.get('pacient_id')
    doctor_id = request.json.get('doctor_id')

    if not date: return jsonify({'status': 'failed', 'message': 'Date is required', 'data': None}), 400
    if not pacient_id: return jsonify({'status': 'failed', 'message': 'pacient_id is required', 'data': None}), 400
    if not doctor_id: return jsonify({'status': 'failed', 'message': 'doctor_id is required', 'data': None}), 400

    appointment = Appointment()
    appointment.date = date
    appointment.pacient_id = pacient_id
    appointment.doctor_id = doctor_id

    appointment.save()

    if appointment: return jsonify({'status': 'success', 'message': 'Cita agendada exitosamente', 'data': None}), 200
    else: return jsonify({'status': 'failed', 'message': 'Cita no agendada, intente nuevamente', 'data': None}), 200

# Edit appoinment
@appointment.route('/edit_appoinment/<int:id>', methods=['PUT'])
def edit_appoinment(id):
    appointment = Appointment.query.filter_by(id=id).first()
    date = request.json.get('date')
    pacient_id = request.json.get('pacient_id')
    doctor_id = request.json.get('doctor_id')  

    # Check if appointment doesn't exist
    if not appointment:  return jsonify({ "status": "failed", "code": 404, "message": "Cita no encontrada", "data": None }), 404

    appointment = Appointment()
    appointment.date = date
    appointment.pacient_id = pacient_id
    appointment.doctor_id = doctor_id
    
    appointment.update()

    data = {
        'appointment': appointment.serialize()
    }
    return jsonify({'status': 'success', 'message': 'Cita reagendada', 'data': data}), 200


@appointment.route('/delete_appoinment/<int:id>', methods=['DELETE'])
def delete_appoinment(id):
    appointment = Appointment.query.filter_by(id=id).first()
    appointment.delete()
    return jsonify({'status': 'success', 'message': 'Appointment Deleted', 'data': None}), 200