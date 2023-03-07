import React from "react";
import "../globals.css";
import Card from './TCard';


const App: React.FC = () => {
  return (
    <div className="body">
      <h1 className = "header-font" > ToughScruff</h1>
      <div className='card-container'>
      <Card title ="advice 1" description="This is the first card."/>
      <Card title ="advice 2" description="This is the first card." />
      <Card title ="advice 3" description="This is the first card." />
    </div>
    </div>
  );
};

export default App;