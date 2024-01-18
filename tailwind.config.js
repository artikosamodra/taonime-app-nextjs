/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    //My Color Assets (if not use tailwind package)
    // colors: {
    //   primary: "#fcba03",
    //   secondary: "#4977eb",
    //   topfirst: "#ecc9ff",
    //   topsecond: "#66cdaa",
    //   bgcol: "#4c001f",
    //   accent: "#363234",
    //   support: "#0f7012",
    //   extra: "#ed133b",
    // },
  },
  plugins: [],
};
