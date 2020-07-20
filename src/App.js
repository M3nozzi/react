import React from "react";

import "./styles.css";

function App() {
  function handleAddRepository() {
   
  }

  async function handleRemoveRepository(id) {
   
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
