module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            300: "#996dff",
            500: "#8257e6",
          },
          green: {
            100: "#F7F9F9",
            200: "#DCE9E2",
            500: "#00856F",
            600: "#00453A",
          },
          gray: {
            700: "#495057",
            800: "#212529",
          },
          bege: {
            300: "#FFFAF1",
          },
        },
      },
      borderRadius: {
        md: "4px",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
