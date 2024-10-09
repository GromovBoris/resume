import React, { createContext, useContext, useState } from "react";

interface LanguagesContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguagesContext = createContext<LanguagesContextType | undefined>(
  undefined
);

export const LanguagesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("Ru");

  return (
    <LanguagesContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguagesContext.Provider>
  );
};

export const useLanguages = () => {
  const context = useContext(LanguagesContext);
  if (!context) {
    throw new Error("useLanguages must be used within a LanguagesProvider");
  }
  return context;
};
