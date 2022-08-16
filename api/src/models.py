from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True, default=3)
    name = db.Column(db.String(50), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), default=True)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'is_active': self.is_active
        }

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
    # image = 
    roles = db.relationship('Role', secondary="roles_users")

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'lastname': self.lastname, 
            'email': self.email,
            'phone': self.phone,
            'is_active': self.is_active,
            'roles': self.get_roles()
        }

    def get_roles(self):
        return (list(map(lambda role: role.serialize(), self.roles)))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


# Add association table role user
class RoleUser(db.Model):
    __tablename__ = 'roles_users'
    roles_id = db.Column(db.Integer, db.ForeignKey('roles.id'), primary_key=True)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)

# class Appointment(db.Model):
#     __tablename__ = 'appointments'
#     id = db.Column(db.Integer, primary_key=True)
#     # date = db.Column(db.datetime, nullable=False)
#     pacient_id = db.Column(db.Integer, db.ForeignKey('users.id')) 
#     doctors_id = db.Column(db.Integer, db.ForeignKey('users.id')) #

#     # relationship with doctors (users with role 2)  and with the service being chosen

#     def serialize(self):
#         return {
#             'id': self.id,
#             'pacient_id': self.pacient_id,
#             'doctors_id': self.doctors_id
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()


# class Service(db.Model):    
#     __tablename__ = 'services'
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False, unique=True)
#     description = db.Column(db.String(100), nullable=False, unique=True)
#     price = db.Column(db.Integer, nullable=False) 
#     image = db.Column(db.String(100), nullable=False)
#     stripe_id = db.Column(db.String(100), nullable=False, unique=True)

#     def serialize(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'description': self.description,
#             'price': self.price,
#             'image': self.image,
#             'stripe_id': self.stripe_id
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

# class Invoice(db.Model):  
#     __tablename__ = 'invoices'
#     id = db.Column(db.Integer, primary_key=True)
#     date_of_purchase = db.Column(db.String(50), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('User.id'), primary_key=True)
#     # relationship with the appointment

#     def serialize(self):
#         return {
#             'id': self.id,
#             'date_of_purchase': self.date_of_purchase,
#             'user_id': self.user_id
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

# class Payment(db.Model):
#     __tablename__ = 'Payments'
#     id = db.Column(db.Integer, db.ForeignKey('Invoices.id'), primary_key=True)
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

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()


# class Appointment(db.Model):
#     __tablename__ = 'appointments'
#     id = db.Column(db.Integer, ForeignKey('users.id'), primary_key=True)
#     date = db.Column(db.DateTime, nullable=False)
#     # schedule = db.Column(db.String(100), nullable=False)
    
#     def serialize(self):
#         return {
#             'id': self.id,
#             'date': self.date,
#             'schedule': self.schedule,
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

# class Service(db.Model):    
#     __tablename__ = 'services'
#     id = db.Column(db.Integer, ForeignKey('Appointment.id'), primary_key=True)
#     name = db.Column(db.String(100), nullable=False, unique=True)
#     description = db.Column(db.String(100), nullable=False, unique=True)
#     price = db.Column(db.Integer, nullable=False) 
#     image = db.Column(db.String(100), nullable=False)
#     stripe_id = db.Column(db.String(100), nullable=False, unique=True)

#     def serialize(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'description': self.description,
#             'price': self.price,
#             'image': self.image,
#             'stripe_id': self.stripe_id,
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

# class Specialist(db.Model):
#     __tablename__ = 'Specialists'
#     id = db.Column(db.Integer, ForeignKey('Appoinment.id'), primary_key=True)
#     name = db.Column(db.String(100), nullable=False, unique=True)
#     description = db.Column(db.String(100), nullable=False, unique=True)
#     image = db.Column(db.String(100), nullable=False, unique=True)
#     contact = db.Column(db.String(100), nullable=False, unique=True)
#     disponibility = db.Column(db.String(100), nullable=False)

#     def serialize(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'description': self.description,
#             'image': self.image,
#             'contact': self.contact,
#             'disponibility': self.disponibility,
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

# class Payment(db.Model):
#     __tablename__ = 'Payments'
#     id = db.Column(db.Integer, ForeignKey('Invoices.id'), primary_key=True)
#     amount = db.Column(db.Integer, nullable=False, unique=True)
#     date_of_purchase = db.Column(db.String(100), nullable=False)
#     payment_method = db.Column(db.String(100), nullable=False, unique=True)
#     stripe_id = db.Column(db.String(100), nullable=False)

#     def serialize(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'amount': self.amount,
#             'date_of_purchase': self.date_of_purchase,
#             'payment_method': self.payment_method,
#             'stripe_id': self.stripe_id,
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)
#         db.session.commit()

# class Invoices(db.Model):  
#     __tablename__ = 'Invoices'
#     id = db.Column(db.Integer, ForeignKey('Appointment.id'), primary_key=True)
#     user_id = db.Column(db.Integer, ForeignKey('User.id'), primary_key=True)

#     def serialize(self):
#         return {
#             'id': self.id,
#             'user_id': self.user_id,
#         }

#     def save(self):
#         db.session.add(self)
#         db.session.commit()
    
#     def update(self):
#         db.session.commit()

#     def delete(self):
#         db.session.delete(self)a
#         db.session.commit()