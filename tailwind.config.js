/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          LIGHT: '#e9effd'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          LIGHT: '#e8f7f2'
        },
        gray: {
          DEFAULT: 'hsl(var(--gray))',
          100: '#d2d2d2'
        },
        dark: {
          DEFAULT: 'hsl(var(--dark))',
        },
      },
      fontFamily: {
        body: [
          "Karla",
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        'recoleta': 'Recoleta',
      },
    
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      fontSize: {
        DEFAULT: "1.4rem",  
        xs: ["1.2rem", { lineHeight: "2.4rem" }],
        sm: ["1.4rem", { lineHeight: "2.4rem" }],
        base: ["1.5rem", { lineHeight: "2.5rem" }],
        lg: ["1.6rem", { lineHeight: "2.6rem" }],
        xl: ["1.8rem", { lineHeight: "3.0rem" }],
        "17": ["1.7rem", { lineHeight: "2.6rem" }],
        "2xl": ["2.0rem", { lineHeight: "2.4rem" }],
        "3xl": ["2.4rem", { lineHeight: "3.2rem" }],
        "4xl": ["3.0rem", { lineHeight: "3.6rem" }],
        "5xl": ["3.6rem", { lineHeight: "4.4rem" }],
        "6xl": ["4.2rem", { lineHeight: "5.6rem" }],
        "7xl": ["4.8rem", { lineHeight: "6.4rem" }],
        "8xl": ["5.4rem", { lineHeight: "6.0rem" }],
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
      borderRadius: {
        'medium': '3.0rem',
        'large': '5.0rem',
        'md': '1.0rem',
      },
      boxShadow: {
        'custom': '0px 4px 67px -39px #18181B',
        'custom-2': '0px -32px 80px 0px rgba(39, 39, 42, 0.06)',
      },
      screens: {
        'small': {'max': '768px'},
    },
    
    },
  },
  variants : {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
