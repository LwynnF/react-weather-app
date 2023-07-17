import React from "react";
import moment from "moment-timezone";

export default function DisplayLocalTime({ weatherData }) {
	const localTime = moment
		.unix(weatherData.date.getTime() / 1000 + weatherData.timezoneOffset)
		.format("HH:mm");

	return <p>Local Time: {localTime}</p>;
}
