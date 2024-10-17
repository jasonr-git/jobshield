import { css } from "styled-components";

export const darkTheme = {
  bg: css`linear-gradient(45deg, red, blue)`,
    bgLight: "#1C1E27",
    primary: "#854CE6",
    text_primary: "#F2F3F4",
    text_dark:"#ffffff",
    text_secondary: "#b1b2b3",
    card: "#171721",
    card_light: "linear-gradient(45deg, #ff0000, #0000ff)", // Correctly as string
    button: "#854CE6",
    white: "#FFFFFF",
    black: "#000000",
  };
  
  export const lightTheme = {
    bg: "#FFFFFF",
    bgLight: "#f0f0f0",
    primary: "#be1adb",
    text_primary: "#111111",
    text_secondary: "#48494a",
    card: "#FFFFFF",
    button: "#5c5b5b",
  };
  