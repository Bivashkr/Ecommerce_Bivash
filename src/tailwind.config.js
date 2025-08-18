module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes your Navigation.jsx
  ],
  theme: {
    screens: {
      sm: "640px",   // Small screens (e.g., phones)
      md: "768px",   // Medium screens (e.g., tablets)
      lg: "1024px",  // Large screens (e.g., laptops, default for `lg:`)
      xl: "1280px",  // Extra-large screens
    },
    extend: {}, // Keep other theme extensions here
  },
  plugins: [], // Add plugins if needed
};