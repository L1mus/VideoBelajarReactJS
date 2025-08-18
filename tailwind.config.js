/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // MAIN STYLE COLOR
        primaryMainColor: "#3ECF4C",
        primaryMainColor1: "#6BE26B",
        primaryMainColor2: "#94F08B",
        primaryMainColor3: "#C0FAB4",
        primaryMainColor4: "#E2FCD9CC",

        secondaryMainColor: "#FFBD3A",
        secondaryMainColor1: "#FFD26B",
        secondaryMainColor2: "#FFDF88",
        secondaryMainColor3: "#FFEBB3",
        secondaryMainColor4: "#FFF6D9CC",

        tetrinaryMainColor: "#FF3A3A",
        tetrinaryMainColor1: "#FF6B6B",
        tetrinaryMainColor2: "#FF8B8B",
        tetrinaryMainColor3: "#FFB3B3",
        tetrinaryMainColor4: "#FFD9D9CC",

        // Text(Dark)
        lightPrimary: "#E2FCD9CC",
        lightSecondary: "#FFF6D9CC",
        lightTetrinary: "#FFD9D9CC",

        /* Text(Light) */
        darkPrimary: "#3ECF4C",
        darkSecondary: "#FFBD3A",
        darkTetrinary: "#FF3A3A",

        // Other
        baseBackground: "#F4F5FA",
        secondatyBackground: "#F9FAFC",

        // Gradient
        infoGradient: "linear-gradient(to right, #6F9EFF, #004CE8)",
        successGradient: "linear-gradient(to right, #73FFA6, #00C247)",
        warningGradient: "linear-gradient(to right, #FFE58036, #FFE16A)",
        errorGradient: "linear-gradient(to right, #FF8A9B, #FF3333)",
      },
    },
  },
  plugins: [],
};
