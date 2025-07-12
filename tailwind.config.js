/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo 600
        accent: "#10B981", // Emerald 600
        background: "#F9FAFB", // Light Gray
        textDark: "#1F2937", // Slate
        success: "#22C55E", // Green
        error: "#EF4444", // Red
        warning: "#F59E0B", // Amber
        info: "#3B82F6", // Blue
      },
      fontFamily: {
        regular: ["Montserrat-Regular", "sans-serif"],
        medium: ["Montserrat-Medium", "sans-serif"],
        semiBold: ["Montserrat-SemiBold", "sans-serif"],
        bold: ["Montserrat-Bold", "sans-serif"],
        boldItalic: ["Montserrat-BoldItalic", "sans-serif"],
        black: ["Montserrat-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// This configuration file sets up Tailwind CSS with custom colors and content paths.
// It extends the default theme with custom colors for primary, accent, background, text, success
