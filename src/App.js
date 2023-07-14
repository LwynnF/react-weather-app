import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import BackgroundImage from "./BackgroundImage";

export default function App() {
	const [city, setCity] = useState("Edinburgh");
	const [backgroundImage, setBackgroundImage] = useState(null);

	function handleCityChange(newCity) {
		setCity(newCity);
	}

	return (
		<div className="App">
			<div className="container">
				<Weather onCityChange={handleCityChange} />

				<BackgroundImage
					className="backgroundImage"
					city={city}
					setBackgroundImage={setBackgroundImage}
				/>
			</div>
			<footer>
				This was coded by wynn.codes{" "}
				<a
					href="https://github.com/LwynnF/react-weather-app"
					target="_blank"
					rel="noreferrer"
				>
					open-sourced on Github
				</a>
			</footer>
		</div>
	);
}
