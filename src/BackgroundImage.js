import React, { useEffect } from "react";
import axios from "axios";

// If city is updated then make unsplash api call to get image
export default function BackgroundImage({ city, setBackgroundImage }) {
	useEffect(() => {
		if (city) {
			const unsplashApiKey = "k83IR4PMKvx38jTyBh7038QqDbLe5n0QftSVoCOLiXc";
			const unsplashApiUrl = `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${unsplashApiKey}`;

			axios
				.get(unsplashApiUrl)
				.then((response) => handleResponse(response))
				.catch((error) => console.log(error));
		}
	}, [city]);

	// takes the unsplash api response and calls setbackgroundimage
function handleResponse(response) {
	if (response.data.results.length > 0) {
		const randomIndex = Math.floor(
			Math.random() * response.data.results.length
		);
		const photoUrl = response.data.results[randomIndex].urls.regular;
		setBackgroundImage(photoUrl);
	}
}


	return null;
}
