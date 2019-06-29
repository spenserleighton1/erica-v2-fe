import React from 'react';
import './About.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {

  return (

    <Container fluid={true} className="about-container">
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




