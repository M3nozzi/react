import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `New Repository ${Date.now()}`,
      url: 'http://github.com/M3nozzi/reactjs',
      techs: ['Node JS', 'React JS']
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
   
  }

  async function handleRemoveRepository(id) {
    const repositoryIndex = repositories.findIndex(repository => repository.id === id);
    
    if (repositoryIndex >= 0) {
      
      const newRepositories = [...repositories];

      newRepositories.splice(repositoryIndex, 1);
      
      setRepositories(newRepositories)

      await api.delete(`repositories/${id}`)
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
       
        {repositories.map(repository => <li key={repository.id}>{repository.title} <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button> </li>)}
    
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
