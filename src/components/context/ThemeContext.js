import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const TemaPrava = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
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