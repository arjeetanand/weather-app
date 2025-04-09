export default function ForecastCard({ forecast }) {
  const { dt_txt, main, weather } = forecast;
  const date = new Date(dt_txt);
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  return (
    <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 text-center transition-all duration-300 hover:scale-105">
      <p className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-3">
        {date.toLocaleDateString(undefined, { weekday: "short", day: "numeric" })}
      </p>
      <div className="flex justify-center items-center mb-2">
        <img src={iconUrl} alt={weather[0].description} className="w-12 h-12 sm:w-14 sm:h-14" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 capitalize mb-2">{weather[0].description}</p>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{Math.round(main.temp)}°C</p>
    </div>
  );
}
