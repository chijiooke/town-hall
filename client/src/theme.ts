import { createTheme } from "@mui/material/styles";

import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material/styles/createPalette";

// declare module '@mui/material/styles/createPalette' {
//   interface Palette extends MuiPallete {
//     neutralShade: {main: string};
//   }

//   interface PaletteOptions extends MuiPaletteOptions {
//     neutralShade?: {main: string};
//   }
// }

export const theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    primary: {
      light: "#E9E9E9",
      main: "#b8b8b8",
      dark: "#6b6b6b",
      contrastText: "#666",
    },
    secondary: {
      light: "#FA8194",
      main: "#F8425F",
      dark: "#CA0726",
      contrastText: "#FFFFFF",
    },
    info: {
      light: "#74CAFF",
      main: "#1890FF",
      dark: "#0C53B7",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#AAF27F",
      main: "#54D62C",
      dark: "#229A16",
      contrastText: "#212B36",
    },
    warning: {
      light: "#FFE16A",
      main: "#FFC107",
      dark: "#B78103",
      contrastText: "#212B36",
    },
    error: {
      light: "#FFA48D",
      main: "#FF4842",
      dark: "#B72136",
      contrastText: "#212B36",
    },
    grey: {
      50: "#fafafa",
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
    },
    action: {
      active: "#637381",
      hover: "#919EAB14",
      selected: "#919EAB29",
      disabled: "#919EAB",
      disabledBackground: "#919EAB3D",
      focus: "#919EAB3D",
    },
    text: {
      primary: "#212B36",
      secondary: "#637381",
      disabled: "#919EAB",
    },
    divider: "#ccc",
  },
  
});
