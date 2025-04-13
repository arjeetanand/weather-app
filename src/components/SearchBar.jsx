import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center relative">
        <div className="absolute left-4 text-gray-500 dark:text-gray-400"> {/* icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for a city..."
          value={input}          
          onChange={(e) => setInput(e.target.value)}          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:bg-gray-800/60 bg-white/60 backdrop-blur-md dark:text-white shadow-md text-lg"
        />
      </div>
      <button
        type="submit"        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] font-medium text-lg"
>
        Search
      </button>
    </form>

  );
}