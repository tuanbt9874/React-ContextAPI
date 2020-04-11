import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      {/* USe context type for accessing data from context */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />  
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
