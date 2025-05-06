/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "778px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1280px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#db4444",
      },
    },
  },
  plugins: [],
};
