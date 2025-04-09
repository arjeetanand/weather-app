import { useNavigate } from 'react-router-dom';
export default function Landing() {
  const navigate = useNavigate();

  const googleBlue = "#4285F4";
  const googleRed = "#EA4335";
  const googleYellow = "#FBBC05";
  const googleGreen = "#34A853";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-all">
      <div className="text-center max-w-xl sm:max-w-2xl">
        <div className="mb-10">
          <div className="inline-flex items-center justify-center p-6 bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-full shadow-2xl mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 64 64">
              <path fill={googleBlue} d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22c-12.15,0-22-9.85-22-22S19.85,10,32,10z"/>
              <path fill={googleYellow} d="M17,32c0-8.28,6.72-15,15-15l7,7H17z"/>
              <path fill={googleGreen} d="M39,39l-7,7c-8.28,0-15-6.72-15-15l7-7L39,39z"/>
              <path fill={googleRed} d="M39,25l-7-7c8.28,0,15,6.72,15,15l-7,7L39,25z"/>
            </svg>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-[var(--google-blue)] via-[var(--google-red)] to-[var(--google-green)] bg-clip-text text-transparent">
            Weatherly
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 font-light">
            Hyper-sleek forecasts for every day.
          </p>
        </div>

        <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl mb-12">
          <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Check real-time weather updates and 5-day forecasts from anywhere in the world – all with an elegant interface.
          </p>
          <button
            onClick={() => navigate('/weather')}
            className="w-full py-4 px-8 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
            style={{ backgroundColor: googleBlue }}
          >
            Get Started
          </button>
        </div>

        {/* <div className="grid grid-cols-4 gap-2">
          {[googleBlue, googleRed, googleYellow, googleGreen].map((color, i) => (
            <div key={i} className="h-2 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div> */}
        <div className="grid grid-cols-4 gap-2">
  <div className="h-2 rounded-full bg-google-blue" />
  <div className="h-2 rounded-full bg-google-red" />
  <div className="h-2 rounded-full bg-google-yellow" />
  <div className="h-2 rounded-full bg-google-green" />
</div>

      </div>
    </div>
  );
}
