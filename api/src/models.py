from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

# VERSION 2

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True, default=3)
    name = db.Column(db.String(50), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    users = db.relationship('User', backref="role")

   
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'is_active': self.is_active,
            'users': self.get_users()
        }

    def get_users(self): 
        return list(map(lambda user: user.serialize(), self.users))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)
    # Doctor model (making nullable true for client)
    experience = db.Column(db.String(100))
    education = db.Column(db.String(100))
    specialization1 = db.Column(db.String(50))
    specialization2 = db.Column(db.String(50))
    # image url, not uploading
    image = db.Column(db.String(250))


    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'lastname': self.lastname, 
            'email': self.email,
            'phone': self.phone,
            'is_active': self.is_active,
            'role_id': self.role_id,
            'role': self.role.name,
            'experience': self.experience,
            'education': self.education,
            'specialization1': self.specialization1,
            'specialization2': self.specialization2,
            'image': self.image
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Appointment(db.Model):
    __tablename__ = 'appointments'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    # pacient has role 3, doctor has role 2
    # current user (pacient) id
    pacient_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False) 
    # doctor being selected on dropdown id
    doctor_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # relationship with the user booking the appointmnet, doctors (users with role 2)
    # and with the service being chosen

    def serialize(self):
        return {
            'id': self.id,
            # 'pacient_id': self.pacient_id,
            # 'doctors_id': self.doctors_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Service(db.Model):    
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.String(100), nullable=False, unique=True)
    price = db.Column(db.Integer, nullable=False) 
    service_image = db.Column(db.String(256), nullable=False)
    stripe_id = db.Column(db.String(100), nullable=False, unique=True)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'service_image': self. service_image,
            'stripe_id': self.stripe_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Invoice(db.Model):  
    # Invoice indicates which appointment I'm paying
    __tablename__ = 'invoices'
    id = db.Column(db.Integer, primary_key=True)
    date_of_purchase = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    stripe_id = db.Column(db.String(100), nullable=False)
    # relationship with the appointment

    def serialize(self):
        return {
            'id': self.id,
            'date_of_purchase': self.date_of_purchase,
            'user_id': self.user_id
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

# class Payment(db.Model):
#     __tablename__ = 'payments'
#     # id = db.Column(db.Integer, db.ForeignKey('Invoices.id'), primary_key=True)
#     amount = db.Column(db.Integer, nullable=False, unique=True)
#     date_of_purchase = db.Column(db.String(100), nullable=False)
#     payment_method = db.Column(db.String(100), nullable=False, unique=True)
#     stripe_id = db.Column(db.String(100), nullable=False)

#     def serialize(self):
#         return {
#             'id': self.id,
#             'amount': self.amount,
#             'date_of_purchase': self.date_of_purchase,
#             'payment_method': self.payment_method,
#             'stripe_id': self.stripe_id
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

<<<<<<< HEAD
    def delete(self):
        db.session.delete(self)
        db.session.commit()
=======
#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()
>>>>>>> samuelpalacios
