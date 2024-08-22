// import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {Link} from 'react-router-dom'
import logoBadge from '../assets/img/logo-badge.png'
// import axios from 'axios'

const About = () => {
    const styles = {backgroundColor: "#001380", color: "white"};
    return (
        <section className="home-sections" style={styles}>
            <Container>
                <div className="section-intro"><h1>About</h1></div>
                <Row  className="d-flex align-items-center" >
                    <Col>
                    <p className="body-small">To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices.Faculty of Engineering and Technology is composed of an Institute and six departments: Prof. A. H. S. Bukhari Institute of Information and Communication Technology, Department of Electronics Engineering, Department of Telecommunication Engineering, Department of Information Technology, Department of Software Engineering, Department of Telemedicine and e-Health and Department of Industrial Electronics Engineering. A. H. S Bukhari Institute of Information and Communication Technology is an independent post-graduate institute offering MS/MPhil programs in disciplines of Electronics, Telecommunications, Information Technology and Software Engineering, and PhD degree program in Information Technology. Currently, over 300 students are enrolled in all MS/ MPhil and PhD programs.</p>
                    <Link to="/About" className="btn btn-outline-fyp">Read More</Link>
                    </Col>
                    <Col className="text-center">
                        <img className='large-image' src={logoBadge} alt="Logo Badge" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
