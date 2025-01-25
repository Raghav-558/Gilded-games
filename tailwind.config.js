/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                lg: "1025px",
                md: "770px",
            },
            colors: {
                "custom-blue": "#1babfe",
                "custom-dark-blue": "#6A6DD4"
            },
        },
    },
    plugins: [],
}