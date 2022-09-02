from flask import Flask, jsonify, request, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required
from models import Comment

contact = Blueprint('contact', __name__)

# On contact page user has form to ask for something
@contact.route('/comment', methods=['POST'])
def create_comment():
    name = request.json.get('name')
    email = request.json.get('email')
    # How the user find out about Psicoreinventar
    found_psicoreinventar = request.json.get('found_psicoreinventar')
    # How psicoreinventar staff can help the user
    psicoreinventar_help = request.json.get('psicoreinventar_help')

    if not name: return jsonify({'status': 'failed', 'message': 'Name is required', 'data': None}), 400
    if not email: return jsonify({'status': 'failed', 'message': 'Email is required', 'data': None}), 400
    if not found_psicoreinventar: return jsonify({'status': 'failed', 'message': 'How you find out about Psicoreinventar is required', 'data': None}), 400
    if not psicoreinventar_help: return jsonify({'status': 'failed', 'message': 'How can we help you is required', 'data': None}), 400

    comment = Comment()

    comment.name = name
    comment.email = email
    comment.found_psicoreinventar = found_psicoreinventar
    comment.psicoreinventar_help = psicoreinventar_help

    comment.save()

    data = {
        'comment': comment.serialize()
    }

    # if create comment succeded
    if comment: return jsonify({'status': 'success', 'message': '¡Gracias! Pronto te contactaremos', 'data': data}), 200
    else: return jsonify({'status': 'failed', 'message': 'Error creando tu , please try again', 'data': None}), 200

@contact.route('/comments', methods=['GET'])
def get_comments():
    comments = Comment.query.all()
    comments = list(map(lambda comment: comment.serialize(), comments))
    return jsonify(comments), 200
