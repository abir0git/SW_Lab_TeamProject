// Importing modules
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import LoginButton from "./Components/LoginButton"
import SearchButton from "./Components/SearchButton"
import "./Components/Css_files/Modal.css"
import "./Components/Css_files/Signup.css"
import "./Components/Css_files/Signin.css"

function App() {
	const [openmodal, setopenmodal] = useState(false);
	
	return (
	
		<Routes>
			<Route
            exact
            path="/"
            element={     
			<div>
				<LoginButton openmodal={openmodal} setopenmodal={setopenmodal}></LoginButton>
				<SearchButton></SearchButton>
			</div>    
			}
          />
			
		</Routes>
		
	);
}

export default App;
