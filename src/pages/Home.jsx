import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import { fetchWeatherByCity, fetchForecastByCity } from "../services/weatherService";
import FancySpinner from "../components/FancySpinner";

export default function Home() {
  const [cityWeather, setCityWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const MAX_HISTORY = 5;

  const getHistoryFromStorage = () => {
    return JSON.parse(localStorage.getItem("weatherHistory")) || [];
  };

  const saveToHistory = (city) => {
    const prev = getHistoryFromStorage();
    const updated = [city, ...prev.filter((c) => c !== city)].slice(0, MAX_HISTORY);
    localStorage.setItem("weatherHistory", JSON.stringify(updated));
  };

  const [history, setHistory] = useState(getHistoryFromStorage());

  const handleSearch = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeatherByCity(cityName);
      const forecastData = await fetchForecastByCity(cityName);

      const filtered = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setCityWeather(data);
      setForecast(filtered);
      saveToHistory(cityName);
      setHistory(getHistoryFromStorage());
    } catch (err) {
      setError(err.toString());
      setCityWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 py-12">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold text-center" style={{ color: "#4285F4" }}>
            Weather Dashboard
          </h1>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 mb-10">
          <SearchBar onSearch={handleSearch} />

          {history.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Recent searches:</h3>
              <div className="flex flex-wrap gap-2">
                {history.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(item)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 text-sm font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {loading && (
          <div className="my-16">
            <FancySpinner />
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-10 rounded-lg shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-base text-red-700 dark:text-red-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        {cityWeather && (
          <div className="mb-12">
            <WeatherCard weather={cityWeather} />
          </div>
        )}

        {forecast.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              5-Day Forecast
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
              {forecast.map((item, idx) => (
                <ForecastCard key={idx} forecast={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}