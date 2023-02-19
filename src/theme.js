import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#f2d9f2",
    200: "#e5b3e5",
    300: "#d98cd9",
    400: "#cc66cc",
    500: "#bf40bf",
    600: "#993399",
    700: "#732673",
    800: "#4c1a4c",
    900: "#260d26",
  },

  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },

  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      main: shades.neutral[500],
      light: shades.neutral[100],
      dark: shades.neutral[700],
    },
  },

  typography: {
    body1: {
      fontFamily: ["Fauna One", "sans-serif"].join(","),
      fontSize: "14px",
      color: "black",
      "@media (min-width:768px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontFamily: ["Fauna One", "sans-serif"].join(","),
      fontSize: "12px",
      color: "black",
      "@media (min-width:768px)": {
        fontSize: "14px",
      },
    },

    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "40px",
      color: "black",
      "@media (min-width:768px)": {
        fontSize: "48px",
      },
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "30px",
      color: "black",
      "@media (min-width:768px)": {
        fontSize: "36px",
      },
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "24px",
      color: "black",
      "@media (min-width:768px)": {
        fontSize: "28px",
      },
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "18px",
      color: "black",

      "@media (min-width:768px)": {
        fontSize: "20px",
      },
    },
    h5: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "16px",
      color: "black",

      "@media (min-width:768px)": {
        fontSize: "18px",
      },
    },
    h6: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "14px",
      color: "black",
      "@media (min-width:768px)": {
        fontSize: "16px",
      },
    },

    subtitle1: {
      fontFamily: ["Fauna One", "sans-serif"].join(","),
      fontSize: "12px",
      color: "slategrey",
      "@media (min-width:768px)": {
        fontSize: "14px",
      },
    },
    subtitle2: {
      fontFamily: ["Fauna One", "sans-serif"].join(","),
      fontSize: "10px",
      color: "slategrey",
      "@media (min-width:768px)": {
        fontSize: "12px",
      },
    },
  },
});
