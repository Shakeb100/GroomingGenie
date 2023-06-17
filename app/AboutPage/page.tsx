import React from 'react'; //next start, next dev
import "../globals.css";
import Card from '../Card';
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';
import Navbar from '../nav'; 
import '../nav.css'; 

const jose = Josefin_Sans({ subsets: ['latin']})

const app: React.FC = () => {
  return (
    <div className="body">
      <div className={jose.className}>
      <Navbar />
          <div className="home-info">
            <h2>Use the "magic" of Grooming Genie's Dall-E Powered AI Beard Generator!</h2>
            <div className='center-content'>
    </div>
    </div>
    </div></div>
        );
    };
    
    export default app;