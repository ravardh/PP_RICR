import React, { useState } from "react";
import load from '../assets/loading.gif'
import er from '../assets/error.gif'

const API_key = "1cefe43006e662107c8d0454bde6852c";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getGeoLoc = async (city) => {
    const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`;
    try {
      const response = await fetch(geoURL);
      const data = await response.json();
      if (data.length === 0) {
        throw new Error("City Not Found");
      }
      return { latitude: data[0].lat, longitude: data[0].lon };
    } catch (error) {
      throw new Error("Error Fetching location");
    }
  };

  const getWaether = async () => {
    setError(null);
    setLoading(true);
    setWeather(null);

    try {
      const { latitude, longitude } = await getGeoLoc(city);
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`;
      const response = await fetch(weatherURL);
      const data = await response.json();
      setWeather({
        temperature: (Number(data.main.temp) - 273.5).toFixed(2),
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        city: city,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-5 p-4">
      <div className="flex flex-col items-center">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full max-w-md p-3 mb-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={getWaether}
          className="w-full max-w-md p-3 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition duration-200"
        >
          Get Weather
        </button>
      </div>
      <div className="container max-w-100 mx-auto mt-5 p-4 border-2 border-gray-200 rounded-lg shadow-2xl shadow-gray-600 flex flex-column justify-center items-center">
        {loading && (
          <div className="w-75 h-75">
            <img src={load} alt="loading" />
          </div>
        )}
        {error && ( <div className="w-75 h-75">
            <img src={er} alt="error" />
            <p className="text-red-500">{error}</p>
          </div>)}

        {weather && (
          <div className="mt-5 text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Weather in {weather.city}
            </h3>
            <p className="text-lg">
              <strong className="mr-3">Temperature:</strong>{" "}
              {weather.temperature} °C
            </p>
            <p className="text-lg">
              <strong className="mr-3">Condition:</strong> {weather.description}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt={weather.description}
              className="mx-auto mt-3"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
