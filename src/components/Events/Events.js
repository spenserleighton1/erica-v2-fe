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
    // console.log(props.data.events)
    // description: "this event was a cool event i love going to fun events."
    // event_date: "12-12-12"
    // event_name: "Test Event"
    // event_time: "7:00pm"
    // image: "http://localhost:8080/wp-content/uploads/2019/06/a.png"
    // link: "https://google.com"
    // upcomingpast: "past"

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
        return (
            <Container fluid={true} className="events-container">
                <Row className="events-nav">
                    <Col sm={6}>
                        <h1>Events.</h1>
                    </Col>
                    <Col sm={6} className="nav">
                        <button onClick={ () => this.handleClick('u') }>Upcoming</button>
                        <span>|</span>
                        <button onClick={ () => this.handleClick('p') }>Past</button>
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




