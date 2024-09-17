import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      animation: {
        snow: "snow ease-in-out infinite", // Replace with your desired duration
      },
      keyframes: {
        snow: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translate(100px, 50vh)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
