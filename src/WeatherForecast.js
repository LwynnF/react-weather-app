import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
		setForecast(response.data.daily);
		setLoaded(true);
	}

	console.log(props);

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
		let units = "metric";
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
