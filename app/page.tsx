import React from 'react'; //next start, next dev
import "./globals.css";
import Card from './Card';
import Link from 'next/link';


const App: React.FC = () => {
  return (
    <div className="body">
      <h1 className = "header-font" > Choose Your Facial Hair</h1>
      <div className='card-container'>

        <Link href = "/Clean">
          <Card title ="Clean Shaven" description="This is the first card."/>
        </Link>

        <Link href = "/Tough">
          <Card title ="Tough Scruff" description="This is the first card." />
        </Link>

        <Link href = "/Lumber">
          <Card title ="Lumberjack" description="This is the first card." />
        </Link>
    </div>
    </div>
  );
};

export default App;