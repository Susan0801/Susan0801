# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React icon
https://react-icons.github.io/react-icons/icons
Background Style: https://bg.ibelick.com/


Install Tailwind CSS with Vite: 
npm create vite@latest my-project -- --template react
cd my-project

# npm create vite@latest ./ -- --template react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# change the setting on the file: tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
# set up index.css with goole inter text font 
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: "Inter", sans-serif; /* Adjust according to your preference */
}


background: https://modern-background.vercel.app/

# motion setup
npm install framer-motion
// React
import { motion } from "framer-motion"

I use https://openart.ai/create to generate picture for my portfolio
npm install @react-google-maps/api

npm install axios //Setup Axios or Fetch in ContactMe Component

npm run dev
