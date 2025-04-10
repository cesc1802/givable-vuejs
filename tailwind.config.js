export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          DEFAULT: "var(--color-primary)",
        },
        ivory: {
          DEFAULT: "var(--color-ivory)",
        },
        heading: {
          DEFAULT: "var(--color-heading)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          500: "var(--color-gray-500)",
          700: "var(--color-gray-700)",
          DEFAULT: "var(--color-gray)",
        },
        warning: {
          500: "var(--color-warning-500)",
        },
        orange: {
          500: "var(--color-orange-500)",
        },
        error: {
          600: "var(--color-error-600)",
          700: "var(--color-error-700)",
        },
        "green-light": {
          500: "var(--color-green-light-500)",
        },
      },
    },
  },
  plugins: [],
};
