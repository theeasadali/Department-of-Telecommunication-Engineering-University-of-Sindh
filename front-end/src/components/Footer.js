import {Container, Row, Col} from 'react-bootstrap';
import {FaEnvelope, FaPhoneAlt, FaFax} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row  className='pt-3 d-flex align-items-center'>
                    <Col>
                        <p className="body-small">&copy; 2022. Department of Telecommunication Engineering, Faculty of Engineering and Technology, University of Sindh, Jamshoro Pakistan</p>
                        <p><FaEnvelope /> info@iict.usindh.edu.pk</p>
                    </Col>
                    <Col>
                        <p><FaPhoneAlt /> +92-(0)22-9213181-90</p>
                        <p><FaFax /> +92-(0)22-9213174</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
