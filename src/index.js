import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { LangProvider } from "./context/Context";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <LangProvider>
      <App />
    </LangProvider>
  </HashRouter>
);
