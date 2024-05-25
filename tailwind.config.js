/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                primary: "#2C3E50",
                secondary: "#95A5A6",
                dark: "#7B8A8B",
                info: "#3498DB",
                success: "#18BC9C",
                warning: "#F39C12",
                danger: "#E74C3C",
                dim: "#F0F1F2",
                smoke: "#52565E",
                light: "#ECF0F1",
            },
        },
    },
    plugins: [],
};
