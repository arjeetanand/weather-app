export default function ForecastCard({ forecasts }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:scale-105">
      {forecasts.length > 0 && (
        <h3 className="font-medium text-lg text-gray-700 dark:text-gray-300 mb-3">
          {formatDate(forecasts[0].dt_txt)}
        </h3>
      )}
      <div>
        {forecasts.map((forecast, index) => {
          const { dt_txt, main, weather, wind, pop, rain } = forecast;
          const time = new Date(dt_txt).toLocaleTimeString(undefined, { hour: 'numeric' });
          const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
          const rainChance = Math.round(pop * 100); // Probability of precipitation
          const rainVolume = rain ? rain['3h'] : 0; // Rainfall volume in mm for the last 3 hours

          return (
            <div key={index} className="flex items-center justify-between py-2 last:pb-0 border-b last:border-none border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400 w-1/4">
                {time}
              </span>
              <div className="flex items-center w-1/2">
                <img src={iconUrl} alt={weather[0].description} className="w-10 h-10 mr-2" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {weather[0].description}
                  </p>
                  {(rainChance > 0 || rainVolume > 0) && (
                    <p className="text-xs text-blue-500 dark:text-blue-300">
                      {rainChance > 0 && <span>Chance: {rainChance}%</span>}
                      {rainVolume > 0 && <span> Volume: {rainVolume.toFixed(1)}mm</span>}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium w-1/4 text-right">
                {Math.round(main.temp)}°C
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
