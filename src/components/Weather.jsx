import { useState } from "react";
import axios from "axios";

// --- SVG Icons ---
const HumidityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block mr-1 opacity-70"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path><path d="M12 12 a2.5 2.5 0 0 0 0 5 a2.5 2.5 0 0 0 0-5"></path></svg>
);

const WindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block mr-1 opacity-70"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
);

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Securely access the API key from the .env.local file
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeatherData = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(res.data);
    } catch (err) {
      setError("Location not found. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-start pt-10 px-4 min-h-full`}>
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && getWeatherData()}
          className="form-input flex-grow p-2 rounded-lg bg-black bg-opacity-30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-orbitron"
        />
        <button
          onClick={getWeatherData}
          className="bg-blue-600 px-5 py-2 rounded-lg text-white font-bold hover:bg-blue-500 transition-all duration-300"
        >
          Search
        </button>
      </div>

      <div className="w-full max-w-md">
        {loading && <p className="text-xl text-center mt-4 drop-shadow-[0_0_5px_rgba(0,150,255,0.7)]">Loading...</p>}
        {error && !loading && <p className="text-red-400 text-center mt-4">{error}</p>}
        
        {!weather && !loading && !error && (
          <div className="text-center mt-20 p-6 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-2xl font-bold">Welcome to the Weather Hub</h2>
            <p className="text-gray-400 mt-2">Enter a city to get the latest forecast</p>
          </div>
        )}

        {weather && !loading && (
          <div className="p-6 mt-4 bg-black bg-opacity-30 backdrop-blur-md rounded-lg border border-gray-700 shadow-lg text-center">
            <h2 className="text-3xl font-bold drop-shadow-[0_0_5px_rgba(0,150,255,0.7)]">{weather.name}</h2>
            <p className="text-lg capitalize opacity-80">{weather.weather[0].description}</p>
            <p className="text-6xl font-bold my-4 drop-shadow-[0_0_8px_rgba(0,150,255,0.7)]">{Math.round(weather.main.temp)}°C</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="mx-auto drop-shadow-lg w-24 h-24"
            />
            <div className="flex justify-around mt-4 gap-8 text-lg">
              <div className="flex items-center"><HumidityIcon /> {weather.main.humidity}%</div>
              <div className="flex items-center"><WindIcon /> {weather.wind.speed} m/s</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
