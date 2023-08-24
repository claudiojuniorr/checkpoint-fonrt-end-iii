import React, { useState } from 'react';
import { Card } from './Card';
import { CardList } from './CardList';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [cards, setCards] = useState([]);
  const [validationError, setValidationError] = useState('');

  const validateInputs = () => {
    if (!name.trim() || !color.trim()) {
      setValidationError('Nome e cor são campos obrigatórios.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleCardAdd = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      const newCard = { name, color };
      setCards([...cards, newCard]);
      setName('');
      setColor('');
    }
  };

  return (
    <div>
      <div className='title'>
        <h1>ADICIONAR NOVA COR</h1>
      </div>
      <form onSubmit={handleCardAdd}>
        <div className="input-container">
          <label className="label">Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-container">
          <label className="label">Cor:</label>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <button type="submit">Adicionar</button>
        <p>CORES FAVORITAS:</p>
      </form>
      <div>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        <CardList>
          {cards.map((card, index) => (
            <Card key={index} name={card.name} color={card.color} />
          ))}
        </CardList>
      </div>
    </div>
  );
}

export default App;