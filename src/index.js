import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <Suspense fallback={<div>Loading... </div>}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Suspense>,

  document.getElementById("root")
);
