/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bps: {
          blue: '#0284C7', // BPS modern blue
          dark: '#0A2540', // BPS navy
          light: '#E0F2FE',
          orange: '#F59E0B', // BPS orange
          green: '#10B981', // BPS green
        }
      }
    },
  },
  plugins: [],
}
