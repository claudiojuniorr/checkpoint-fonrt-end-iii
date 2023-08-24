import React from 'react';

export function Card({ name, color }) {
  const cardStyle = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px',
    width: '590px',
    height: '258px',
  };

  return (
    <div className="card" style={cardStyle}>
      <strong className='font'>{name}</strong>
      <strong>{color}</strong>
    </div>
  );
}