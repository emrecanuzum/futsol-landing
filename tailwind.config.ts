import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
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
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(
      function ({ addVariant }: { addVariant: Function }) {
        addVariant("glow", ".glow-capture .glow-overlay &");
      },
      {
        theme: {
          extend: {
            boxShadow: {
              glow: "0 0 8px var(--glow-color, rgba(255, 255, 255, 0.8))",
            },
          },
        },
      }
    ),
  ],
};
export default config;
