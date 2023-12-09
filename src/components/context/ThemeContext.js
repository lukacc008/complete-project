import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const TemaPrava = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("darkTheme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem("darkTheme", JSON.stringify(newTheme));
  };

  const theme = {
    darkTheme,
    toggleTheme,
  };
  // console.log('darkTheme', darkTheme);
  // console.log('togggleTheme', toggleTheme);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
