/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://plus.unsplash.com/premium_photo-1671730786932-da6dc73870c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9tYW50aWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  
}

