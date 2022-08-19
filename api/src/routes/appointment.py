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

    appointment = Appointment()
    appointment.save()