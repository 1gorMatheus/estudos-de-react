import React, { createContext, useState } from "react";
import Header from "./Header";
import Post from "./Post";

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("dark");
  function handletoggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }
  return (
      <ThemeContext.Provider value={{theme, onToggleTheme: handletoggleTheme}}>
      <Header >
        <h1>oi</h1>
      </Header>

      <Post
        likes={20}
        post={{
          tittle: "mudando a cor de fundo",
          subtittle: "mudando a cor de fundo com prop drilling",
        }}
      >
        
      </Post>
    </ThemeContext.Provider>
  );
}

export default App;
