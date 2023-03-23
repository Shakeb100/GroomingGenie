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
      <h1 className = "header-font" >Fresh Face</h1>

      <div className='white-box'>
          <div className="clean-container">
            <div className='info-font'>
            <p className='infohead'>Advice for that baby face</p>
            <ul> 🪒A good quality razor is essential. Choose a razor that works best for your skin type. <a href = "https://www.harrys.com/en/us/products/the-truman">HARRY'S Razors</a> are designed with precision-engineered blades and a flexible hinge for a comfortable, close shave.</ul>
            <ul>🪒 Once you've finished shaving, rinse your skin with cold water and apply <a href = "https://www.harrys.com/en/us/products/post-shave-balm">HARRY'S post-shave balm </a>, designed to help calm and soothe your skin after shaving.</ul>
            <ul>🪒 Make sure to lather up with shaving cream or you might end up looking like you just dipped your face in a vat of hot lava. Trust us, it's not a good look. Use HARRY'S <a href='https://www.harrys.com/en/us/products/shave-cream'> Shave Cream</a> to make sure that doesn't happen.</ul>
            <ul>🪒 Just like Batman needs Robin, your razor needs moisturizer. They're the dynamic duo that will keep your face looking and feeling its best. Check out this face <a href="https://www.harrys.com/en/us/products/daily-face-lotion">moisturizer</a> from HARRY'S!</ul>
            </div>
            <div className='image-column'>
              

            </div>
          </div>
          </div>
        
      </div>
      </div>

)
}

export default App;

