import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import EventCard from "./EventCard"
// import imgForCard from '../assets/img/hero.jpg';
import axios from 'axios'

const LatestEvents = () => {
    const [latestEvents, setLatestEvents] = useState([]);
    useEffect(() => {
        const fetchLatestEvents = async () => {
            const {data} = await axios.get('/api/eventPage')
            setLatestEvents(data)
        }

        fetchLatestEvents();
    }, [])
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        const fetchAllEvents = async () => {
            const {data} = await axios.get('/api/allEvents')
            setAllEvents(data)
        }

        fetchAllEvents();
    }, [])
    console.log(latestEvents)
    console.log(allEvents)
    return (
        <section className="home-sections" style={{backgroundColor: "white"}}>
            <Container>
                    {latestEvents.map((eventHeader, index) => (
                        <div className="section-intro" key={index}>
                            <h1>{eventHeader.title}</h1>
                            <p className="body-small">{eventHeader.tagline}</p>
                        </div>
                    ))}
                <Row  className="g-4 d-flex justify-content-center" >
                    {allEvents.map((event, index) => (
                        <Col lg={2} key={index}>
                            <EventCard cardTitle={event.title} cardContent={event.date} cardImage={event.img} />
                        </Col>
                    ))}
                </Row>
                <div className="section-btn">
                    <Link to="/Events" className="btn btn-outline-fyp">View All Events</Link>
                </div>
            </Container>
        </section>
    )
}

export default LatestEvents
