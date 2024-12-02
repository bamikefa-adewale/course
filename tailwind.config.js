const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
});
