const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        distressBlue: "#6F85FF",
        distressGrey300: "#D0D5DD",
        distressGrey500: "#667085",
        distressGrey900: "#101828",
        distressGold900: "#F9C590",
        distressGreen900: "#7CC8C7",
        primary: "#f4ad0e",
        secondary: "#00134d",
      },
      boxShadow: {
        '3xl': '0px 10px 15px -3px rgba(16, 24, 40, 0.10), 0px 4px 6px -4px rgba(16, 24, 40, 0.10)',
      },
    },

    // navigation bar animation
    keyframes: {
      'fade-in-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'fade-in-down': 'fade-in-down 0.6s ease-in-out',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
