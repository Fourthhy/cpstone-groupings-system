const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'graybg': '#656565'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [    
    flowbite.plugin(),
  ],
};