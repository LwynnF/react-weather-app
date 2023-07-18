import React from "react";
import moment from "moment-timezone";

export default function DisplayLocalTime({ weatherData }) {
	const { date, timezoneOffset } = weatherData;

	const localTime = moment
		.unix(date.getTime() / 1000 + timezoneOffset)
		.utc()
		.format("HH:mm");

	return <p>Local Time: {localTime}</p>;
}
