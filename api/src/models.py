from contextlib import nullcontext
from datetime import date
from email.mime import image
from enum import unique
from pickletools import stringnl_noescape_pair
from sched import scheduler
from unicodedata import name
from sqlalchemy import Column, ForeignKey, Integer, String
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
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

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
            'phone': self.phone,
            'name': self.name,
            'lastname': self.lastname,
            'address': self.address,
            'is_active': self.is_active,
            'role': self.role,
            'booking': self.booking,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Roles(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, ForeignKey('User.id'), primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
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
    id = db.Column(db.Integer, ForeignKey('users.id'), primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    # schedule = db.Column(db.String(100), nullable=False)
    specialist = db.Column(db.String(100), nullable=False)
    observation = db.Column(db.String(100), nullable=False)
    
    def serialize(self):
        return {
            'id': self.id,
            'date': self.date,
            'schedule': self.schedule,
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
    id = db.Column(db.Integer, ForeignKey('Appointment.id'), primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.String(100), nullable=False, unique=True)
    price = db.Column(db.Integer, nullable=False) 
    image = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'image': self.image,
            'stripe_id': self.stripe_id,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Specialist(db.Model):
    __tablename__ = 'Specialists'
    id = db.Column(db.Integer, ForeignKey('Appoinment.id'), primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.String(100), nullable=False, unique=True)
    image = db.Column(db.String(100), nullable=False, unique=True)
    contact = db.Column(db.String(100), nullable=False, unique=True)
    # disponibility = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'contact': self.contact,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Payment(db.Model):
    __tablename__ = 'Payments'
    id = db.Column(db.Integer, ForeignKey('Invoices.id'), primary_key=True)
    payment_method = db.Column(db.String(100), nullable=False, unique=True)
    # stripe_id = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'amount': self.amount,
            'date_of_purchase': self.date_of_purchase,
            'payment_method': self.payment_method,
            'stripe_id': self.stripe_id,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Invoices(db.Model):  
    __tablename__ = 'Invoices'
    id = db.Column(db.Integer, ForeignKey('Appointment.id'), primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('User.id'), primary_key=True)
    stripe_id = db.Column(db.String(100), nullable=False, unique=True)
    amount = db.Column(db.Integer, nullable=False, unique=True)
    date_of_purchase = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
