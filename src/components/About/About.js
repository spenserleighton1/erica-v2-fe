import React from 'react';
import './About.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
    console.log('props',props.data.text)

  return (

    <Container fluid={true} className="about-container">
        <h1>About.</h1>
        <Row>
            <Col md={8}>
                { props.data.text }
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




