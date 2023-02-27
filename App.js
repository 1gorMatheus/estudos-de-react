import React, { createContext, useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [theme, setTheme] = useState("dark");
  function handletoggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }
  return (
    <>
      <Header theme={theme} onToggleTheme={handletoggleTheme}>
        <h1>oi</h1>
      </Header>

      <Post
        onToggleTheme={handletoggleTheme}
        theme={theme}
        likes={20}
        post={{
          tittle: "mudando a cor de fundo",
          subtittle: "mudando a cor de fundo com prop drilling",
        }}
      >
        <p>
          eu presico passar obrigatoriamente o theme para mudar a cor de fundo
          do botão?
        </p>
        <p>
          por exemplo se eu quero mudar a cor de fundo do botão do hearder eu
          precisaria do theme ?
        </p>
        <p>
          Sim, se você deseja mudar a cor de fundo do botão do header usando o
          theme, você precisa passar o theme como propriedade para o componente
          Button. Isso ocorre porque o tema contém as informações sobre a cor de
          fundo que você deseja usar e o componente Button usa essas informações
          para estilizar o botão. Sem o theme, o componente Button não sabe qual
          cor de fundo usar e, portanto, não poderá mudá-la.
        </p>
      </Post>
    </>
  );
}

export default App;
