import plugin from "tailwindcss/plugin";
import { type Config } from "tailwindcss";

// @ts-ignore
import animatePlugin from "tailwindcss-animate";
// @ts-ignore
import hexToHsl from "hex-to-hsl";

const convertHex = (color: string) => hexToHsl(color).reverse().join("% ").split(" ").reverse().join(" ");
export const twPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": convertHex("#ffffff"),
        "--foreground": convertHex("#000000"),
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--popover": convertHex("#ffffff"),
        "--popover-foreground": convertHex("#116737"),
        "--card": convertHex("#ffffff"),
        "--card-foreground": convertHex("#116737"),
        "--border": convertHex("#116737"),
        "--input": "214.3 31.8% 91.4%",
        "--primary": convertHex("#116737"),
        "--primary-foreground": "210 40% 98%",
        "--secondary": convertHex("#116737"),
        "--secondary-foreground": convertHex("#ffffff"),
        "--accent": convertHex("#116737"),
        "--accent-foreground": convertHex("#ffffff"),
        "--destructive": "0 100% 50%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "var(--tw-ring-color)",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "224 71% 4%",
        "--foreground": "213 31% 91%",
        "--muted": "223 47% 11%",
        "--muted-foreground": "215.4 16.3% 56.9%",
        "--popover": "224 71% 4%",
        "--popover-foreground": "215 20.2% 65.1%",
        "--card": "224 71% 4%",
        "--card-foreground": "213 31% 91%",
        "--border": "216 34% 17%",
        "--input": convertHex("#ffffff"),
        "--primary": "210 40% 98%",
        "--primary-foreground": "222.2 47.4% 1.2%",
        "--secondary": convertHex("#116737"),
        "--secondary-foreground": "210 40% 98%",
        "--accent": "216 34% 17%",
        "--accent-foreground": "210 40% 98%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "var(--tw-ring-color)",
        "--radius": "0.5rem",
      },
    }),
      addBase({
        "*": {
          "@apply border-border": {},
        },
        body: {
          "@apply bg-background text-foreground": {},
          "font-feature-settings": "'rlig' 1, 'calt' 1",
        },
      });
  },
  {
    darkMode: "class",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          dark: "#27272A",
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          "admin-background": "var(--background)",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontFamily: {
          serif: "Roboto",
          mono: "Roboto",
          sans: "Roboto",
          heading: "Teko",
        },
      },
    },
  }
);

export const twPreset = {
  content: [],
  plugins: [twPlugin, animatePlugin],
} satisfies Config;
