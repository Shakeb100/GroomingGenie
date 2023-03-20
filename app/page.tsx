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
          <Card title ="Testing" description="face smoother than a baby's bottom"/>
        </Link>

        <Link href = "/Tough">
          <Card title ="Tough Scruff" description="for the ones that can proudly grow a little something" />
        </Link>

        <Link href = "/Lumber">
          <Card title ="Lumberjack" description="Santa Clause, lumberjacks, wizards..." />
        </Link>
        </div>
        </div>
    </div>

  );
};

export default App;