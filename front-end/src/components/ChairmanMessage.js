import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import chairmanImage from '../assets/img/chairman.jpg'

const ChairmanMessage = () => {
    return (
        <section className="home-sections">
            <Container>
                <div className="section-intro"><h1>Chairman's Message</h1></div>
                <Row  className="d-flex align-items-center" >
                    <Col className="text-center">
                        <img className='large-image' src={chairmanImage} alt="Chairman Department of Telecommunication Engineering, FET" />
                    </Col>
                    <Col>
                        <h2>Greetings</h2>
                        <p className=".body-small">To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices.Faculty of Engineering and Technology is composed of an Institute and six departments: Prof. A. H. S. Bukhari Institute of Information and Communication Technology, Department of Electronics Engineering, Department of Telecommunication Engineering, Department of Information Technology, Department of Software Engineering, Department of Telemedicine and e-Health and Department of Industrial Electronics Engineering. A. H. S Bukhari Institute of Information and Communication Technology is an independent post-graduate institute offering MS/MPhil programs in disciplines of Electronics, Telecommunications, Information Technology and Software Engineering, and PhD degree program in Information Technology. Currently, over 300 students are enrolled in all MS/ MPhil and PhD programs.</p>
                        <Link to="/Chairman-Message" className="btn btn-outline-fyp">Read More</Link>

                        <div className="chairmanDesignation py-5">
                            <h4>Prof Dr. Khalil-Ur-Rehman Khoumbati</h4>
                            <p>Incharge Chairman Department of Telecommunication Engineering</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ChairmanMessage
