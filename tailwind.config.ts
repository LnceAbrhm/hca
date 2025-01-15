import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'Cambridgeblue' : '#94AE89',
        'Ashgray' : '#A8BCA1',
        'Mindaro' : '#C0DA74',
        'Teagreen' : '#BEEDAA',
        'Honeydew' : '#EBFFED',
        'Calpolygreen' : '#2A4D14',
      },
    },
  },
  plugins: [],
} satisfies Config;
