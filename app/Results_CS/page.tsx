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
        <h1 className = "header-font" >First Time Beard</h1>

        <div className='white-box'>
            <div className="text-container">
              <div className='info-font'>
              <p className='infohead'>Advice to get you started</p>
              <p> Be patient: Growing a beard takes time, and it may take several weeks before you see any significant growth. Don't give up too soon and give your beard time to grow.</p>
              <p>Shape it up: As your beard grows, consider trimming and shaping it to keep it looking neat and well-groomed. You can do this yourself or go to a barber or stylist for professional help.</p>
              <p>Beard Growth Oil: One way to help speed up the process is to apply a good qulity <a href='https://thebeardclub.com/products/beard-growth-oil' >beard oil</a> that will promote growth and healthy hair. Look below for some good ones!</p>
              <p>Embrace the itch: When your beard is first growing, you may experience some itchiness. This is normal and will subside as your beard grows longer. Using beard oils and moisturizers well help reduce this. Check out this face moisturizer from <a href="https://www.harrys.com/en/us/products/daily-face-lotion">HARRY'S</a>!</p>
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