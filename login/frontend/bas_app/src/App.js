// Importing modules
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import "./Components/Css_files/Modal.css"
import "./Components/Css_files/Signup.css"
import "./Components/Css_files/Signin.css"
import "./Components/Css_files/Userform.css"
import "./Components/Css_files/Userform2.css"
import "./Components/Css_files/Searchedbooks.css"
import "./Components/Css_files/AppHome.css"
import LoginButton from "./Components/LoginButton"
import Profile from "./Components/Profile";
import Customer from "./Components/Customer";
import Clerk from "./Components/Clerk";
import Manager from "./Components/Manager";
import Owner from "./Components/Owner";
import OTP from "./Components/OTP";
import SearchedBooks from "./Components/SearchedBooks"
import VerifiableBooks from "./Components/Verifiablebooks";
import Buydetails from "./Components/Buydetails";
import Seequery from "./Components/Seequery";
import AppHome from "./Components/AppHome"
import Viewstat from "./Components/Viewstat";

function App() {
	const [openmodal, setopenmodal] = useState(false);
	const[loggedin_setloggedin] = useState(false);
	const [err, seterr] = useState();

	return (
	<div className="app">
		<Routes>
			<Route className="home"
            exact
            path="/"
            element={     <div>
				<AppHome err={err} seterr={seterr}></AppHome>
			</div>      }
          />
			<Route
            exact
            path="/user"
            element={     <div>
				<Profile/>
			</div>      }
          />
			<Route
            exact
            path="/customer"
            element={     <div>
				<Customer err={err} seterr={seterr}/>
			</div>      }
          />
			<Route
            exact
            path="/clerk"
            element={     <div>
				<Clerk err={err} seterr={seterr}/>
			</div>      }
          />
			<Route
            exact
            path="/owner"
            element={     <div>
				<Owner err={err} seterr={seterr}/>
			</div>      }
          />
			<Route
            exact
            path="/manager"
            element={     <div>
				<Manager err={err} seterr={seterr}/>
			</div>      }
          />
			<Route
            exact
            path="/signup/otp"
            element={     <div>
				<OTP/>
			</div>      }
          />
			<Route
            exact
            path="/customer/searchedbooks"
            element={     <div className="app_searchedbooks">
				<SearchedBooks/>
			</div>      }
          />
			
            <Route
            exact
            path="/customer/buydetails"
            element={     <div className="app_searchedbooks">
				<Buydetails/>
			</div>      }
          />
			
            <Route
            exact
            path="/clerk/verifiablebooks"
            element={     <div className="app_searchedbooks">
				<VerifiableBooks/>
			</div>      }
          />
			
            <Route
            exact
            path="/manager/seequery"
            element={     <div className="app_searchedbooks">
				<Seequery/>
			</div>      }
          />
            
            <Route
            exact
            path="/manager/viewstat"
            element={     <div className="app_searchedbooks">
				<Viewstat/>
			</div>      }
          />
			
		</Routes>
		</div>
	);
}

export default App;
