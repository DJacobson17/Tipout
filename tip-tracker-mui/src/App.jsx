import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Input, Output } from "@mui/icons-material";
import { TipoutProvider } from "./assets/components/tipoutContext";
import InputField from "./assets/components/inputField";
import Header from "./assets/components/header";
import OutputField from "./assets/components/outputField";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TipoutProvider>
          <InputField />
          <OutputField />
        </TipoutProvider>
      </main>
    </div>
  );
}
