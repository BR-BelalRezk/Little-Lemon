/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary_1: "#495e57",
      primary_2: "#f4ce14",
      secondary_1: "#ee9972",
      secondary_2: "#fbdabb",
      highlight_1: "#edefee",
      highlight_2: "#333333",
      transparent : "transparent",
    },
  },
  plugins: [],
};
