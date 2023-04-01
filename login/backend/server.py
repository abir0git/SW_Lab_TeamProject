# Import flask and datetime module for showing date and time
import MySQLdb
from flask import jsonify
from flask_mysqldb import MySQL
from flask import Flask, Response, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, logout_user, login_required, LoginManager, current_user
from flask_wtf import FlaskForm
from flask_bcrypt import Bcrypt
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
import datetime
import requests
from flask_cors import CORS
from flask_cors import cross_origin
import random
import smtplib
from email.mime.text import MIMEText
x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Babai#123@localhost/bas_sw'



db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"
user_logged_in = False
user_fname = "dummyf"
user_lname = "dummyl"
# CORS(app , origins=["http://localhost:3000/"] , expose_headers = ["Content_Type" , "X-CSRFToken"] , supports_credentials = True)
CORS(app)


class new_users(db.Model, UserMixin):
	sno = db.Column(db.Integer, primary_key=True)
	LastName = db.Column(db.String(30),  nullable=False)
	FirstName = db.Column(db.String(30), nullable=False)
	Email = db.Column(db.String(50), unique=True, nullable=False)
	Passwd = db.Column(db.String(30), nullable=False)
	Username = db.Column(db.String(30), unique=True, nullable=False)
	Phno = db.Column(db.String(15), unique=True, nullable=False)
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
	publisher = db.Column(db.String(20), nullable=False)
	copies = db.Column(db.Integer, nullable=True)
	shelf = db.Column(db.String(45), nullable=True)
		
class private_key(db.Model, UserMixin):
	sno = db.Column(db.Integer, primary_key=True)
	clerk_key = db.Column(db.String(40), nullable=False)
	manager_key = db.Column(db.String(40), nullable=False)
	owner_key = db.Column(db.String(40), nullable=False)



# Route for new user signup
@app.route('/signup', methods=['GET', 'POST'])
def new_user_signup():
	if (request.method == 'POST'):
		global fname, lname, uname, adr, email, password, mobile, city, state, gender, usty, privatekey
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
		privatekey = request.form.get('secret_key')
		usr_sm = new_users.query.filter_by(Username=uname).first()
		email_sm = new_users.query.filter_by(Email=email).first()
		if (usr_sm != None):
			return "Username already exists"
		if (email_sm != None):
			return "Email already exists"
		
		return redirect("http://localhost:3000/signup/otp/")
		
@app.route('/signup/otp/sendotp', methods=['GET', 'POST'])
def send_otp():
	if(request.method == 'POST'):
		global otp
		global fname, lname, uname, adr, email, password, mobile, city, state, gender, usty, privatekey
		int_otp = random.randint(100000, 999999)
		otp = str(int_otp)

		def send_email(subject, body, sender, recipients, password):
			msg = MIMEText(body)
			msg['Subject'] = subject
			msg['From'] = sender
			msg['To'] = ', '.join(recipients)
			smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
			smtp_server.login(sender, password)
			smtp_server.sendmail(sender, recipients, msg.as_string())
			smtp_server.quit()

		subject = "OTP Verification"
		body = f"Your OTP : {otp}"
		sender = "swlabbas0@gmail.com"
		recipients = [email, sender]
		password = "rlhxkaibxajymacx"
		send_email(subject, body, sender, recipients, password)

		return redirect("http://localhost:3000/signup/otp/")

@app.route('/signup/otp', methods=['GET', 'POST'])
def otp_verify():
	global otp
	global fname, lname, uname, adr, email, password, mobile, city, state, gender, usty, privatekey
	verf_otp = request.form.get('OTP')
	print(verf_otp, otp)
	if(otp != verf_otp):
		print("not match")
		return "Wrong otp"
	else:
		uniqe_row = private_key.query.filter_by(sno = 1).first()
		if (usty == "1"):
			# print(privatekey)
			# print(uniqe_row.owner_key)
			if(privatekey == uniqe_row.owner_key):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=password, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=1)
			else:
				return "Wrong private key"
		if (usty == "2"):
			if(privatekey == uniqe_row.manager_key):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=password, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=2)
			else:
				return "Wrong private key"
		if (usty == "3"):
			if(privatekey == uniqe_row.clerk_key):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=password, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=3)
			else:
				return "Wrong private key"
		if (usty == "4"):
			if(privatekey == "0"):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=password, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=4)
			else:
				return "Wrong private key"
		db.session.add(entry)
		user_logged_in = True
		db.session.commit()
		return redirect("http://localhost:3000/")




@app.route('/login', methods=['GET', 'POST'])
def usr_login():
	global user_fname
	global user_lname
	global username
	global user_type
	if (request.method == 'POST'):
		uname = request.form.get('uname')
		password = request.form.get('password')
		user = new_users.query.filter_by(Username=uname).first()
		# print("HQQQ")
		# print(user == None)
		# print("HIIII")
		if (user != None):
			if (user.Passwd == password):
				user_fname = user.FirstName
				user_lname = user.LastName
				username = user.Username
				user_type = user.User_type

				global logged_in
				logged_in = True
				# return "Hi , " + user.FirstName + " " + user.LastName
				if(user_type == 1):
					return redirect("http://localhost:3000/owner")
				elif(user_type == 2):
					return redirect("http://localhost:3000/manager")
				elif(user_type == 3):
					return redirect("http://localhost:3000/clerk")
				elif(user_type == 4):
					return redirect("http://localhost:3000/customer")
			else:
				return "Wrong Password"
		else:
			return "Username not found"
	# return "Hello World"




@app.route('/get_user', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def returnuser():
	global user_fname
	global user_lname
	if (request.method == 'GET' ):
		data = {
			"FirstName": user_fname,
			"LastName": user_lname,
		}
		res = jsonify(data)
		# res.headers.add("Access-Control-Allow-Origin", "*")
		# res.headers.add("Access-Control-Allow-Origin", "http://localhost:5000/")
		return res

@app.route('/get_customer', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def returncustomer():
	global user_fname
	global user_lname
	global username
	global user_type
	if (request.method == 'GET' ):
		data = {
			"FirstName": user_fname,
			"LastName": user_lname,
		}
		res = jsonify(data)
		# res.headers.add("Access-Control-Allow-Origin", "*")
		# res.headers.add("Access-Control-Allow-Origin", "http://localhost:5000/")
		return res

@app.route('/get_clerk', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def returnclerk():
	global user_fname
	global user_lname
	global username
	global user_type
	if (request.method == 'GET' ):
		data = {
			"FirstName": user_fname,
			"LastName": user_lname,
		}
		res = jsonify(data)
		# res.headers.add("Access-Control-Allow-Origin", "*")
		# res.headers.add("Access-Control-Allow-Origin", "http://localhost:5000/")
		return res

@app.route('/get_owner', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def returnowner():
	global user_fname
	global user_lname
	global username
	global user_type
	if (request.method == 'GET' ):
		data = {
			"FirstName": user_fname,
			"LastName": user_lname,
		}
		res = jsonify(data)
		# res.headers.add("Access-Control-Allow-Origin", "*")
		# res.headers.add("Access-Control-Allow-Origin", "http://localhost:5000/")
		return res

@app.route('/get_manager', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def returnmanager():
	global user_fname
	global user_lname
	global username
	global user_type
	if (request.method == 'GET' ):
		data = {
			"FirstName": user_fname,
			"LastName": user_lname,
		}
		res = jsonify(data)
		# res.headers.add("Access-Control-Allow-Origin", "*")
		# res.headers.add("Access-Control-Allow-Origin", "http://localhost:5000/")
		return res
	
@app.route('/customer/search', methods=['GET', 'POST'])
def book_search():
	if(request.method == 'POST'):
		book_name = request.form.get('book_name')
		book_author = request.form.get('book_author')
		books = []

		def Union(l1, l2):
			return list(set.union(set(l1), set(l2)))

		books = Union(books , all_book.query.filter_by(name=book_name).all())
		books = Union(books , all_book.query.filter_by(author=book_author).all())

		named_books = []
		oth_books = []
		for book in books:
			if(book.name ==book_name and book.author == book_author):
				named_books.append(book)
			else:
				oth_books.append(book)
		final_books = named_books + oth_books
			
		for book in final_books:
			print(book.name, book.author)
		
		return redirect("http://localhost:3000/customer")

@app.route('/clerk/addbook', methods=['GET', 'POST'])
def addbook():
	if(request.method == 'POST'):
		name = request.form.get('name')
		author = request.form.get('author')
		ISBN = request.form.get('ISBN')
		publisher = request.form.get('publisher')
		copies = request.form.get('copies')
		shelf = request.form.get('shelf')

		print(name, author, ISBN, publisher, type(copies))

		ispresent = all_book.query.filter_by(ISBN = ISBN).all()
		if(len(ispresent) != 0):
			book = all_book.query.filter_by(ISBN = ISBN).first()
			book.copies += int(copies)
			db.session.commit()

		else:
			entry = all_book(name=name, author=author, ISBN=ISBN, publisher=publisher, copies=int(copies), shelf=shelf)
			db.session.add(entry)
			db.session.commit()
	
		return redirect("http://localhost:3000/clerk")


@app.route('/owner/keyset', methods=['GET', 'POST'])
def keyset():
	if(request.method == 'POST'):
		clerk_key = request.form.get('clerk_key')
		manager_key = request.form.get('manager_key')
		owner_key = request.form.get('owner_key')

		# print(name, author, ISBN, publisher, type(copies))
		isrow = private_key.query.count()
		if(isrow == 0):
			entry = private_key(clerk_key=clerk_key, manager_key=manager_key, owner_key=owner_key)     
			db.session.add(entry)
			db.session.commit()
		else:
			uniqe_row = private_key.query.filter_by(sno = 1).first()
			uniqe_row.clerk_key = clerk_key
			uniqe_row.manager_key = manager_key
			uniqe_row.owowner_key =owner_key
			db.session.commit()
	
		return redirect("http://localhost:3000/owner")


# @app.route('/get_user11', methods=['GET'])
# @cross_origin(origins=['http://localhost:3000'])
# def returnuser11():
#     if (request.method == 'GET' ):
#         data = {
#             "id" : 1,
#             "FirstName": "ABC",
#             "LastName": "XYZ",
#         }
#         res = jsonify(data)
#         # print(type(res))
#         print(res.json)
#         print(type(res.json))
#         # print((data))
#         return res
#         return "Hi"
		# return (jsonify(data))
		# res = jsonify(data)
		# res.headers.add("Access-Control-Allow-Origin", "*")
		# res.headers.add("Access-Control-Allow-Origin", "http://localhost:5000/")
		# return res


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



