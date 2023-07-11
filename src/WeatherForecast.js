import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}

	console.log(props);

	let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
  let units = "metric"
	let longitude = props.coordinates.lon;
	let latitude = props.coordinates.lat;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<WeatherIcon
						code="01d"
						size={36}
					/>
					<div className="WeatherForecast-temperatures">
						<span className="WeatherForecast-temperatures-max">19°</span>
						<span className="WeatherForecast-temperatures-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
