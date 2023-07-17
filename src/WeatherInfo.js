import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import DisplayLocalTime from "./DisplayLocalTime";

export default function WeatherInfo(props) {
	const { city, data } = props;

	return (
		<div className="WeatherInfo">
			<h1>{data.city}</h1>
			<ul>
				<li>
					<FormattedDate date={data.date} />
					{data && data.date && data.timezoneOffset && (
						<DisplayLocalTime weatherData={data} />
					)}
				</li>
				<li className="text-capitalize">{data.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix d-flex">
						<div className="float-left">
							<WeatherIcon
								code={data.icon}
								size={52}
							/>
						</div>
						<div className="float-left">
							<WeatherTemperature celsius={data.temperature} />
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {data.humidity}%</li>
						<li>Wind: {Math.round(data.wind)} mph</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
