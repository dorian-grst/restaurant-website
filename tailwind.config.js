/** @type {import('tailwindcss').Config} */
export default {
    content: ['./public/index.html', './src/**/*.{jsx,js,tsx,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#0A2116',
                secondary: '#FFD6C5',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },
            screens: {
                laptopl: '1440px',
            },
        },
    },
    plugins: [],
}
