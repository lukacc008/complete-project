import { Route, Routes, Navigate } from "react-router-dom";
import  Gallery  from "./components/pages/gallery";
import  About  from "./components/pages/about";
import  Store  from "./components/pages/store";
import  Contact  from "./components/pages/contact";
import Users from "./components/pages/users";
import  Home  from "./components/pages/home";
import  NotFound  from "./components/pages/notfound";

import { TemaPrava, useTheme } from "./components/context/ThemeContext";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  return (
    <TemaPrava>
      <AppContent />
    </TemaPrava>
  );
}

function AppContent() {
  const { darkTheme, toggleTheme } = useTheme();

  const themee = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
    },
    // toggleTheme: toggleTheme
  });

  return (
    <ThemeProvider theme={themee}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
