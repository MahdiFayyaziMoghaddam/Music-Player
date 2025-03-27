import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastProvider } from "./contexts/ToastContext";
import { StateProvider } from "./contexts/StateContext";
import { AudioProvider } from "./contexts/AudioContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ChakraProvider>
      <BrowserRouter>
        <ToastProvider>
          <StateProvider>
            <AudioProvider>
              <App />
            </AudioProvider>
          </StateProvider>
        </ToastProvider>
      </BrowserRouter>
    </ChakraProvider>
  </>
);
