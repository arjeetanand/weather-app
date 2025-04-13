import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // Initialize theme from localStorage or system preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || 
       (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeToggle />
        <div className="container mx-auto px-4"> {/* Added container */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/weather" element={<Home />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;