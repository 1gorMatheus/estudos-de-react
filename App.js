import React, { createContext, useState } from "react";
import Header from "./Header";
import Post from "./Post";
function App() {
const [theme, setTheme] = useState('dark')
function handletoggleTheme(){
  setTheme((prevState)=>(
    prevState === 'dark'? 'light' : 'dark'
      ))
}

  return (
    <>
      <Header>
        <h1>oi</h1>
      </Header>

      <Post
        onToggleTheme={handletoggleTheme}
        theme={theme}
        likes={20}
        post={{
          tittle: "Título da Notícia 01",
          subtittle: "Subtítulo da Notícia 01",
        }}
      />
    </>
  );
}

export default App;
