# Import flask and datetime module for showing date and time
import MySQLdb
from flask_mysqldb import MySQL
from flask import Flask, Response, request, redirect
from flask_sqlalchemy import SQLAlchemy
import datetime
import requests

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:mazaqwer7531%40@localhost/user_signup'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/bas_sw'
db = SQLAlchemy(app)

class new_users(db.Model):
	sno = db.Column(db.Integer, primary_key=True)
	LastName = db.Column(db.String(30),  nullable=False)
	FirstName = db.Column(db.String(30), nullable=False)
	Email = db.Column(db.String(50), unique=True , nullable=False)
	Passwd = db.Column(db.String(30), nullable=False)
	Username = db.Column(db.String(30),unique=True, nullable=False)
	Phno = db.Column(db.String(15),unique=True, nullable=False)
	Address = db.Column(db.String(300), nullable=False)
	City = db.Column(db.String(30), nullable=False)
	State = db.Column(db.String(30), nullable=False)
	Gender = db.Column(db.String(10), nullable=False)
	User_type = db.Column(db.Integer, nullable=False)


# Route for new user signup
@app.route('/signup' , methods= ['GET','POST'] )
def new_user_signup():
	if(request.method == 'POST'):
		name = request.form.get('fname')
		age = request.form.get('age')
		entry = new_users(Name = name , age=age)
		db.session.add(entry)
		db.session.commit()
	return redirect("http://localhost:3000/")
		
# Running app
if __name__ == '__main__':
	app.run(debug=True)


# SELECT `users_data`.`sno`,
#     `users_data`.`Name`,
#     `users_data`.`age`
# FROM `user_signup`.`users_data`;

# USE bas_sw;

# ALTER TABLE new_users
# ADD sno int;

# CREATE TABLE new_users (
#     LastName varchar(30),
#     FirstName varchar(30),
#     Email varchar(50),
#     Passwd varchar(30),
#     Username varchar(30),
#     Phno varchar(15),
#     Address varchar(300),
#     City varchar(30),
#     State varchar(30),
#     User_type int(3)
# );



