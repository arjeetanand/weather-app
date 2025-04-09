// module.exports = {
//   darkMode: 'class',
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#1E88E5",
          red: "#E53935",
          yellow: "#FBBC05",
          green: "#43A047",
          gray: "#F5F5F5",
        },
        darkModeColors: {
          blue: "#90CAF9", // Lighter blue for dark backgrounds
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
