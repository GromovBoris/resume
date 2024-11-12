import React, { useState, useEffect } from "react";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import Footer from "./components/Footer/Footer";
import { LanguagesProvider } from "./components/LanguagesContext";
import "./App.scss";

const App: React.FC = () => {
  return (
    <LanguagesProvider>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </LanguagesProvider>
  );
};

export default App;
