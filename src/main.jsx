import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GithubProvider from "./context/gitprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </StrictMode>,
);