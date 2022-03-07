module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      blueberry: "#5C2D90",
      blueberryLight: "rgba(65, 30, 118, 0.4)",
      blueberryLight2: "#E8723D",
      white: "#fff",
      black: "#000",
      slate: "#94a3b8",
      slateDark: "#64748b",
      green: "#50BFA8",
      orange: "#f97316",
      cyan: "#06b6d4",
      lightGrey: "#F2F3F9",
      lighterGrey: "rgba(242, 243, 249, 0.5)",
      timerBtn: "#FDCA7B",
      Gold: "#FFD700",
      silver: "#C0C0C0",
      Bronze: "#CD7F32",
      GGWP: "#50BFA8"

    },
    extends: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
