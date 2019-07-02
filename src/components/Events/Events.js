import React, { Component } from 'react';
import './Events.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           past: [],
           upcoming: [],
           display: 'upcoming'
        };

    }
    componentDidMount() {
        let { events } = this.props.data;
        this.sortEvents(events)
    }

    sortEvents = (events) => {
        let upcoming = []
        let past = []

        events.forEach(event => {
            if (event.upcomingpast === 'upcoming') {
                upcoming.push(event)
            } else {
                past.push(event)
            }
        });

        this.setState({
            upcoming,
            past
        })
    }

    displayEvents = (events) => {
        return events.map((event) => {
            return (
                <Col sm={6} md={4} xl={3}>
                    <div className="event">
                        <a href={ event.link }>
                            <div className="image" style={{ backgroundImage: `url(${ event.image })`}}></div>
                            <div className="event-divider"></div>
                            <p className="name">{ event.event_name }</p>
                            <p className="time">{ event.event_date} <span>|</span> {event.event_time}</p>
                            <div className="event-divider"></div>
                            <p className="desc">{ event.description }</p>
                        </a>
                    </div>
                </Col>
            )
        })
    }

    handleClick = (toToggle) => {
        toToggle === 'u' ? this.setState({ display: 'upcoming'}) : this.setState({ display: 'past'})
    }
    
    render() {
        let toDisplay = this.state.display === 'upcoming' ? this.displayEvents(this.state.upcoming) : this.displayEvents(this.state.past) 
        let buttonClassU = this.state.display === 'upcoming' ? 'active' : '';
        let buttonClassP = this.state.display === 'past' ? 'active' : '';
        let menuOpen = this.props.menuClass ? 'scale events-container' : 'events-container'
        return (
            <Container fluid={true} className={ menuOpen } id={this.props.data.acf_fc_layout}>
                <Row className="events-nav">
                    <Col sm={6}>
                        <h1>Events.</h1>
                    </Col>
                    <Col sm={6} className="nav">
                        <button className={ buttonClassU } onClick={ () => this.handleClick('u') }>Upcoming</button>
                        <button className={ buttonClassP } onClick={ () => this.handleClick('p') }>Past</button>
                    </Col>

                </Row>
                <Row>
                    { toDisplay }
                </Row>
            </Container>
        );
    }
}

export default Events;




