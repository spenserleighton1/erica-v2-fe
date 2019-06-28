import React from 'react';
import './Publications.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Publications(props) {

    const displaySinglePublication = (publication) => {
        // publisher_name: "Soft cartel"
        // publisher_url: "https://google.com"
        // title: "title"
        // year: "2068"

        return publication.map(pub => {
            return <div className="publication-detail">
                <a href={pub.publisher_url}>{pub.title}</a>
                <a className="pub-link" href={pub.publisher_url}>{pub.publisher_name} <span>|</span> {pub.year}</a>
                
            </div>
        })
    }

    const displayPublications = (publication) => {
        return publication.data.genre.map(pub => {
            console.log(pub)
            return <Col md={6} sm={12}>
                    <h2>{ pub.genre_title }</h2>
                    <div className="publication">
                        <div>
                            { displaySinglePublication(pub.publication) }
                        </div>
                    </div>
                </Col>
        })
        


    }

  return (

    <Container fluid={true} className="publications-container">
        <h1>Publications.</h1>
        <Row>
            {displayPublications(props)}
        </Row>
    </Container>
  );
}

export default Publications;



