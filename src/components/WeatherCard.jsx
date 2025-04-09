export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-200/30 dark:border-white/20 transition-all duration-300">
      <div className="p-8 pb-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2 tracking-tight">{weather.name}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">{weather.weather[0].description}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-white/20 dark:bg-white/5 rounded-t-3xl md:rounded-none">
      <div className="text-7xl font-light text-google-blue dark:text-white mb-6 md:mb-0">
  {Math.round(weather.main.temp)}°C
</div>


        <div className="flex-shrink-0">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
            className="w-28 h-28"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700 text-center bg-white/10 dark:bg-white/5">
        {[
          { label: "Humidity", value: `${weather.main.humidity}%` },
          { label: "Wind", value: `${weather.wind.speed} m/s` },
          { label: "Feels Like", value: `${Math.round(weather.main.feels_like)}°C` },
        ].map(({ label, value }, i) => (
          <div key={i} className="p-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</p>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
