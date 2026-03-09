import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./templates/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./index.html",
    ],
    theme: {
        screens: {
            "5xl": { max: "2299px" },
            // => @media (max-width: 2299px) { ... }
            "4xl": { max: "1899px" },
            // => @media (max-width: 1899px) { ... }
            "3xl": { max: "1719px" },
            // => @media (max-width: 1719px) { ... }
            "2xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            lxl: { max: "1259px" },
            // => @media (max-width: 1259px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                // CAFE Brand Colors
                charcoal: {
                    DEFAULT: "#2C2A26",
                    50: "#4A4842",
                    100: "#3D3B36",
                    200: "#2C2A26",
                    300: "#1F1E1B",
                    400: "#121110",
                },
                cream: {
                    DEFAULT: "#F5F2EB",
                    50: "#FFFFFF",
                    100: "#FAF9F6",
                    200: "#F5F2EB",
                    300: "#E8E3D8",
                    400: "#DBD4C5",
                },
                rust: {
                    DEFAULT: "#965A3E",
                    50: "#C9937A",
                    100: "#B87A5E",
                    200: "#965A3E",
                    300: "#724530",
                    400: "#4E2F21",
                },
                sage: {
                    DEFAULT: "#7B8B6F",
                    50: "#A8B49F",
                    100: "#919F87",
                    200: "#7B8B6F",
                    300: "#5F6B56",
                    400: "#444D3E",
                },
                taupe: {
                    DEFAULT: "#D4C4B0",
                    50: "#F2EDE6",
                    100: "#E3D9CB",
                    200: "#D4C4B0",
                    300: "#C5AF95",
                    400: "#B69A7A",
                },
                // Legacy compatibility
                primary: {
                    0: "#F5F2EB",
                    25: "#E8E3D8",
                    50: "#D4C4B0",
                    100: "#965A3E",
                    200: "#B87A5E",
                    300: "#7B8B6F",
                },
                secondary: {
                    0: "#FAF9F6",
                    25: "#E8E3D8",
                    50: "#D4C4B0",
                    100: "#7B8B6F",
                    200: "#3D3B36",
                    300: "#2C2A26",
                },
                greyscale: {
                    0: "#FFFFFF",
                    25: "#FAF9F6",
                    50: "#F5F2EB",
                    100: "#E8E3D8",
                    200: "#D4C4B0",
                    300: "#A89F8F",
                    400: "#7D7568",
                    500: "#5A544A",
                    600: "#3D3B36",
                    700: "#2C2A26",
                    800: "#1F1E1B",
                    900: "#121110",
                },
                others: {
                    0: "#F5F2EB",
                    25: "#E8E3D8",
                    50: "#D4C4B0",
                    100: "#7B8B6F",
                    200: "#5F6B56",
                    300: "#444D3E",
                },
                success: {
                    0: "#F0F5ED",
                    25: "#D9E5D2",
                    50: "#A8B49F",
                    100: "#7B8B6F",
                    200: "#5F6B56",
                    300: "#444D3E",
                },
                warning: {
                    0: "#FDF5ED",
                    25: "#F5E5D5",
                    50: "#D4C4B0",
                    100: "#965A3E",
                    200: "#724530",
                    300: "#4E2F21",
                },
                error: {
                    0: "#FDF0ED",
                    25: "#F5D5CE",
                    50: "#C9937A",
                    100: "#965A3E",
                    200: "#724530",
                    300: "#4E2F21",
                },
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                7.5: "1.875rem",
                8.5: "2.125rem",
                9.5: "2.375rem",
                13: "3.25rem",
                15: "3.75rem",
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
                21: "5.25rem",
                22: "5.5rem",
                23: "5.75rem",
                25: "6.25rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                42: "10.5rem",
                54: "13.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
                0: "0",
                2: "0.125rem",
                3: "0.1875rem",
                4: "0.25rem",
                8: "0.5rem",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            fontSize: {
                0: ["0", "0"],
                sm: ["0.75rem", "1.2rem"],
                base: ["0.875rem", "1.4rem"],
                lg: ["1rem", "1.5rem"],
                xl: ["1.125rem", "1.6875rem"],
                h1: [
                    "4.25rem",
                    {
                        lineHeight: "5.1rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h2: [
                    "3.25rem",
                    {
                        lineHeight: "3.9rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h3: [
                    "3rem",
                    {
                        lineHeight: "3.6rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h4: [
                    "2.5rem",
                    {
                        lineHeight: "3rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h5: [
                    "2rem",
                    {
                        lineHeight: "2.4rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
                h6: [
                    "1.5rem",
                    {
                        lineHeight: "1.8rem",
                        fontWeight: "600",
                        letterSpacing: "-0.01em",
                    },
                ],
            },
            boxShadow: {
                1: "0.25rem 0.5rem 2rem 0 rgba(10, 10, 10, 0.06)",
                2: "0 0.25rem 0.75rem -0.0625rem rgba(10, 10, 10, 0.04)",
                3: "0 1.25rem 2.5rem 0 rgba(10, 10, 10, 0.06)",
            },
            backgroundImage: {
                'gradient-divider-light': 'linear-gradient(to bottom, rgba(255,255,255, 0.15) 0, rgba(255,255,255, 0.15) 0.3125rem, transparent 0.3125rem, transparent 0.5rem)',
                'gradient-divider': 'linear-gradient(to bottom, #D4D4D4 0, #D4D4D4 0.3125rem, transparent 0.3125rem, transparent 0.5rem)',
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@rvxlab/tailwind-plugin-ios-full-height'),
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({
                html: {
                    "@apply text-[calc(1rem+.2vw)] 5xl:text-[calc(1rem+.15vw)] 4xl:text-[calc(1rem+.1vw)] 3xl:text-[1rem]": {},
                },
            });
            addComponents({
                ".section": {
                    "@apply py-30 xl:py-24 md:py-12":
                        {},
                },
                ".section-md": {
                    "@apply py-24 md:py-12":
                        {},
                },
                ".container": {
                    "@apply max-w-[82.5rem] mx-auto px-8 3xl:max-w-[76.5rem] lg:px-12 md:px-6":
                        {},
                },
                ".container-md": {
                    "@apply container max-w-[90rem] 3xl:max-w-[84rem]":
                        {},
                },
                ".btn": {
                    "@apply inline-flex items-center justify-center h-13 px-7 space-x-2 border border-transparent font-sans text-lg font-semibold rounded-full transition-colors":
                        {},
                },
                ".btn-primary": {
                    "@apply btn bg-primary-300 text-secondary-300 hover:bg-primary-100":
                        {},
                },
                ".btn-secondary": {
                    "@apply btn bg-greyscale-0 border-greyscale-100 text-greyscale-900 hover:bg-primary-300 hover:border-transparent":
                        {},
                },
                ".btn-md": {
                    "@apply h-12 px-6":
                        {},
                },
                ".btn-sm": {
                    "@apply h-10 px-4 text-base":
                        {},
                },
                ".label": {
                    "@apply inline-flex items-center h-8 px-4 bg-primary-25 rounded-full text-base font-medium text-secondary-300":
                        {},
                },
                ".label-sm": {
                    "@apply h-[1.625rem] px-2.5 text-sm":
                        {},
                },
                ".stage": {
                    "@apply mb-4 text-xl font-medium text-greyscale-400 md:text-lg":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
}
export default config
