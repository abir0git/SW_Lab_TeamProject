// Importing modules
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import LoginButton from "./Components/LoginButton"
import "./Components/Css_files/Modal.css"
import "./Components/Css_files/Signup.css"
import "./Components/Css_files/Signin.css"
import Profile from "./Components/Profile";

function App() {
	const [openmodal, setopenmodal] = useState(false);
	const[loggedin_setloggedin] = useState(false);
	
	return (
	
		<Routes>
			<Route
            exact
            path="/"
            element={     <div>
				<LoginButton openmodal={openmodal} setopenmodal={setopenmodal}></LoginButton>
			</div>      }
          />
			<Route
            exact
            path="/user"
            element={     <div>
				<Profile/>
			</div>      }
          />
			
		</Routes>
		
	);
}

export default App;
