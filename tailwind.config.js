/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{tsx,css,ts,js,jsx}'],
    theme: {
        extend: {
            // Ajoutez les couleurs de DaisyUI à votre palette de couleurs personnalisée
            colors: {
                neutral: {
                    // Remplacez ces valeurs par les codes hexadécimaux de DaisyUI
                    DEFAULT: '#2b3241', // neutral
                    focus: '##1d222b', // neutral-focus
                    content: '##d8dde5' // neutral-content
                },
                bg450: {
                    logo: '#1d63d2',
                    logohover: '#2272f2',
                    logodisabled: '#154ba1',
                    dark: '#192231',
                    lessdark: '#1f2937',
                    inputdark: '#2a3441'
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),]
};
