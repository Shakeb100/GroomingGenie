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
            <p className='infohead'>Style it up!</p>
            <ul>🪒 There are hundreds of posisble styles you can try out on your lucious mane, always be open to experiment</ul>
            <ul>🪒 Different beards look better on different face shapes. Find your face shape and figure out what works best for you!</ul>
            <ul>🪒 Ask you local barbershop for what might work best for you, one on one professional advice always works best!</ul>
            <ul>🪒 Don't use any old comb lying around your house. Your beard deserves better. Look for a <a href = "https://evanalexandergrooming.com/products/wooden-beard-comb-red-sandalwood?variant=12125823533146&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjw5dqgBhBNEiwA7PryaNHGEBh1Z1ITJodf1VU6vxnkGrWtnrOEzZucQXxD70v3_xYM_ZrkFxoCzoAQAvD_BwE">Comb</a>, with teeth as wide as a lumberjack's smile.</ul>
          </div>
          <div>
          <h2 className='title-contain'>Upload a photo of yourself on the right and mask the area around your mouth. Submit to see the magic! Make sure to mask in the style that you want!</h2>
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