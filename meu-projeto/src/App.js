import React from 'react';
import InfoCard from './components/InfoCard';
import HobbyList from './components/HobbyList';
import './style.css'; // Importando o arquivo CSS

const App = () => {
  const hobbies = ['Ler', 'Escrever', 'Caminhar', 'Cozinhar'];

  return (
    <div className="App">
      <InfoCard title="Título do Cartão" description="Esta é a descrição do cartão." />
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

export default App;