# Import flask and datetime module for showing date and time
import MySQLdb
from flask_mysqldb import MySQL
from flask import Flask, Response, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user , logout_user , login_required, LoginManager, current_user
from flask_wtf import  FlaskForm
from flask_bcrypt import Bcrypt
from wtforms import StringField, PasswordField , SubmitField
from wtforms.validators import InputRequired, Length , ValidationError
import datetime
import requests

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Babai#123@localhost/bas_sw'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

class new_users(db.Model, UserMixin):
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

class all_book(db.Model, UserMixin):
	sno = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(20), nullable=False)
	author = db.Column(db.String(20), nullable=False)
	ISBN = db.Column(db.String(45), nullable=False, unique=True)


# Route for new user signup
@app.route('/signup' , methods= ['GET','POST'] )
def new_user_signup():
	if(request.method == 'POST'):
		fname = request.form.get('fname')
		lname = request.form.get('lname')
		uname = request.form.get('uname')
		adr = request.form.get('adr')
		email = request.form.get('email')
		password = request.form.get('password')
		# hashed_passwd = bcrypt.generate_password_hash(password)
		mobile = request.form.get('mobile')
		city = request.form.get('city')
		state = request.form.get('state')
		gender = request.form.get('gender')
		usty = request.form.get('usty')
		usr_sm = new_users.query.filter_by(Username=uname).first()
		email_sm = new_users.query.filter_by(Email=email).first()
		if (usr_sm != None):
			return "Username already exists"
		if (email_sm != None):
			return "Email already exists"
		if(usty=="1"):
			entry = new_users(FirstName = fname , LastName=lname , Email=email, Passwd=password , Username=uname, Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=1)
		if(usty=="2"):
			entry = new_users(FirstName = fname , LastName=lname , Email=email, Passwd=password , Username=uname, Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=2)
		if(usty=="3"):
			entry = new_users(FirstName = fname , LastName=lname , Email=email, Passwd=password , Username=uname, Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=3)
		if(usty=="4"):
			entry = new_users(FirstName = fname , LastName=lname , Email=email, Passwd=password , Username=uname, Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=4)
		db.session.add(entry)
		db.session.commit()
	return redirect("http://localhost:3000/")
		

@app.route('/login',methods= ['GET','POST'] )
def usr_login():
	if(request.method == 'POST'):
		uname = request.form.get('uname')
		password = request.form.get('password')
		user = new_users.query.filter_by(Username=uname).first()
		# print("HQQQ")
		# print(user == None)
		# print("HIIII") 
		if (user != None):
			if (user.Passwd == password):
				return "Hi , " + user.FirstName + " " + user.LastName
			else: 
				return "Wrong Password"
		else:
			return "Username not found"
	# return "Hello World"

@app.route('/search', methods=['GET', 'POST'])
def book_search():
	if(request.method == 'POST'):
		search_key = request.form.get('search_key')
		print(89)
		books = all_book.query.filter_by(name=search_key).all()
		for book in books:
			print(book.name)
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



