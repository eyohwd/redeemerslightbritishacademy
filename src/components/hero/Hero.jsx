import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For A better World</h1>
        <p>Our cutting-edge curriculum is designed to enpower
            student with the knowledge, skill, and experience needed to excel
            in the dynamic field of eduction.
        </p>
        <button className='btn' style={{fontWeight:'bold'}}>Explore more &rarr;</button>
      </div>
    </div>
  );
}

export default Hero;
