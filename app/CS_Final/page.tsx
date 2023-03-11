import React from 'react'; //next start, next dev
import "../globals.css";
import Link from 'next/link';
import {Josefin_Sans} from 'next/font/google'
import Head from 'next/head';

const jose = Josefin_Sans({ subsets: ['latin']})

const App: React.FC = () => {
    return (
      <div className="body">
        <div className={jose.className}>
        <h1 className = "header-font" > Clean Shaven Results</h1>
        </div>
        </div>
)}

export default App;