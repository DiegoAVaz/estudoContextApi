import Alunos from "./Alunos";
import { useState } from "react";
import UserProvider from "./contexts/users";

function App() {

  return (

    <UserProvider>
      <div className="App">
        <h1>Escola</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>

  );
}

export default App;
