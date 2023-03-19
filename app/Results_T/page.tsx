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
      <h1 className = "header-font" >What you need for that first time beard</h1>
      </div>


      <div className='center'>
      <iframe
      src="https://shakeb100-stable-diffusion-inpainting.hf.space"
      frameBorder="0"
      width="800"
      height= "565"
    ></iframe>
      </div>



      </div>
)
}

export default App;