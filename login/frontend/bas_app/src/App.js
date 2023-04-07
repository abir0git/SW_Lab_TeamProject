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
import "./Components/Css_files/AppHome1.css"
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
import AppHome from "./Components/AppHome";
// import Beverage from "./Components/Demo1";
import Viewstat from "./Components/Viewstat";
import AppHome1 from "./Components/AppHome1";
import { Beverage } from "./Components/Demo2";
import C11 from "./Components/C12";

function App() {
	const [openmodal, setopenmodal] = useState(false);
	const[loggedin,setloggedin] = useState(false);
	const [err, seterr] = useState();
	const [mode, setmode] = useState();

	return (
	<div className="app">
		<Routes>
			<Route className="home"
            exact
            path="/"
            element={     <div>
				{/* <AppHome err={err} seterr={seterr}></AppHome> */}
            <AppHome1 err={err} seterr={seterr} />
            {/* <Beverage/> */}
			</div>      }
          />
			<Route
            exact
            path="/user"
            element={     <div>
				<Profile/>
			</div>      }
          />
			{/* <Route
            exact
            path="/newp"
            element={     <div>
				<C11/>
			</div>      }
          /> */}
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
				<Viewstat mode={mode} setmode={setmode}/>
			</div>      }
          />
			
		</Routes>
		</div>
	);
}

export default App;
