import React from "react";
import "../globals.css";
import Card from './LCard';
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';

const jose = Josefin_Sans({ subsets: ['latin']})


const App: React.FC = () => {
  return (
    <div className="body">
      <div className={jose.className}>
      <h1 className = "header-font" >Choose your goal</h1>
      <div className='card-container'>
      <Card title ="Fresh start" description="When you wanna start back from Lvl 1; clean shaven"/>
      <Card title ="Mow the lawn" description="Trimming the lawn for a shorter look" />
      <Card title ="Style it" description="For those that want to keep their facial folliage fresh and maintained" />
    </div>
    </div>
    </div>
  );
};

export default App;