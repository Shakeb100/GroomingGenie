import React from 'react';
import "./card.css";


interface CardProps {
  title: string;
  description: string;
  onClick?: () => void; // Optional onClick function
}


const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2 className='font'>{title}</h2>
      <p className='font'>{description}</p>
    </div>
  );
};

export default Card;