import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

// By default set false and null as need to retrieve info using API
export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		// set loaded to false, what needs to be triggered when a variable changes
		setLoaded(false);
	}, [props.coordinates]);
	// if coordinates change then we call the setLoaded to false, think of which variable changes that would trigger the above code

	//function takes a response and uses it to determine forecast, updating the forecast state variable
	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	// function makes a search using the searched city coordins and then handleResponse function called to generate forecast
	function load() {
		let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
		let units = "metric";
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

		axios.get(apiUrl).then(handleResponse);
	}

	// Checks whether loaded state variable is true, when loaded is false load function is called to make the API call 
	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div
									className="col"
									key={index}
								>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		load();

		return null;
	}
}
