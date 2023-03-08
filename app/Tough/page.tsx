import React from "react";
import "../globals.css";
import Card from './TCard';
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';


const jose = Josefin_Sans({ subsets: ['latin']})

const App: React.FC = () => {
  return (
    <div className="body">
      <div className={jose.className}>
      <h1 className = "header-font" > Choose your goal</h1>

      <div className='card-container'>
      <Card title ="If it aint broke..." description="Keep that scruffy scratchy goodness"/>
      <Card title ="Fresh Start" description="Tired of the scuff? Shave it off" />
      <Card title ="Full Send" description="For those that want that fresh out of the woods, lumberjack looks" />
      
    </div>
    </div>
    </div>
  );
};

export default App;

