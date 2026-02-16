// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-serif": ['DM Serif Display"', "serif"],
        inter: ["Inter", "sans-serif"],
        arialic: ['Arialic Hollow"', "sans-serif"],
      },
      keyframes: {
        colorChange1: {
          "0%": {
            backgroundColor: "#1D4ED8",
          },
          "100%": {
            backgroundColor: "#E11D48",
          },
        },
        colorChange2: {
          "0%": {
            backgroundColor: "#34D399",
          },
          "100%": {
            backgroundColor: "#FBBF24",
          },
        },
        colorChange3: {
          "0%": {
            backgroundColor: "#60A5FA",
          },
          "100%": {
            backgroundColor: "#F472B6",
          },
        },
        colorChange4: {
          "0%": {
            backgroundColor: "#10B981",
          },
          "100%": {
            backgroundColor: "#6366F1",
          },
        },
        colorChange5: {
          "0%": {
            backgroundColor: "#F97316",
          },
          "100%": {
            backgroundColor: "#84CC16",
          },
        },
      },
      animation: {
        colorChange1: "colorChange1 4s ease-in-out infinite alternate",
        colorChange2: "colorChange2 4s ease-in-out infinite alternate",
        colorChange3: "colorChange3 4s ease-in-out infinite alternate",
        colorChange4: "colorChange4 4s ease-in-out infinite alternate",
        colorChange5: "colorChange5 4s ease-in-out infinite alternate",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        primaryRed: "#DC2626",
        bgGray: "#24252A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
