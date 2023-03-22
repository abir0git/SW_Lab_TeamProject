# Import flask and datetime module for showing date and time
# import MySQLdb
from flask import Flask, Response, request
from flask_sqlalchemy import SQLAlchemy
import datetime
import requests

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/user_signup'
db = SQLAlchemy(app)

class Users_data(db.Model):
	sno = db.Column(db.Integer, primary_key=True)
	Name = db.Column(db.String(30), unique=True , nullable=False)
	age = db.Column(db.Integer, unique=True , nullable=False)

# Route for seeing a data
@app.route('/submit' , methods= ['GET' , 'POST'] )
def submit_data():
	if(request.method == 'POST'):
		name = request.form.get('fname')
		age = request.form.get('age')
		entry = Users_data(Name = name , age=age)
		db.session.add(entry)
		db.session.commit()
		
	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
