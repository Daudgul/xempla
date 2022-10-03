import type { ComponentStyleConfig } from "@chakra-ui/theme";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "5",
    fontWeight: "500",
    px: "6px",
    py: "5px",
  },
  variants: {
    solid: (props: StyleFunctionProps) => ({
      bg: "#327de3",
      color: "#ffffff",
      _hover: {
        bg: "#3a6b9b",
      },
      _active: {
        bg: "blue.900",
        color: "white",
      },
      _disabled: {
        bg: "gray.500",
        color: "white",
      },
      _focus: {
        bg: "blue.500",
        color: "white",
      },
    }),

    defaultProps: {
      colorScheme: "blue",
      variant: "solid",
    },
  },
};

export default Button;
