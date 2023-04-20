module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    purgecss: {
      content: ["./src/**/*.{ts,tsx,jsx,js}"],
    },
  },
};
