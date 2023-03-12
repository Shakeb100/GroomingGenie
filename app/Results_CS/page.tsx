import React from 'react'; //next start, next dev
import "../results.css";
import "../globals.css";
import ResultCard from "../ResultCard";
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';

const jose = Josefin_Sans({ subsets: ['latin']})

const App: React.FC = () => {
    return (
      <div className="body">
        <div className={jose.className}>
        <h1 className = "header-font" >What you need for a fresh face</h1>
   

      <ResultCard title ="Grow a lil Something" description="when you're just getting started in to the journey of facial hair" />
        </div>
        </div>
)}

export default App;