export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
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
