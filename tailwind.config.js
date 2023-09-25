/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,css,ts,js,jsx}"],
  theme: {
    extend: {
      // Ajoutez les couleurs de DaisyUI à votre palette de couleurs personnalisée
      colors: {
        neutral: {
          // Remplacez ces valeurs par les codes hexadécimaux de DaisyUI
          DEFAULT: "#2b3241", // neutral
          focus: "##1d222b", // neutral-focus
          content: "##d8dde5" // neutral-content
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
