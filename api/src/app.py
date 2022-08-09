from flask import Flask, jsonify, request, url_for, Blueprint
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from models import db
from routes.account import account

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///final_project.db'
app.config['JWT_SECRET_KEY'] = 'secret-key'

db.init_app(app)
Migrate(app, db) # db init, db migrate, db upgrade
jwt = JWTManager(app)
CORS(app)


######### code between this lines #########

app.register_blueprint(account, url_prefix='/api')

  id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False, unique=True)
    phone = db.Column(db.Integer, nullable=False, unique=True)
    name = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.Integer, nullable=False)
    address= db.Column(db.String(100), nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    role = db.Column(db.String(100), nullable=False)
    appointment = db.Column(db.String(100), nullable=False)

@app.route('/')
def home():
    return jsonify({ "msg": "Welcome to OdontoStethical"}), 200

@app.route('/api/login', methods=['POST'])
def login():

    return jsonify(user.serialize()), 201

@app.route('/api/register', methods=['POST'])
def register():
    
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    phone = request.form['phone']
    name = request.form['name']
    lastname = request.form['lastname']
    address = request.form['address']

    
    if not response: jsonify({ "msg": "error al subir imagen " })
    
    user = User()
    user.username = username
    user.password = generate_password_hash(password)
    user.is_active = True if is_active == 'true' else False
    user.avatar = response["secure_url"]
    
    profile = Profile()
    user.profile = profile
    
    user.save()
    
    return jsonify(user.serialize()), 201

@app.route('/api/profile', methods=['GET'])
def get_profile():

    username = request.form['username']
    name = request.form['name']
    lastname = request.form['lastname']
    is_active = request.form['is_active']
    picture = request.files['picture']

@app.route('/api/profile', methods=['PUT'])
def update_profile():
    username = request.form['username']
    name = request.form['name']
    lastname = request.form['lastname']
    is_active = request.form['is_active']
    picture = request.files['picture']
    email = request.form['email']
    password = request.form['password']
    phone = request.form['phone']
    address = request.form['address']

@app.route('/api/users', methods=['GET'])
def list_users():

    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    
    return jsonify(users), 200

######### code between this lines #########
if __name__ == '__main__':
    app.run()


# from crypt import methods
# import json
# from flask import Flask, jsonify, request
# from flask_migrate import Migrate
# from flask_cors import CORS
# from flask_jwt_extended import JWTManager
# from models import db, User, Profile
# from werkzeug.security import generate_password_hash, check_password_hash
# import cloudinary
# import cloudinary.uploader
# import cloudinary.api

# app = Flask(__name__)
# app.config['DEBUG'] = True
# app.config['ENV'] = 'development'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

# cloudinary.config(
#     cloud_name = "", 
#     api_key = "", 
#     api_secret = "",
#     secure = True
# )

# db.init_app(app)
# Migrate(app, db)
# CORS(app)