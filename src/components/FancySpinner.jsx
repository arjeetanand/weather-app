import Lottie from "react-lottie-player";
import animationData from "../assets/weather-loading.json";

export default function FancySpinner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-12">
      <Lottie
  loop
  animationData={animationData}
  play
  style={{ width: 180, height: 180 }}
  className="google-spinner drop-shadow-md"
/>

      {/* <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 180, height: 180 }}
      /> */}
      <p className="mt-4 md:mt-0 md:ml-6 text-gray-600 dark:text-gray-300 font-medium text-lg">Loading weather data...</p>
    </div>
  );
}

