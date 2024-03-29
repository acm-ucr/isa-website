/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        isa: {
          black: "#303030",
          white: "#FFFFFF",
          "blue-100": "#8CD8FA",
          "blue-200": "#06A0DB",
          "yellow-50": "#FFECBD",
          "yellow-100": "#FFDA7C",
          "yellow-200": "#FFA824",
        },
      },
      boxShadow: {
        inner: "inset 0 0px 2px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
