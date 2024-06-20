/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fp: "Poppins, sans-serif;",
      },
      fontSize: {
        200: "200px",
        52: "52px",
        42: "42px",
        28: "28px",
        20: "20px",
      },
      colors: {
        primaryLavender: "#7456FF",
        secondaryLavender: "#8368FF",
        thirdLavender: "#A693FF",
        primaryBlack: "#0C0C0C",
        secondaryBlack: "#0F0F0F",
        thidrBlack: "#323131",
        primaryGrey: "#707070",
        secondaryGrey: "#999999",
        carou: "#1B182A",
      },
      borderRadius: {
        rounded5: "5px",
        rounded10: "10px",
        30: "30px",
      },
      borderWidth: {
        0: "0px",
      },
      maxWidth: {
        mw55: "55ch",
        40: "40ch",
        mw29: "29ch",
      },
      blur: {
        2: "2px",
        5: "5px",
      },
      translate: {
        3.3: "3.3rem",
      },
      gap: {
        4.5: "4.5rem",
      },
      margin: {
        5.5: "5.5rem",
      },
      opacity: {
        20: "20%",
      },
      screens: {
        1099: "1099px",
        925: "925px",
        925: "925px",
        677: "677px",
        479: "479px",
        425: "425px",
        320: "320px",
      },
    },
  },

  plugins: [],
};
