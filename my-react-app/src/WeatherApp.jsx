import React from "react";
import "./style.css";

const cities = [
  { id: "lisbon", name: "Lisbon", temp: "21°C", icon: "wi-day-sunny", className: "city50" },
  { id: "paris", name: "Paris", temp: "11°C", icon: "wi-night-sleet", className: "city25" },
  { id: "belgrade", name: "Belgrade", temp: "15°C", icon: "wi-day-cloudy", className: "city25" },
  { id: "venice", name: "Venice", temp: "21°C", icon: "wi-day-cloudy-high", className: "city25" },
  { id: "tel-aviv", name: "Tel-Aviv", temp: "32°C", icon: "wi-hot", className: "city25" },
  { id: "cairo", name: "Cairo", temp: "21°C", icon: "wi-day-sunny", className: "city25" },
  { id: "new-york", name: "New-York", temp: "17°C", icon: "wi-day-sleet-storm", className: "city25" },
  { id: "new-delhi", name: "New-Delhi", temp: "17°C", icon: "wi-rain-wind", className: "city25" },
  { id: "san-francisco", name: "San Francisco", temp: "15°C", icon: "wi-day-sunny-overcast", className: "city50" },
  { id: "tokyo", name: "Tokyo", temp: "8°C", icon: "wi-night-clear", className: "city25" },
  { id: "sydney", name: "Sydney", temp: "25°C", icon: "wi-night-partly-cloudy", className: "city100" },
];

const WeatherApp = () => {
  return (
    <div className="container">
      <h1>
        CSS Weather Forecast <i className="wi wi-sunrise"></i>
      </h1>
      <div className="opacity">
        <ul className="city-list">
          {cities.map((city) => (
            <li key={city.id} id={city.id} className={city.className}>
              <p>
                {city.name}
                <br />
                {city.temp}
                <i className={`wi ${city.icon}`}></i>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>Have a nice day and don't forget your umbrella if you are in New Delhi now!</p>
      </footer>
    </div>
  );
};

export default WeatherApp;
