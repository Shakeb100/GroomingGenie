import React from 'react';
import "./results.css";


interface CardProps {
  title: string;
  description: string;
  onClick?: () => void; // Optional onClick function
}


const ResultCard: React.FC<CardProps> = ({ title, description, onClick }) => {
  const handleClick = () => {
    console.log(`Clicked ${title}`);
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="card" onClick={onClick}>
      <h2 className='font'>{title}</h2>
      <p className='font'>{description}</p>
    </div>
  );
};

export default ResultCard;