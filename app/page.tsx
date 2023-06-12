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
        <h1 className = "header-font">Grooming Genie</h1>
        <Link href= "/StartPage">
        <button>Get Started</button>
        </Link>
    </div>
    </div>

  );
};

export default app;