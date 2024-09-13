import React from 'react';
import './VerticalNavbar.css';
import meditation from '../../assets/meditation_logo.png' ;
import swimming from '../../assets/swimming_logo.png' ;
import biking from '../../assets/biking_logo.png' ;
import dumbbell from '../../assets/dumbbell_logo.png' ;

const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <img src={meditation} alt="Meditation Logo" className="logo" />
      <img src={swimming} alt="Swimming Logo" className="logo" />
      <img src={biking} alt="Biking Logo" className="logo" />
      <img src={dumbbell} alt="Dumbell Logo" className="logo" />
    </div>
  );
};

export default VerticalNavbar;
