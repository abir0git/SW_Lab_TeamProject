// Importing modules
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import LoginButton from "./Components/LoginButton"

function App() {
	const [openmodal, setopenmodal] = useState(false);
	
	return (
	
		<Routes>
			<Route
            exact
            path="/"
            element={     <div>
				<LoginButton openmodal={openmodal} setopenmodal={setopenmodal}></LoginButton>
			</div>      }
          />
			
		</Routes>
		
	);
}

export default App;
