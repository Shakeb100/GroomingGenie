import React from 'react'; //next start, next dev
import "./globals.css";
import Card from './Card';
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';

const jose = Josefin_Sans({ subsets: ['latin']})

const App: React.FC = () => {
  return (
    <div className="body">
        <div className={jose.className}>
      <h1 className = "header-font"> Your Current Facial Hair</h1>
      <div className='card-container'>

        <Link href = "/Clean">
          <Card title ="Clean Shaven" description="Baby's Bottom"/>
        </Link>

        <Link href = "/Tough">
          <Card title ="Tough Scruff" description="Rough and Rugged" />
        </Link>

        <Link href = "/Lumber">
          <Card title ="Lumberjack" description="Manly Man" />
        </Link>
        </div>
        </div>
    </div>

  );
};

export default App;