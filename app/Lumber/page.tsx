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

      <Link href = "CS_Final"> 
      <Card title ="Fresh start" description="When you want to look a decade younger and shave it off"/>
      </Link>

      <Card title ="Mow the lawn" description="grooming your beautiful beard for a more manageable look" />



      <Card title ="Style it" description="for those that want to keep their facial folliage fresh and maintained" />


    
    </div>
    </div>
    </div>
  );
};

export default App;