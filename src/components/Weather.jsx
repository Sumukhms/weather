import { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [bgClass, setBgClass] = useState("from-blue-500 to-purple-600");

  const API_KEY = "f66e320e543af8ae8a0ff330736a4003"; // Replace with your key

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = res.data;
      setWeather(data);
      setError("");
      updateBackground(data.weather[0].main.toLowerCase());
    } catch (err) {
      setError("City not found!");
      setWeather(null);
      setBgClass("from-blue-500 to-purple-600");
    }
  };

  const updateBackground = (condition) => {
    if (condition.includes("clear")) {
      setBgClass("from-yellow-400 to-orange-500");
    } else if (condition.includes("cloud")) {
      setBgClass("from-gray-400 to-gray-700");
    } else if (condition.includes("rain")) {
      setBgClass("from-blue-500 to-blue-800");
    } else if (condition.includes("snow")) {
      setBgClass("from-blue-200 to-white");
    } else if (condition.includes("thunder")) {
      setBgClass("from-gray-700 to-yellow-600");
    } else {
      setBgClass("from-green-400 to-teal-500");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start pt-10 bg-gradient-to-br ${bgClass} text-white transition-all duration-700 animate__animated animate__fadeIn`}
    >
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded text-black"
        />
        <button
          onClick={getWeather}
          className="bg-yellow-400 px-4 py-2 rounded text-black font-bold hover:scale-105 transition-transform"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-300">{error}</p>}

      {weather && (
        <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg text-center animate__animated animate__fadeInUp">
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-lg capitalize">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
}
