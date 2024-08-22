import { Col, Container, Offcanvas, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const NavOverlay = ({...props}) => {
    return (
        <>
            <Offcanvas show={props.show} onHide={props.closeNav} placement={props.placement} className="navOverlay">
                <Container>
                    <Offcanvas.Header closeButton style={{padding: "2rem 0"}}>
                        <input type="text" className='searchBar' placeholder='Search Here'/>
                    </Offcanvas.Header>
                    <Row>
                        <Col lg={3} className='py-3'>
                            <h4>About</h4>
                            <p className='body-small'><Link to="/About">Department</Link></p>
                            <p className='body-small'><Link to="/Mission-and-Vision">Mission and Vision</Link></p>
                            <p className='body-small'><Link to="/Chairman-Message">Chairman Message</Link></p>
                            <p className='body-small'><Link to="/Notices">Notices</Link></p>
                            <p className='body-small'><Link to="/Events">Events</Link></p>
                            <p className='body-small'><Link to="/Downloads">Downloads</Link></p>
                            <p className='body-small'><Link to="/Department-Structure">Department Structure</Link></p>
                        </Col>
                        <Col lg={3} className='py-3'>
                            <h4>Academics</h4>
                            <div className="nav-inside">
                                <p className='body-small'>Timetable</p>
                                <span className='body-small'><Link to="/Timetable/Morning">&nbsp; &mdash; Morning</Link></span>
                                <span className='body-small'><Link to="/Timetable/Evening">&nbsp; &mdash; Evening</Link></span>
                            </div>
                            <div className="nav-inside">
                                <p className='body-small'>Programs</p>
                                <span className='body-small'><Link to="/Programs/Bachelors">&nbsp; &mdash; Bachelors</Link></span>
                            </div>
                            <p className='body-small'><Link to="/Library">Library</Link></p>
                            <p className='body-small'><Link to="/DepartmentPEO">Department PEO</Link></p>
                            <p className='body-small'><Link to="/DepartmentPLO">Department PLO</Link></p>
                        </Col>
                        <Col lg={3} className='py-3'>
                            <h4>R & D</h4>
                            <p className='body-small'><Link to="/Laboratories">Laboratory</Link></p>
                            <p className='body-small'><Link to="/Publications">Publication</Link></p>
                            <p className='body-small'><Link to="/Projects">Projects</Link></p>
                        </Col>
                        <Col lg={3} className='py-3'>
                            <h4>People</h4>
                            <p className='body-small'><Link to="/Faculty">Faculty</Link></p>
                            <p className='body-small'><Link to="/Staff">Staff</Link></p>
                        </Col>
                        <Col lg={3} className='py-3'>
                            <h4>Conferences</h4>
                            <p className='body-small'><a href="https://fet.usindh.edu.pk/ncetiet2020/" target="_blank" rel="noreferrer">NCETIET-2020</a></p>
                            <p className='body-small'><a href="https://fet.usindh.edu.pk/icetiet2022/" target="_blank" rel="noreferrer">ICETIET-2022</a></p>
                        </Col>
                        <Col lg={3} className='py-3'>
                            <h4>FYP</h4>
                            <p className='body-small'><small>FYP</small></p>
                        </Col>
                        <Col lg={3} className='py-3'>
                            <h4>Sign In</h4>
                            <p className='body-small'><small>&mdash; Teachers</small></p>
                            <p className='body-small'><small>&mdash; Students</small></p>
                        </Col>
                    </Row>
                </Container>
            </Offcanvas>
        </>
    )
}

export default NavOverlay
