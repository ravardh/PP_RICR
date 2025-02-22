import React, { useState } from "react";

const Weather = () => {
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  const [mausam, setMausam] = useState();

  const API_KEY = "1cefe43006e662107c8d0454bde6852c";

  const get_LOC = async (city) => {
    const Loc_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    try {
      const res = await fetch(Loc_URL);
      const data = await res.json();
      console.log(data);
      setLocation({
        lat: data[0].lat,
        lon: data[0].lon,
      });
    } catch (error) {
      console.error("Error finding GEO-Location " + error);
    }
  };

  const get_weather = async () => {
    let city = place;

    try {
      await get_LOC(city);
      console.log(location);
      let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`;

      const res = await fetch(weatherURL);
      const data = await res.json();
      console.log(data);
      setMausam(data);
    } catch (error) {
      console.error("Error Fetching Weather " + error);
    }
  };

  console.log(mausam);
  return (
    <>
      <div className="container m-auto p-4">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City Name"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="p-3 rounded border-2 border-b-gray-200 mx-3"
        />
        <button className="bg-blue-500 p-3 rounded" onClick={get_weather}>
          Get weather
        </button>
      </div>

      {mausam && mausam.cod === 200 ? (
        <div className="container">
          <img
            src={`https://openweathermap.org/img/wn/${mausam.weather[0].icon}@2x.png`}
            alt=""
          />
          <span>temp : ${mausam.main.temp}</span>
        </div>
      ) : (
        <div>
          <span>No data Found</span>
        </div>
      )}
    </>
  );
};

export default Weather;
