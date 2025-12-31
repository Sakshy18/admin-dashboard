/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: {
          bg: "var(--background)",
          foreground: "var(--foreground)",
          purple: "#E5ECF6",
          blue: "#E3F5FF",
          cyan: "#A8C5DA",
          black: {
            5: "var(--snow-black-5)",
            10: "var(--snow-black-10)",
            20: "var(--snow-black-20)",
            33: "var(--snow-black-33)",
            66: "var(--snow-black-66)",
          },
        },
      },

      borderColor: {
        "snow-black-5": "var(--snow-black-5)",
        "snow-black-10": "var(--snow-black-10)",
        "snow-black-20": "var(--snow-black-20)",
        "snow-black-33": "var(--snow-black-33)",
        "snow-black-66": "var(--snow-black-66)",
      },

      width: {
        sidebar: "212px",
        rightbar: "280px",
      },

      height: {
        header: "68px",
      },
    },
  },
  plugins: [],
};
