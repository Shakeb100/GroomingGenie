import React from 'react'; //next start, next dev
import "./globals.css";
import Card from './Card';
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';

const jose = Josefin_Sans({ subsets: ['latin']})

const app: React.FC = () => {
  return (
    <div className="body">
        <div className={jose.className}>
        <h1 className = "header-font">Grooming Genie🧞</h1>
        <div className="center-content">
        <h2>Use the "magic" of Grooming Genie's Dall-E pwered AI beard Generator!</h2>
        <Link href= "/FirstPage">
          <button className='button-80'>Get Started</button>
        </Link>
        </div>
    </div>
    </div>

  );
};

export default app;