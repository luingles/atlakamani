import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/surfing3.mp4' autoPlay loop muted />
      <h1>UNFORGETTABLE</h1>
      <p>Do more think less.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
