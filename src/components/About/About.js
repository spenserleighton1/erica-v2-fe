import React from 'react';
import './About.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
console.log(props.menuClass)
let menuOpen = props.menuClass ? 'scale about-container' : 'about-container'
  return (

    <Container fluid={true} className={menuOpen} id={props.data.acf_fc_layout}>
        <h1>About.</h1>
        <Row>
            <Col md={8}>
            <div className="about-text">
                { props.data.text }
            </div>
            </Col>
            <Col md={4}>
                <div className="about-image" style={{backgroundImage: `url(${ props.data.image.url })`}}>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default About;




