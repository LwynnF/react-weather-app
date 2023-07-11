import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Edinburgh" />
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
		</div>
	);
}
