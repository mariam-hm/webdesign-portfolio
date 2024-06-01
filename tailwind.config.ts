import type { Config } from "tailwindcss";
// import type { ThemeConfig } from "tailwindcss/types/config";
// ? Added this type for theme line 32, but it's not working well...

const defaultTheme = require("tailwindcss/defaultTheme");

// TODO Redo the scale with ratio 1.5, start 16px, 20px

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "560px", // Adding an xs container size
          DEFAULT: "1024px", // Setting default container size
        },
      },
      // * MAIN ACCENT COLOR OF THE WEBSITE
      colors: {
        primary: "#FF6F6B",
        "primary-light": "#FFBAB8",
        "primary-dark": "#CE423E",
      },
      fontFamily: {
        calistoga: ["Calistoga", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },

      // * BUILDING MY OWN THEME TO REDUCE INLINE CLASSES
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            fontFamily: theme("fontFamily.lato").join(", "),
            fontSize: theme("fontSize.base"),
            color: theme("colors.zinc.700"),
            a: {
              color: theme("colors.primary"),
              textDecoration: "underline",
            },
            h1: {
              fontFamily: theme("fontFamily.calistoga").join(", "),
              fontSize: theme("fontSize.3xl"),
              color: theme("colors.zinc.700"),
            },
            h2: {
              fontFamily: theme("fontFamily.calistoga").join(", "),
              fontSize: theme("fontSize.3xl"),
              color: theme("colors.zinc.700"),
            },
            h3: {
              fontFamily: theme("fontFamily.calistoga").join(", "),
              fontSize: theme("fontSize.2xl"),
              color: theme("colors.zinc.700"),
            },
            h4: {
              fontFamily: theme("fontFamily.calistoga").join(", "),
              fontSize: theme("fontSize.xl"),
              color: theme("colors.zinc.700"),
            },
            h5: {
              fontFamily: theme("fontFamily.calistoga").join(", "),
              fontSize: theme("fontSize.lg"),
              color: theme("colors.zinc.700"),
            },
            h6: {
              fontFamily: theme("fontFamily.calistoga").join(", "),
              color: theme("colors.zinc.700"),
            },
          },
        },
      }),
      // * OVERRIDING TAILWIND BASE CLASSES TO ADD UTOPIA.FYI CLAMP VALUES
      // Utopia.fyi config: MIN 480px, Font size 16px, Type scale 1.2 | MAX 1024px, Font size 24px, Type scale 1.25

      // * -------- Font Size Values --------
      // From: https://utopia.fyi/type/calculator?c=480,16,1.2,1024,24,1.25,10,2,&s=0.75|0.5|0.25,1.5|2|3|4|6|6|6,s-l&g=s,l,xl,12 */
      fontSize: {
        xs: "clamp(0.6944rem, 0.4601rem + 0.781vi, 0.96rem)",
        sm: "clamp(0.8333rem, 0.5098rem + 1.0784vi, 1.2rem)",
        base: "clamp(1rem, 0.5588rem + 1.4706vi, 1.5rem)",
        lg: "clamp(1.2rem, 0.6044rem + 1.9853vi, 1.875rem)",
        xl: "clamp(1.44rem, 0.6426rem + 2.6581vi, 2.3438rem)",
        "2xl": "clamp(1.728rem, 0.6677rem + 3.5344vi, 2.9297rem)",
        "3xl": "clamp(2.0736rem, 0.672rem + 4.6721vi, 3.6621rem)",
        "4xl": "clamp(2.4883rem, 0.6448rem + 6.145vi, 4.5776rem)",
        "5xl": "clamp(2.986rem, 0.5718rem + 8.0472vi, 5.722rem)",
        "6xl": "clamp(3.5832rem, 0.4337rem + 10.4982vi, 7.1526rem)",
        "7xl": "clamp(4.2998rem, 0.2049rem + 13.6496vi, 8.9407rem)",
        "8xl": "clamp(5.1598rem, -0.1485rem + 17.6944vi, 11.1759rem)",
        "9xl": "clamp(6.1917rem, -0.6713rem + 22.8768vi, 13.9698rem)",
      },

      // * -------- Spacing Size Values --------
      // From: https://utopia.fyi/space/calculator?c=480,16,1.2,1024,24,1.25,10,2,&s=0.75|0.5|0.25,1.25|1.5|1.75|2|2.25|2.5|2.75|3|3.5|4|5|6|7|8|9|10|11|12|13|14|15|16|18|20|24,s-l&g=s,l,xl,12
      spacing: {
        "1": "clamp(0.25rem, 0.1397rem + 0.3676vi, 0.375rem)",
        "2": "clamp(0.5rem, 0.2794rem + 0.7353vi, 0.75rem)",
        "3": "clamp(0.75rem, 0.4191rem + 1.1029vi, 1.125rem)",
        "4": "clamp(1rem, 0.5588rem + 1.4706vi, 1.5rem)",
        "5": "clamp(1.25rem, 0.6985rem + 1.8382vi, 1.875rem)",
        "6": "clamp(1.5rem, 0.8382rem + 2.2059vi, 2.25rem)",
        "7": "clamp(1.75rem, 0.9779rem + 2.5735vi, 2.625rem)",
        "8": "clamp(2rem, 1.1176rem + 2.9412vi, 3rem)",
        "9": "clamp(2.25rem, 1.2574rem + 3.3088vi, 3.375rem)",
        "10": "clamp(2.5rem, 1.3971rem + 3.6765vi, 3.75rem)",
        "11": "clamp(2.75rem, 1.5368rem + 4.0441vi, 4.125rem)",
        "12": "clamp(3rem, 1.6765rem + 4.4118vi, 4.5rem)",
        "14": "clamp(3.5rem, 1.9559rem + 5.1471vi, 5.25rem)",
        "16": "clamp(4rem, 2.2353rem + 5.8824vi, 6rem)",
        "20": "clamp(5rem, 2.7941rem + 7.3529vi, 7.5rem)",
        "24": "clamp(6rem, 3.3529rem + 8.8235vi, 9rem)",
        "28": "clamp(7rem, 3.9118rem + 10.2941vi, 10.5rem)",
        "32": "clamp(8rem, 4.4706rem + 11.7647vi, 12rem)",
        "36": "clamp(9rem, 5.0294rem + 13.2353vi, 13.5rem)",
        "40": "clamp(10rem, 5.5882rem + 14.7059vi, 15rem)",
        "44": "clamp(11rem, 6.1471rem + 16.1765vi, 16.5rem)",
        "48": "clamp(12rem, 6.7059rem + 17.6471vi, 18rem)",
        "52": "clamp(13rem, 7.2647rem + 19.1176vi, 19.5rem)",
        "56": "clamp(14rem, 7.8235rem + 20.5882vi, 21rem)",
        "60": "clamp(15rem, 8.3824rem + 22.0588vi, 22.5rem)",
        "64": "clamp(16rem, 8.9412rem + 23.5294vi, 24rem)",
        "72": "clamp(18rem, 10.0588rem + 26.4706vi, 27rem)",
        "80": "clamp(20rem, 11.1765rem + 29.4118vi, 30rem)",
        "96": "clamp(24rem, 13.4118rem + 35.2941vi, 36rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
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
