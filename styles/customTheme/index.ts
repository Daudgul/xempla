import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";
import Button from "./button";

const breakpoints = {
  sm: "580px",
  md: "860px",
  lg: "1090px",
  xl: "1260px",
  "2xl": "1430px",
};
const customTheme = extendTheme(
  { breakpoints },
  {
    components: {
      Button,
      Input: {
        defaultProps: {
          focusBorderColor: "blue.600",
        },
      },
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        "html, body": {
          letterSpacing: "0.0125em",
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-track": {
            width: "8px",
            background: "#f6f6f6",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#a8a8a8",
            borderRadius: "20px",
          },
        },
      }),
    },
  }
);

export default customTheme;
