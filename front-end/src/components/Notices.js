import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Notices = () => {
    return (
        <section className="home-section py-5 notices" style={{color: "white"}}>
            <Container>
                <div className="section-intro">
                    <h1>Notices</h1>
                </div>
                <Row>
                    <Col className='text-center'>
                        <p className="body-large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id expedita, doloremque excepturi impedit provident delectus.</p>
                        <small>&mdash; 2022 &ndash; 08 &ndash; 09</small>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Notices
