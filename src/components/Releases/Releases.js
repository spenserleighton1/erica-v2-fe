import React from 'react';
import './Releases.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Releases(props) {

    const displayReleases = (release) => {
        console.log('release,', release.data.additional_links)

        let rowReverse = (release.index % 2) === 0 ? 'row-reverse' : '';

        let links = release.data.additional_links.map((link) => {
            console.log(link)
            return <a href={ link.link_url }>{ link.link_text }</a>
        })

        return  <Container fluid={true} className="releases-container">
                    <Row className={ rowReverse }>
                        <Col md={4} sm={12} className="release-left">
                            <div className="release-image-container">
                                <a href={ release.data.publisher_link }>
                                    <div className="image" style={{backgroundImage: `url(${ release.data.release_image.url })`}}>
                                        <div className="overlay">
                                            <h1>{ release.data.publisher_title }</h1>
                                            <div className="overlay-divider"></div>
                                            { links }
                                        </div>
                                    </div>
                                </a>
                                <p>{ release.data.published_date }</p>
                            </div>
                    
                        </Col>
                        <Col md={8} sm={12} className="release-right">
                            <div className="release-detail">
                                <h3>{ release.data.release_title }</h3>
                                <div className="detail-divider"></div>
                                <p>{ release.data.release_description }</p>    
                                <div className="release-links">{ links }</div>    
                                <div className="release-reviews-container">

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
    }

  return (
    <div className="releases">
        { displayReleases(props) }
    </div>
  );
}

export default Releases;




