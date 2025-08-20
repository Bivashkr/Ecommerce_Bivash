// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",        // Standard React paths
    "./public/**/*.html",                // HTML files (if any)
    "./Components/**/*.{js,jsx,ts,tsx}", // Additional component paths
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}