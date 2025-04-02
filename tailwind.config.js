export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          DEFAULT: "var(--color-primary)",
        },
        ivory: {
          DEFAULT: "var(--color-ivory)",
        },
        heading: {
          DEFAULT: "var(--color-heading)",
        },
        gray: {
          DEFAULT: "var(--color-gray)",
        },
        warning: {
          500: "var(--color-warning-500)",
        },
        orange: {
          500: "var(--color-orange-500)",
        },
      },
    },
  },
  plugins: [],
};
