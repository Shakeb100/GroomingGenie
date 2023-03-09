import React from "react";
import "../globals.css";
import Card from './CCard';
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
      <Card title ="If it aint broke..." description="for those that wanna keep their beautiful baby face"/>
      <Card title ="Grow a lil Something" description="when you're just getting started in to the journey of facial hair" />
      <Card title ="Full Send" description="for those who want to commit to growing that lucious beard" />
    </div>
    </div>
    </div>
  );
};

export default App;