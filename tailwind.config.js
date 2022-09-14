/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            minWidth: (theme) => ({
                ...theme('spacing'),
            }),
            maxWidth: (theme) => ({
                ...theme('spacing'),
            }),
        },
    },
    plugins: [

    ],
}