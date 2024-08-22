import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CourseContent from './CourseContent';
import CourseScheme from './CourseScheme';
import Enquiries from './Enquiries';
import EventCard from "./EventCard"
import FacultyContent from './FacultyContent';
import FacultyMemberContent from './FacultyMemberContent';
import GalleryImages from './GalleryImages';
import LaboratoryContent from './LaboratoryContent';
import LibraryContent from './LibraryContent';
import MissionAndVision from './MissionAndVision';
import PEOContent from './PEOContent';
import PLOContent from './PLOContent';
import ProjectContent from './ProjectContent';
import PublicationContent from './PublicationContent';
import StaffContent from './StaffContent';
import Tables from './Tables';
import Timetable from './Timetable';

const PageContent = (props) => { 
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        const fetchAllEvents = async () => {
            const {data} = await axios.get('/api/allEvents')
            setAllEvents(data)
        }

        fetchAllEvents();
    }, [])
    return (
        <section className="page-section">
            <Container>
                <Row>
                    <Col>
                        {/* About */}
                        {!props.courseSchemes && !props.courseContents &&
                            <>
                                <h3>{props.heading}</h3>
                                <p className="body-small">{props.content}</p>
                                {props.image &&<img src={props.image} alt={props.heading} className='large-image'/>}
                            </>
                        }

                        {/* Course Contents */} 
                        {props.courseContents && 
                            <CourseContent />
                        }
                        {/* Course Schemes */}
                        {props.courseSchemes && 
                            <CourseScheme />
                        }
                        {props.missionVision &&
                            <MissionAndVision mission="Develop technology" vision="To Achieve Fastest Data Communication in the History"/>
                        }
                        {props.eventCard && 
                            <Row className="g-3" >
                                {allEvents.map((event, index) => (
                                    <Col key={index}>
                                        <EventCard cardTitle={event.title} cardContent={event.date} cardImage={event.img} />
                                    </Col>
                                ))}
                            </Row>
                        }
                        {props.downloads && <Tables filename="File Name" type="Type" date="Date" download="Download"/>}
                        {props.notices && <small>''</small>}
                        {props.galleryImages &&
                            <GalleryImages />
                        }
                        {props.chairmanName && props.chairmanDesignation && 
                            <div className="chairmanDesignation">
                                <h4>{props.chairmanName}</h4>
                                <p>{props.chairmanDesignation}</p>
                            </div>
                        }

                        {/* Academics */}
                        {props.timetable && <Timetable />}
                        {props.programs && <>
                            <Stack direction="horizontal" gap={2}>
                                <Link to="/Course-Contents" className="btn btn-outline-fyp">Course Contents</Link>
                                <Link to="/Course-Schemes" className='btn btn-outline-fyp'>Course Scheme</Link>
                            </Stack>
                        </>}

                        {props.library && <LibraryContent />}
                        {props.departmentPEO && <PEOContent />}
                        {props.departmentPLO && <PLOContent />}

                        {/* R&D */}
                        {props.laboratories && <LaboratoryContent />}
                        {props.publications && <PublicationContent />}
                        {props.projects && <ProjectContent />}

                        {/* PEOPLE */}
                        {props.staff && <StaffContent />}
                        {props.faculty && <FacultyContent />}
                        {props.facultyMember && <FacultyMemberContent />}
                    </Col>
                    <Col lg={4}>
                        <Enquiries />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PageContent
