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

function App() {
	const [openmodal, setopenmodal] = useState(false);
	const[loggedin_setloggedin] = useState(false);
	
	return (
	
		<Routes>
			<Route
            exact
            path="/"
            element={     <div>
				<LoginButton  openmodal={openmodal} setopenmodal={setopenmodal}></LoginButton>
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
				<Customer/>
			</div>      }
          />
			<Route
            exact
            path="/clerk"
            element={     <div>
				<Clerk/>
			</div>      }
          />
			<Route
            exact
            path="/owner"
            element={     <div>
				<Owner/>
			</div>      }
          />
			<Route
            exact
            path="/manager"
            element={     <div>
				<Manager/>
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
            element={     <div class="app_searchedbooks">
				<SearchedBooks/>
			</div>      }
          />
			
            <Route
            exact
            path="/customer/buydetails"
            element={     <div class="app_searchedbooks">
				<Buydetails/>
			</div>      }
          />
			
            <Route
            exact
            path="/clerk/verifiablebooks"
            element={     <div class="app_searchedbooks">
				<VerifiableBooks/>
			</div>      }
          />
			
		</Routes>
		
	);
}

export default App;
