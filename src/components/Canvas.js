// src/components/Canvas.js
import React, { useState } from 'react';
import Card from './Card';
import { ArcherContainer, ArcherElement } from 'react-archer';

const Canvas = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: 'This is some dummy text that is quite long and will be truncated.',
      x: 100,
      y: 100,
      connections: [],
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="w-full h-screen overflow-scroll bg-gray-100 relative">
      <button
        onClick={addCard}
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Card
      </button>

      <ArcherContainer strokeColor="red">
        {cards.map((card) => (
          <ArcherElement
            id={`card-${card.id}`}
            key={card.id}
            relations={card.connections.map((conn) => ({
              targetId: `card-${conn}`,
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
            }))}
          >
            <Card card={card} />
          </ArcherElement>
        ))}
      </ArcherContainer>
    </div>
  );
};

export default Canvas;
