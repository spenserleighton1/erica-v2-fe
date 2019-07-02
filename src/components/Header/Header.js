import React from 'react';
import './Header.scss';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Header(props) {
  console.log(props)
  return (
    <div className="header">
      <button onClick={ () => props.toggleMenu() }>Open</button>
    </div>
  );
}

export default Header;
