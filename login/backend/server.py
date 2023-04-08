# Import flask and datetime module for showing date and time
import threading
import MySQLdb
from flask import jsonify
from flask_mysqldb import MySQL
from flask import Flask, Response, request, redirect, flash,abort
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
import json
import os
from flask_bcrypt import Bcrypt
from pdf_mail import sendpdf
import pdf_receipt

bcrypt = Bcrypt()
otp=""
fname="" 
lname=""
uname="" 
adr="" 
email=""
password=""
mobile=""
city=""
state="" 
gender=""
usty="", 
privatekey=""
presenttime = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/bas_sw'

errmsg = ""
iserr = 0
def seterr():
	print("we")
	global errmsg
	errmsg=""
	
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
	Email = db.Column(db.String(50), unique=False, nullable=False)
	Passwd = db.Column(db.String(500), nullable=False)
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
	author = db.Column(db.String(50), nullable=False)
	ISBN = db.Column(db.String(45), nullable=False, unique=True)
	publisher = db.Column(db.String(20), nullable=False)
	copies = db.Column(db.Integer, nullable=True)
	shelf = db.Column(db.String(45), nullable=True)
	price = db.Column(db.String(45), nullable=False)
	buy_price = db.Column(db.String(45))
	procure_day = db.Column(db.String(40))
		
class private_key(db.Model, UserMixin):
	sno = db.Column(db.Integer, primary_key=True)
	clerk_key = db.Column(db.String(40), nullable=False, unique=True)
	manager_key = db.Column(db.String(40), nullable=False, unique=True)
	owner_key = db.Column(db.String(40), nullable=False, unique=True)
	shop_name = db.Column(db.String(40), nullable=False, unique=True)

class used_book(db.Model, UserMixin):
	sno = db.Column(db.Integer, primary_key=True)
	ISBN = db.Column(db.String(40))
	type = db.Column(db.String(40))
	copies = db.Column(db.Integer)
	username = db.Column(db.String(40))
	datetime = db.Column(db.DateTime)
	name = db.Column(db.String(40))
	author = db.Column(db.String(40))

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
		# if (email_sm != None):
		# 	return "Email already exists"
		
		return redirect("http://localhost:3000/signup/otp/")
		
@app.route('/signup/otp/sendotp', methods=['GET', 'POST'])
def send_otp():
	if(request.method == 'POST'):
		global otp
		global fname, lname, uname, adr, email, password, mobile, city, state, gender, usty, privatekey
		int_otp = random.randint(100000, 999999)
		otp = str(int_otp)

		def send_email(subject, body, sender, recipients, passwordmail):
			msg = MIMEText(body)
			msg['Subject'] = subject
			msg['From'] = sender
			msg['To'] = ', '.join(recipients)
			smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
			smtp_server.login(sender, passwordmail)
			smtp_server.sendmail(sender, recipients, msg.as_string())
			smtp_server.quit()

		row = private_key.query.filter_by(sno = 1).first()
		shop_name = row.shop_name
		subject = "OTP Verification"
		body = f"Welcome to {shop_name}\nYour OTP : {otp}"
		sender = "swlabbas0@gmail.com"
		recipients = [email, sender]
		passwordmail = "rlhxkaibxajymacx"
		send_email(subject, body, sender, recipients, passwordmail)

		return redirect("http://localhost:3000/signup/otp/")

@app.route('/signup/otp', methods=['GET', 'POST'])
def otp_verify():
	global otp
	global fname, lname, uname, adr, email, password, mobile, city, state, gender, usty, privatekey
	verf_otp = request.form.get('OTP')
	print(verf_otp, otp)
	print(type(verf_otp), type(otp))
	if(otp != str(verf_otp)):
		print("not match")
		return "Wrong otp"
	else:
		# password = password.encode('utf-8')
		# hashed_pw = bcrypt.hashpw(password, bcrypt.gensalt(10))
		hashed_pw = bcrypt.generate_password_hash(password)

		uniqe_row = private_key.query.filter_by(sno = 1).first()
		if (usty == "1"):
			# print(privatekey)
			# print(uniqe_row.owner_key)
			if(privatekey == uniqe_row.owner_key):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=hashed_pw, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=1)
			else:
				return "Wrong private key"
		if (usty == "2"):
			if(privatekey == uniqe_row.manager_key):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=hashed_pw, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=2)
			else:
				return "Wrong private key"
		if (usty == "3"):
			if(privatekey == uniqe_row.clerk_key):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=hashed_pw, Username=uname,
							  Phno=mobile, City=city, State=state, Gender=gender, Address=adr, User_type=3)
			else:
				return "Wrong private key"
		if (usty == "4"):
			if(privatekey == "0"):
				entry = new_users(FirstName=fname, LastName=lname, Email=email, Passwd=hashed_pw, Username=uname,
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
		# abc = request.get_json
		# print(abc.uname)
		uname = request.form.get('uname')
		get_password = request.form.get('password')
		user = new_users.query.filter_by(Username=uname).first()
		# print(user == None)
		# print("HIIII")
		if (user != None):
			print("HQQQ")
			if (bcrypt.check_password_hash(user.Passwd, get_password)):
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
				# return "Wrong Password"
				global errmsg
				global iserr
				iserr=1
				errmsg = "Wrong Password"
				return redirect("http://localhost:3000/")
		else:
			return "Username not found"
	# return "Hello World"

@app.route('/get_err', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def geterr():
	global errmsg
	global iserr
	# ermsg = errmsg
	# errmsg = ""
	# print("Hell err: " , errmsg)
	data = {
			"Error": errmsg,
			"iserr" : iserr
	}
	res = jsonify(data)
	# ermsg = ""
	# errmsg=""
	delay = int(3)
	start_time = threading.Timer(delay,seterr)
	start_time.start()
	# print(res)
	return res

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
			"username" : username,
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
		book_author = request.form.get('book_name')
		# book_name="feluda"
		# book_author="taa"
		print(book_name,book_author)
		# book_author = request.form.get('book_author')
		# if(request.form.get('book_author'))
		# username = request.form.get('username')
		books = []

		def Union(l1, l2):
			return list(set.union(set(l1), set(l2)))
		def Difference(l1, l2):
			return list(set.difference(set(l1), set(l2)))

		all_books = all_book.query.filter(all_book.sno>1).all()
		print(all_books[0].name)
		books = Union(books , all_book.query.filter_by(name=book_name).all())
		books = Union(books , all_book.query.filter_by(author=book_author).all())

		named_books = []
		oth_books = []
		for book in books:
			if(book.name.lower() ==book_name.lower() or book.author.lower() == book_author.lower()):
				named_books.append(book)
			else:
				oth_books.append(book)

		or_other_books = []
		lw_name = book_name.lower()
		lw_name_wrd = lw_name.split(" ")
		lw_author = book_author.lower()
		lw_author_wrd = lw_author.split(" ")
		print(lw_name, lw_author)
		for book in all_books:
			lw_n = (book.name).lower()
			lw_a = (book.author).lower()
			for ln in lw_name_wrd:
				if(lw_n.find(ln) != -1):
					or_other_books.append(book)
			for la in lw_author_wrd:
				if(lw_a.find(la) != -1):
					or_other_books.append(book)

		or_other_books = list(set(or_other_books))
		semi_final_books = named_books + oth_books
		
		global final_books
		final_books = semi_final_books + Difference(or_other_books, semi_final_books)
			
		# for book in final_books:
		# 	print(book.name, book.author)
		
		return redirect("http://localhost:3000/customer/searchedbooks")
	
@app.route('/get_searchedbooks', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def get_searchedbooks():
	global final_books
	global username
	data = []
	if(request.method == 'GET'):
		for book in final_books:
			d = {
				"Sno" : book.sno,
				"Name" : book.name,
				"Author" : book.author,
				"ISBN" : book.ISBN,
				"Price" : book.price,
				"Shelf" : book.shelf,
				"Copies" : book.copies,
				"Publisher" : book.publisher,
			}
			data.append(d)
		res = json.dumps(data, indent=2)
		return res

@app.route('/customer/orderbook', methods=['GET', 'POST'])
def order_book():
	if(request.method == 'POST'):
		global username
		presenttime = datetime.datetime.now()
		ISBN = request.form.get('ISBN')
		copies = request.form.get('copies')
		try:
			a = int(copies)
		except:
			return "Enter a positive number"
		if(int(copies) < 0):
			return "Enter a valid number"
		book = all_book.query.filter_by(ISBN = ISBN).all()
		if(len(book) != 0):
			if(int(copies) > book[0].copies):
				return "We don't have so much stock"
			entry = used_book(ISBN = ISBN, copies = int(copies), type="1", username=username, datetime=presenttime )
			book[0].copies -= int(copies)
			db.session.add(entry)
			db.session.commit()
			return redirect("http://localhost:3000/customer/")
		else:
			return "Enter valid ISBN"
		
@app.route('/customer/addquery',  methods=['GET', 'POST'])
def add_query():
	if(request.method == 'POST'):
		global username
		name = request.form.get('name')
		author = request.form.get('author')
		ISBN = request.form.get('ISBN')
		entry = used_book(ISBN=ISBN, username=username, type="3", name=name,
		     author=author, datetime=datetime.datetime.now())
		db.session.add(entry)
		db.session.commit()
		return redirect("http://localhost:3000/customer/")

@app.route("/customer/see_buydetails", methods=['GET', 'POST'])
def see_buydetails():
	if(request.method == 'POST'):
		global username
		global allbooks_usr
		allbooks_usr = used_book.query.filter_by(username=username).all()
		return redirect("http://localhost:3000/customer/buydetails")

@app.route('/buydetails', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def get_buydetails():
	global allbooks_usr
	allbooks_usr = used_book.query.filter_by(username=username).all()
	# allbooks_usr.reverse()
	data = []
	if(request.method == 'GET'):
		for book in allbooks_usr:
			print(book.ISBN)
			orig_book = all_book.query.filter_by(ISBN=book.ISBN).all()
			if(len(orig_book) != 0):
				d = {
					"Sno" : book.sno,
					"Name" : orig_book[0].name,
					"Author" : orig_book[0].author,
					"ISBN" : book.ISBN,
					"Price" : orig_book[0].price,
					"Copies" : book.copies,
					"Publisher" : orig_book[0].publisher,
					"Status" : "Hui",
					"Datetime" : str(book.datetime)
				}
				if(book.type == "2"):
					d.update({"Status" : "Approved"})
					data.append(d)
				if(book.type == "1"):
					d.update({"Status" : "Pending"})
					data.append(d)
		data.reverse()	
		res = json.dumps(data, indent=2)
		return res

@app.route('/clerk/addbook', methods=['GET', 'POST'])
def addbook():
	if(request.method == 'POST'):
		name = request.form.get('name')
		author = request.form.get('author')
		ISBN = request.form.get('ISBN')
		publisher = request.form.get('publisher')
		copies = request.form.get('copies')
		shelf = request.form.get('shelf')
		price = request.form.get('price')
		buy_price = request.form.get('buy_price')
		procure_day = request.form.get('procure_day')

		print(name, author, ISBN, publisher, type(copies))

		ispresent = all_book.query.filter_by(ISBN = ISBN).all()
		if(len(ispresent) != 0):
			book = all_book.query.filter_by(ISBN = ISBN).first()
			book.copies += int(copies)
			db.session.commit()

		else:
			entry = all_book(name=name, author=author, ISBN=ISBN, buy_price=buy_price, 
		    publisher=publisher, copies=int(copies), shelf=shelf, price=price, procure_day=procure_day)
			db.session.add(entry)
			db.session.commit()
	
		return redirect("http://localhost:3000/clerk")

@app.route('/clerk/seeverifybook', methods=['GET', 'POST'])
def seeverify_books():
	if(request.method == "POST"):
		global cust_username
		cust_username = request.form.get('username')
		global verifiable_books
		verifiable_books = []
		books_un = used_book.query.filter_by(username=cust_username).all()
		books_pend = used_book.query.filter_by(type="1").all()

		def Intersection(l1, l2):
			return list(set.intersection(set(l1), set(l2)))
		
		verifiable_books += Intersection(books_un, books_pend)
		if(len(verifiable_books) == 0 ):
			return "No order pending"
		for book in verifiable_books:
			print(book.ISBN, book.type)

		return redirect("http://localhost:3000/clerk/verifiablebooks")
	
@app.route('/get_verifiablebooks', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def get_verifibalebooks():
	global verifiable_books
	data = []
	if(request.method == 'GET'):
		for book in verifiable_books:
			detailed_book = all_book.query.filter_by(ISBN=book.ISBN).first()
			d = {
				"Sno" : book.sno,
				"Name" : detailed_book.name,
				"Author" : detailed_book.author,
				"ISBN" : book.ISBN,
				"Price" : detailed_book.price,
				"Shelf" : detailed_book.shelf,
				"Copies" : book.copies,
				"Publisher" : detailed_book.publisher,
			}
			data.append(d)
		res = json.dumps(data, indent=2)
		return res

@app.route('/clerk/verify',  methods=['GET', 'POST'])
def verify_books():
	if(request.method == 'POST'):
		global verifiable_books
		global cust_username
		row = private_key.query.filter_by(sno = 1).first()
		cust_user = new_users.query.filter_by(Username=cust_username).first()
		shop_name = row.shop_name
		receipt_data=shop_name+"\nName : "+cust_user.FirstName+" "+cust_user.LastName+"\n"
		receipt_data += "Date-time : "+str(datetime.datetime.now())[:-7]+"\n"
		receipt_data += "Book-name Author ISBN Price Copies Net\n"
		tot_price = 0
		for book in verifiable_books:
			print(book.ISBN)
			detailed_book = all_book.query.filter_by(ISBN=book.ISBN).first()
			using_book = used_book.query.filter_by(sno=book.sno).first()
			using_book.type = "2"
			db.session.commit()
			db.session.commit()

			net_price = int(detailed_book.price)*using_book.copies
			tot_price+=net_price
			receipt_data+=f"{detailed_book.name} {detailed_book.author} {detailed_book.ISBN} {detailed_book.price} {using_book.copies} {net_price}\n"
		receipt_data += f"Total Price : {tot_price}"
		print(receipt_data)
		pdf_receipt.create_pdf(content=receipt_data)
		
		k = sendpdf("swlabbas0@gmail.com", 
            cust_user.Email,
            "rlhxkaibxajymacx",
            "ORDER CONFIRMATION",
            "Thanks for buying these books\nPlease visit again\nYour receipt is attached",
            "receipt",
            ".")

		k.email_send()

		os.remove("./receipt.pdf")

		return redirect("http://localhost:3000/clerk/")


@app.route('/seequery', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def get_queries():
	queiries = used_book.query.filter_by(type="3").all()
	queiries.reverse()
	data = []
	for book in queiries:
		ori_book = all_book.query.filter_by(ISBN=book.ISBN).all()
		if(len(ori_book) == 0):
			d = {
				"Sno" : book.sno,
				"Name" : book.name,
				"Author" : book.author,
				"ISBN" : book.ISBN,
				"User" : book.username,
				"Status" : "New book",
				"Datetime" : str(book.datetime)
			}
			data.append(d)
		else:
			d = {
				"Sno" : book.sno,
				"Name" : ori_book[0].name,
				"Author" : ori_book[0].author,
				"ISBN" : book.ISBN,
				"User" : book.username,
				"Status" : "Stock Empty/less",
				"Datetime" : str(book.datetime)
			}
			data.append(d)

	res = json.dumps(data, indent=2)
	return res


@app.route('/viewstatform', methods=['GET', 'POST'] )
def generate_stat():
	if(request.method == 'POST'):
		type = request.form.get('type')
		print(type)
		global data1
		data1 = []
		if(type == "true"):
			print("********get true*******************")
			from_date = request.form.get('fromdt')
			to_date = request.form.get('todt')
			# print(to_date[0:2])
			books1 = used_book.query.filter(used_book.datetime >= datetime.datetime.strptime(from_date, '%Y-%m-%d'),
					used_book.datetime <= datetime.datetime.strptime(to_date, '%Y-%m-%d')).all()
			books33 = used_book.query.filter_by(type="2").all()

			def Intersection(l1, l2):
				return list(set.intersection(set(l1), set(l2)))

			books = Intersection(books1, books33)
			unique_books = {}
			for book in books:
				try:
					b1 = {book.ISBN : book.copies + unique_books[book.ISBN]}
					unique_books.update(b1)
				except:
					unique_books.update({book.ISBN : book.copies})
			sorted_books = sorted(unique_books.items(), key=lambda x:x[1], reverse=True)
			
			for book in sorted_books:
				book_ori = all_book.query.filter_by(ISBN=book[0]).first()
				print("****************************")
				print(book_ori.price)
				d1 = {
					"key" : "true",
					"sno" : book_ori.sno,
					"Name" : book_ori.name,
					"Author" : book_ori.author,
					"ISBN" : book_ori.ISBN,
					"Publisher" : book_ori.publisher,
					"Total_copies_sold" : book[1],
					"Total_profit" : book[1] * (int(book_ori.price) - int(book_ori.buy_price)) 
				}
				data1.append(d1)
		else:
			presenttime = datetime.datetime.now()
			past_2week = presenttime - datetime.timedelta(days=15)
			
			books_15 = used_book.query.filter(used_book.datetime >= past_2week,
					used_book.datetime <= presenttime).all()
			books33 = used_book.query.filter_by(type="2").all()

			def Intersection(l1, l2):
				return list(set.intersection(set(l1), set(l2)))

			books_15 = Intersection(books_15, books33)
			unique_books_15 = {}
			for book in books_15:
				try:
					b1 = {book.ISBN : book.copies + unique_books_15[book.ISBN]}
					unique_books_15.update(b1)
				except:
					unique_books_15.update({book.ISBN : book.copies})

			for key in unique_books_15.keys():
				book_ori = all_book.query.filter_by(ISBN=key).first()
				unique_books_15.update({key : unique_books_15[key]*int(book_ori.procure_day)})

			for key in unique_books_15.keys():
				book_ori = all_book.query.filter_by(ISBN=key).first()
				d1 = {
					"key" : "false",
					"sno" : book_ori.sno,
					"Name" : book_ori.name,
					"Author" : book_ori.author,
					"ISBN" : book_ori.ISBN,
					"Publisher" : book_ori.publisher
				}
				if(unique_books_15[key] <= book_ori.copies):
					d1.update(
						{
							"Below_Threshold" : "No",
							"Copies_required" : "---"
						}
					)
				if(unique_books_15[key] > book_ori.copies):
					print("bui************************bui")
					d1.update(
						{
							"Below_Threshold" : "Yes",
							"Copies_required" : unique_books_15[key] - book_ori.copies
						}
					)
				data1.append(d1)

	return redirect("http://localhost:3000/manager/viewstat")

@app.route('/viewstat', methods=['GET'])
@cross_origin(origins=['http://localhost:3000'])
def viewstat():
	if(request.method == 'GET'):
		global data1
		# print(data1)
		res = json.dumps(data1, indent=2)
		return res



@app.route('/owner/keyset', methods=['GET', 'POST'])
def keyset():
	if(request.method == 'POST'):
		clerk_key = request.form.get('clerk_key')
		manager_key = request.form.get('manager_key')
		owner_key = request.form.get('owner_key')
		shop_name = request.form.get('shop_name')

		# print(name, author, ISBN, publisher, type(copies))
		isrow = private_key.query.count()
		if(isrow == 0):
			print(clerk_key, manager_key, owner_key)
			entry = private_key(clerk_key=clerk_key, shop_name=shop_name, manager_key=manager_key, owner_key=owner_key)     
			db.session.add(entry)
			db.session.commit()
		else:
			uniqe_row = private_key.query.filter_by(sno = 1).first()
			uniqe_row.clerk_key = clerk_key
			uniqe_row.manager_key = manager_key
			uniqe_row.owner_key =owner_key
			uniqe_row.shop_name =shop_name
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



