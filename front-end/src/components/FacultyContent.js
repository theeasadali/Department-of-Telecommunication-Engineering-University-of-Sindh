import { Row, Col } from "react-bootstrap";
import EventCard from "./EventCard";
import faculty1 from '../assets/img/chairman.jpg'
import faculty2 from '../assets/img/faculty-1.jpg'
import faculty3 from '../assets/img/faculty-2.jpeg'
import { Link } from "react-router-dom";

const FacultyContent = () => {
    const facultyMembers = [
        {
            name: "Prof Dr. Khalil-Ur-Rehman Khoumbati",
            designation: "Professor (Incharge Chairman)",
            imgSrc: faculty1
        },

        {
            name: "Dr Sandar Ali Khowaja",
            designation: "Assistant Professor",
            imgSrc: faculty2
        },
        {
            name: "Mr Hemant Kumar",
            designation: "Lecturer",
            imgSrc: faculty3
        }
    ]

    return (
        <Row>
            {facultyMembers.map((member, idx) => (
                <Col key={idx}>
                    <Link to={"/Faculty-Member/" + member.name}>
                        <EventCard cardTitle={member.name} cardContent={member.designation} cardImage={member.imgSrc} />
                    </Link>
                </Col>
            ))}
        </Row>
    )
}

export default FacultyContent
