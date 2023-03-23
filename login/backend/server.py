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
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/user_signup'
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = ''
# app.config['MYSQL_DB'] = 'user_signup'
db = SQLAlchemy(app)
# mysql = MySQL(app)

class Users_data(db.Model):
	sno = db.Column(db.Integer, primary_key=True)
	Name = db.Column(db.String(30), unique=True , nullable=False)
	age = db.Column(db.Integer, unique=True , nullable=False)

	# def __init__(self,Name,age):
	# 	self.Name = Name
	# 	self.age = age

# Route for seeing a data
@app.route('/submit' , methods= ['GET','POST'] )
def submit_data():
	if(request.method == 'POST'):
		print("HI")
		name = request.form.get('fname')
		age = request.form.get('age')
		entry = Users_data(Name = name , age=age)
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

# 0012
# 1234
# 0011
# 0112
# 0122
