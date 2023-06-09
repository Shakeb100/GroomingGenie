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
      <h1 className = "header-font" >Mountain Man Beard</h1>

      <div className='white-box'>
          <div className="text-container">
            <div className='info-font'>
            <p className='infohead'>Advice for a full and lucious beard</p>
            <ul>🪒 As your beard gets longer, it's important to keep it clean to avoid any skin irritation or infection. Wash your beard regularly with a mild <a href = "https://thebeardclub.com/products/beard-shampoo"> Shampoo. </a></ul>
            <ul>🪒 Just like with a shorter beard, growing a long beard takes time and patience. It may take several months before you see significant growth, so don't give up too soon.</ul>
            <ul>🪒 One way to help speed up the process is to apply a good quality <a href='https://thebeardclub.com/products/beard-growth-oil' >Beard Oil</a> that will promote growth and healthy hair.</ul>
            <ul>🪒 Don't use any old comb lying around your house. Your beard deserves better. Look for a <a href = "https://evanalexandergrooming.com/products/wooden-beard-comb-red-sandalwood?variant=12125823533146&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjw5dqgBhBNEiwA7PryaNHGEBh1Z1ITJodf1VU6vxnkGrWtnrOEzZucQXxD70v3_xYM_ZrkFxoCzoAQAvD_BwE">Comb</a>, with teeth as wide as a lumberjack's smile.</ul>
          </div>
          <div>
          <h2 className='title-contain'>Upload a photo of yourself on the right and mask the area around your mouth. Submit to see the magic!</h2>
        </div>
          </div>



        <div className='iframe-container'> 
          <iframe
            src="https://shakeb100-groominggenie-ai.hf.space"
            width="770"
            height="500"
          ></iframe>
        </div>
        
      </div>
      </div>



      </div>
)
}

export default App;