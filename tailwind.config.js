/** @type {import('tailwindcss').Config} */
// import themer from "@tailus/themer"; // if i delete this i got an error
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "media",
    safelist: ["isToggled"],
    theme: {
        fontFamily: {
            sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
            mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
            bricolage: ['BricolageGrotesque', 'sans-serif'], // Add your custom font family
        },
        extend: {
            colors: ({ colors }) => ({
                primary : colors.blue,
                danger : colors.rose,
                warning : colors.yellow,
                success : colors.lime,
                info : colors.blue,
                gray : colors.zinc,
                fordblue: '1351D8'
            }),
        }
        
    },
    plugins: [],
};
