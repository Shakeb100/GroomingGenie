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
      <head>Grooming Genie</head>
      <div className={jose.className}>
      <h1 className = "header-font" >Choose your goal</h1>
      <div className='card-container'>

      <Link href = "Results_CS"> 
      <Card title ="Fresh start" description="when you want to look a decade younger and shave it off"/>
      </Link>

      <Link href= "Results_T">
      <Card title ="Trim it up" description="grooming your beautiful beard for a more manageable look" />
      </Link>

      <Link href = "Result_Style">
      <Card title ="Style it" description="for those that want to keep their facial folliage fresh and maintained" />
      </Link>

    
    </div>
    </div>
    </div>
  );
};

export default App;