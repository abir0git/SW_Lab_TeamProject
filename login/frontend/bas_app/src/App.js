// Importing modules
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {

	return (
	
		<Routes>
			<Route
            exact
            path="/"
            element={     
				<div className="App">
			<form action="/submit" method="post">
				<label for="fname">Name:</label>
				<input type="text" id="fname" name="fname" />
				<label for="age">Age:</label>
				<input type="text" id="lname" name="age" />
				<input type="submit"></input>
			</form>
		</div>
			      }
          />
			<Route
            exact
            path="/submit"
            element={     
				<div>
					Hello World
				</div>
			      }
          />
		</Routes>
		
	);
}

export default App;
