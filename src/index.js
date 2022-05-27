import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const colors = {
  brand: {
    900: "rgb(105, 211, 252" /* "", */,
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
