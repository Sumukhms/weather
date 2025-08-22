import { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon"; // Import new component
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// --- SVG Icons ---
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

// Animated Temperature Component
function AnimatedTemperature({ value }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, value, { duration: 1 });
        return controls.stop;
    }, [value]);

    return <motion.p>{rounded}</motion.p>;
}


export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchAllWeatherData = async (params) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast`;

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherURL, { params: { ...params, appid: API_KEY, units: 'metric' } }),
        axios.get(forecastURL, { params: { ...params, appid: API_KEY, units: 'metric' } })
      ]);
      
      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
    } catch (err) {
      setError("Location not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchAllWeatherData({ lat: latitude, lon: longitude });
      },
      (err) => {
        setError("Location access denied. Showing weather for Bengaluru.");
        fetchAllWeatherData({ q: "Bengaluru" });
      }
    );
  }, []);

  const handleSearch = () => {
    if (city) {
        fetchAllWeatherData({ q: city });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-start pt-10 px-4 min-h-full`}
    >
      <div className="flex gap-2 mb-8 w-full max-w-md relative">
        <SearchIcon />
        <input
          type="text"
          placeholder="Enter location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="form-input flex-grow p-3 pl-10 rounded-lg bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-orbitron transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 rounded-lg text-white font-bold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
        >
          Search
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {loading && <p className="text-xl text-center mt-4 animate-pulse-slow">Fetching Weather Data...</p>}
        {error && !loading && <p className="text-yellow-400 text-center mt-4 bg-yellow-900/50 p-3 rounded-lg">{error}</p>}
        
        {weather && !loading && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left Side: City and Temp */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-5xl font-bold animate-glow">{weather.name}</h2>
                <p className="text-2xl capitalize opacity-90">{weather.weather[0].description}</p>
                 <div className="flex items-center text-8xl font-bold animate-glow">
                    <AnimatedTemperature value={weather.main.temp} />
                    <span>°C</span>
                </div>
              </div>

              {/* Middle: Animated Icon */}
               <div className="flex justify-center">
                    <AnimatedWeatherIcon weather={weather.weather[0].main} />
               </div>

              {/* Right Side: Details */}
              <div className="grid grid-cols-2 gap-6 text-lg">
                <div className="bg-black/20 p-4 rounded-lg text-center">
                  <p className="text-gray-400">Feels Like</p>
                  <p className="font-bold text-2xl">{Math.round(weather.main.feels_like)}°C</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg text-center">
                  <p className="text-gray-400">Humidity</p>
                  <p className="font-bold text-2xl">{weather.main.humidity}%</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg text-center">
                  <p className="text-gray-400">Wind</p>
                  <p className="font-bold text-2xl">{weather.wind.speed} m/s</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg text-center">
                  <p className="text-gray-400">Visibility</p>
                  <p className="font-bold text-2xl">{weather.visibility / 1000} km</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {forecast && !loading && <Forecast data={forecast} />}
    </motion.div>
  );
}