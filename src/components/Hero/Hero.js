import React from 'react';
import './Hero.scss';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Hero(props) {
  
  return ( 
    <div className="hero" style={{backgroundImage: `url(${ props.image })`}}>
      <div className="hero-overlay">
        <h1>{ props.title }</h1>
        <p>{ props.description }</p>
      </div>
    </div>
  );
}

export default Hero;
