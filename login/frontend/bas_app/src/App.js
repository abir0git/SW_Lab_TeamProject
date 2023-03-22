// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

	return (
		<div className="App">
			<form action="/submit" method="POST">
				<label for="fname">Name:</label>
				<input type="text" id="fname" name="fname" />
				<label for="age">Age:</label>
				<input type="text" id="lname" name="age" />
			</form>
		</div>
	);
}

export default App;
