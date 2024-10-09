import React from "react";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import { LanguagesProvider } from "./components/LanguagesContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <LanguagesProvider>
      <div className="container">
        <Header />
        <Main />
      </div>
    </LanguagesProvider>
  );
};

export default App;
