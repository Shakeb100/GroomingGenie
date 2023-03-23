import React from 'react';
import "./Tcard.css";


interface CardProps {
  title: string;
  description: string;
  onClick?: () => void; // Optional onClick function
}


const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked ${title}`);
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="card clink" onClick={onClick}>
      <h2 className='font'>{title}</h2>
      <p className='font'>{description}</p>
    </div>
  );
};

export default Card;