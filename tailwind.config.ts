import type { Config } from "tailwindcss";
// import type { ThemeConfig } from "tailwindcss/types/config";
// ? Added this type for theme line 32, but it's not working well...

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

// TODO Redo the scale with ratio 1.5, start 16px, 20px

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Let's call it light to be able to implement a dark mode later on
      white: "#ffffff",
      transparent: "transparent",
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      light: {
        // * MAIN ACCENT COLOR OF THE WEBSITE
        primary: {
          light: "#ffbab8",
          DEFAULT: "#ff6f6b",
          dark: "#ce423e",
        },
        background: "#ffffff",
        // TODO Maybe make a base text color and a base background color
      },
    },
    fontFamily: {
      calistoga: ["Calistoga", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    // * OVERRIDING TAILWIND BASE CLASSES TO ADD UTOPIA.FYI CLAMP VALUES
    // Utopia.fyi config: MIN 480px, Font size 16px, Type scale 1.25 | MAX 1024px, Font size 24px, Type scale 1.25

    // * -------- Font Size Values --------
    // From: https://utopia.fyi/type/calculator?c=480,16,1.25,1024,20,1.25,10,2,&s=0.875|0.75|0.625|0.5|0.375|0.25|0.125,1.25|1.5|1.75|2|2.25|2.5|2.75|3|3.5|4|5|6|7|6|9|10|11|12|13|14|15|16|18|20|24,s-l&g=s,l,xl,10 */
    fontSize: {
      xs: "clamp(0.64rem, 0.5694rem + 0.2353vw, 0.72rem)",
      sm: "clamp(0.8rem, 0.7118rem + 0.2941vw, 0.9rem)",
      base: "clamp(1rem, 0.8897rem + 0.3676vw, 1.125rem)",
      lg: "clamp(1.25rem, 1.1121rem + 0.4596vw, 1.4063rem)",
      xl: "clamp(1.5625rem, 1.3902rem + 0.5744vw, 1.7578rem)",
      "2xl": "clamp(1.9531rem, 1.7377rem + 0.7181vw, 2.1973rem)",
      "3xl": "clamp(2.4414rem, 2.1721rem + 0.8976vw, 2.7466rem)",
      "4xl": "clamp(3.0518rem, 2.7152rem + 1.122vw, 3.4332rem)",
      "5xl": "clamp(3.8147rem, 3.394rem + 1.4025vw, 4.2915rem)",
      "6xl": "clamp(4.7684rem, 4.2424rem + 1.7531vw, 5.3644rem)",
      "7xl": "clamp(5.9605rem, 5.3031rem + 2.1913vw, 6.7055rem)",
      "8xl": "clamp(7.4506rem, 6.6288rem + 2.7392vw, 8.3819rem)",
      "9xl": "clamp(9.3132rem, 8.286rem + 3.424vw, 10.4774rem)",
    },

    // * -------- Spacing Size Values --------
    // From: https://utopia.fyi/space/calculator?c=480,16,1.25,1024,20,1.25,10,2,&s=0.875|0.75|0.625|0.5|0.375|0.25|0.125,1.25|1.5|1.75|2|2.25|2.5|2.75|3|3.5|4|5|6|7|6|9|10|11|12|13|14|15|16|18|20|24,s-l&g=s,l,xl,10 */
    spacing: {
      0: "0px",
      0.5: "clamp(0.125rem, 0.125rem + 0vw, 0.125rem)",
      1: "clamp(0.25rem, 0.1949rem + 0.1838vw, 0.3125rem)",
      1.5: "clamp(0.375rem, 0.3199rem + 0.1838vw, 0.4375rem)",
      2: "clamp(0.5rem, 0.4449rem + 0.1838vw, 0.5625rem)",
      2.5: "clamp(0.625rem, 0.5699rem + 0.1838vw, 0.6875rem)",
      3: "clamp(0.75rem, 0.6397rem + 0.3676vw, 0.875rem)",
      3.5: "clamp(0.875rem, 0.7647rem + 0.3676vw, 1rem)",
      4: "clamp(1rem, 0.8897rem + 0.3676vw, 1.125rem)",
      5: "clamp(1.25rem, 1.0846rem + 0.5515vw, 1.4375rem)",
      6: "clamp(1.5rem, 1.3346rem + 0.5515vw, 1.6875rem)",
      7: "clamp(1.75rem, 1.5294rem + 0.7353vw, 2rem)",
      8: "clamp(2rem, 1.7794rem + 0.7353vw, 2.25rem)",
      9: "clamp(2.25rem, 1.9743rem + 0.9191vw, 2.5625rem)",
      10: "clamp(2.5rem, 2.2243rem + 0.9191vw, 2.8125rem)",
      11: "clamp(2.75rem, 2.4191rem + 1.1029vw, 3.125rem)",
      12: "clamp(3rem, 2.6691rem + 1.1029vw, 3.375rem)",
      14: "clamp(3.5rem, 3.114rem + 1.2868vw, 3.9375rem)",
      16: "clamp(4rem, 3.5588rem + 1.4706vw, 4.5rem)",
      20: "clamp(5rem, 4.4485rem + 1.8382vw, 5.625rem)",
      24: "clamp(6rem, 5.3382rem + 2.2059vw, 6.75rem)",
      28: "clamp(6rem, 5.3382rem + 2.2059vw, 6.75rem)",
      32: "clamp(7rem, 6.2279rem + 2.5735vw, 7.875rem)",
      36: "clamp(9rem, 8.0074rem + 3.3088vw, 10.125rem)",
      40: "clamp(10rem, 8.8971rem + 3.6765vw, 11.25rem)",
      44: "clamp(11rem, 9.7868rem + 4.0441vw, 12.375rem)",
      48: "clamp(12rem, 10.6765rem + 4.4118vw, 13.5rem)",
      52: "clamp(13rem, 11.5662rem + 4.7794vw, 14.625rem)",
      56: "clamp(14rem, 12.4559rem + 5.1471vw, 15.75rem)",
      60: "clamp(15rem, 13.3456rem + 5.5147vw, 16.875rem)",
      64: "clamp(16rem, 14.2353rem + 5.8824vw, 18rem)",
      72: "clamp(18rem, 16.0147rem + 6.6176vw, 20.25rem)",
      80: "clamp(20rem, 17.7941rem + 7.3529vw, 22.5rem)",
      96: "clamp(24rem, 21.3529rem + 8.8235vw, 27rem)",
    },

    extend: {
      content: {
        DEFAULT: '""', // Default content for pseudo-elements
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: any) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.lato"),
          fontSize: theme("fontSize.base"),
          fontWeight: 400,
          color: theme("colors.zinc.700"),
          backgroundColor: theme("colors.light.background"),
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: theme("fontFamily.calistoga"),
        },
        h1: {
          fontSize: theme("fontSize.3xl"),
          marginTop: theme("spacing.10"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          marginTop: theme("spacing.10"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          marginTop: theme("spacing.8"),
        },
        h4: {
          fontSize: theme("fontSize.xl"),
          marginTop: theme("spacing.6"),
        },
        h5: {
          fontSize: theme("fontSize.lg"),
          marginTop: theme("spacing.4"),
        },
        h6: {
          fontSize: theme("fontSize.md"),
          marginTop: theme("spacing.4"),
        },
        p: {
          fontSize: theme("fontSize.base"),
          lineHeight: 1.6,
          marginTop: theme("spacing.2"),
          textAlign: "justify",
        },
        a: {
          color: theme("colors.light.primary.DEFAULT"),
          textDecoration: "underline",
          transition: "color 0.3s",
        },
        "a:hover": {
          color: theme("colors.light.primary.light"),
        },
        ul: {
          listStyleType: "disc",
          marginLeft: theme("spacing.6"),
        },
        ol: {
          listStyleType: "decimal",
          marginLeft: theme("spacing.6"),
        },
        li: {
          marginTop: theme("spacing.2"),
        },
        "ul li::marker": {
          color: theme("colors.zinc.400"),
        },
        ".grid > .container": {
          paddingLeft: "0",
          paddingRight: "0",
        },
      });
    }),
    plugin(function ({ addComponents, theme }: any) {
      addComponents({
        // ".container": {
        //   "@screen lg": {
        //     padding: "0",
        //   },
        // },
        ".container": {
          "@media (min-width: 1096px)": {
            padding: "0",
          },
        },
      });
    }),
  ],
};

export default config;

// ? If needed, one up pairs from Utopia.fyi
/* @link https://utopia.fyi/space/calculator?c=480,16,1.2,1024,24,1.25,10,2,&s=0.75|0.5|0.25,1.25|1.5|1.75|2|2.25|2.5|2.75|3|3.5|4|5|6|7|8|9|10|11|12|13|14|15|16|18|20|24,s-l&g=s,l,xl,12 */

// :root {

//   /* One-up pairs */
//   --space-3xs-2xs: clamp(0.25rem, -0.1912rem + 1.4706vi, 0.75rem);
//   --space-2xs-xs: clamp(0.5rem, -0.0515rem + 1.8382vi, 1.125rem);
//   --space-xs-s: clamp(0.75rem, 0.0882rem + 2.2059vi, 1.5rem);
//   --space-s-m: clamp(1rem, 0.2279rem + 2.5735vi, 1.875rem);
//   --space-m-l: clamp(1.25rem, 0.3676rem + 2.9412vi, 2.25rem);
//   --space-l-xl: clamp(1.5rem, 0.5074rem + 3.3088vi, 2.625rem);
//   --space-xl-2xl: clamp(1.75rem, 0.6471rem + 3.6765vi, 3rem);
//   --space-2xl-3xl: clamp(2rem, 0.7868rem + 4.0441vi, 3.375rem);
//   --space-3xl-4xl: clamp(2.25rem, 0.9265rem + 4.4118vi, 3.75rem);
//   --space-4xl-5xl: clamp(2.5rem, 1.0662rem + 4.7794vi, 4.125rem);
//   --space-5xl-6xl: clamp(2.75rem, 1.2059rem + 5.1471vi, 4.5rem);
//   --space-6xl-7xl: clamp(3rem, 1.0147rem + 6.6176vi, 5.25rem);
//   --space-7xl-8xl: clamp(3.5rem, 1.2941rem + 7.3529vi, 6rem);
//   --space-8xl-9xl: clamp(4rem, 0.9118rem + 10.2941vi, 7.5rem);
//   --space-9xl-10xl: clamp(5rem, 1.4706rem + 11.7647vi, 9rem);
//   --space-10xl-11xl: clamp(6rem, 2.0294rem + 13.2353vi, 10.5rem);
//   --space-11xl-12xl: clamp(7rem, 2.5882rem + 14.7059vi, 12rem);
//   --space-12xl-13xl: clamp(8rem, 3.1471rem + 16.1765vi, 13.5rem);
//   --space-13xl-14xl: clamp(9rem, 3.7059rem + 17.6471vi, 15rem);
//   --space-14xl-15xl: clamp(10rem, 4.2647rem + 19.1176vi, 16.5rem);
//   --space-15xl-16xl: clamp(11rem, 4.8235rem + 20.5882vi, 18rem);
//   --space-16xl-17xl: clamp(12rem, 5.3824rem + 22.0588vi, 19.5rem);
//   --space-17xl-18xl: clamp(13rem, 5.9412rem + 23.5294vi, 21rem);
//   --space-18xl-19xl: clamp(14rem, 6.5rem + 25vi, 22.5rem);
//   --space-19xl-20xl: clamp(15rem, 7.0588rem + 26.4706vi, 24rem);
//   --space-20xl-21xl: clamp(16rem, 6.2941rem + 32.3529vi, 27rem);
//   --space-21xl-22xl: clamp(18rem, 7.4118rem + 35.2941vi, 30rem);
//   --space-22xl-23xl: clamp(20rem, 5.8824rem + 47.0588vi, 36rem);

// }
