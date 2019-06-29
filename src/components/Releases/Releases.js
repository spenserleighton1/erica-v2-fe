import React, { Component } from 'react';
import './Releases.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";

 
class Releases extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            slides: []
        };
    }

    componentDidMount = () => {
        this.setState({ slides: this.generateSlides(this.props.data.release)})

    }

    generateLinks = (links) => {
        return links.map((link) => {
            return <a href={ link.link_url }>{ link.link_text }</a>
        })
    } 

    generateSlides = (slides) => {
        return slides.map((release, index) => {
            let links = this.generateLinks(release.additional_links)
            return (
                <Row key={ index } className="test-me">
                    <Col md={4} sm={12}>
                      <div className="release-image-container">
                            <a href={ release.publisher_link }>
                                <div className="image" style={{backgroundImage: `url(${ release.image.url })`}}>
                                    <div className="overlay">
                                        <h1>{ release.publisher_title }</h1>
                                        <div className="overlay-divider"></div>
                                        { links }
                                    </div>
                                </div>
                            </a>
                            <p>{ release.published_date }</p>
                        </div>
                    </Col>
                    <Col md={8} sm={12}>
                    <div className="release-detail">
                        <h3>{ release.title }</h3>
                        <div className="detail-divider"></div>
                        <div className="release-links">{ links }</div>    
                        <p>{ release.description }</p>    
                        <div className="release-reviews-container">

                        </div>
                    </div>
                    </Col>
                </Row>
            )
        });
    }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoPlay: true,

    };
    return (
        <Container fluid={true} className="releases-container">
            <h1 className="fick">Releases.</h1>
            <Slider {...settings}>
                {this.state.slides}
            </Slider>
        </Container>
    );
  }
}

export default Releases;




