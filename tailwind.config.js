/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "media",
    theme: {
        fontFamily: {
            sans: ['"Bricolage Grotesque"', 'Inter', ...defaultTheme.fontFamily.sans],
            mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
            bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        },
        extend: {
            colors: ({ colors }) => ({
                primary : colors.blue,
                danger : colors.rose,
                warning : colors.yellow,
                success : colors.lime,
                info : colors.blue,
                gray : colors.zinc,
                fordblue: '1351D8',
                // ART6B Official Colors
                brand: {
                    ford: '#1351D8',       // Primary / Mid-tone
                    orange: '#FF7F3E',     // Highlight (5%)
                    apricot: '#FFF6E9',    // Light background
                    soft: '#80C4E9',       // Soft blue mid-tone
                    gunmetal: '#1B262C',   // Primary dark (70%)
                }
            }),
        }
        
    },
    plugins: [],
};
