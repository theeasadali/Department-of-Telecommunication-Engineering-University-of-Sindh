import { Tab, Tabs, Accordion } from "react-bootstrap"
import Tables from "./Tables"
const FacultyMemberContent = () => {
    return (
        <>
            <h1 className="title">Mr Hemant Kumar</h1>
            <p className="body-large">Lecturer</p>
            <h5>Summary</h5>
            <p className="body-small">
                Engr. Hemant Kumar Narsani received his MS in Electrical Engineering (Telecommunication and Computer Networks) from School of Electrical Engineering and Computer Science (SEECS), National University of Sciences and Technology (NUST), Islamabad, Pakistan in 2019. He received his BE (Telecommunication Engineering) from Department of Telecommunication Engineering, Mehran University of Engineering and Technology (MUET), Jamshoro, Pakistan in 2016. His area of research is in Wireless Communications, Computer Networks and Network Security. Currently, he is working as a full-time Lecturer (BPS-18) at Faculty of Engineering and Technology (FET), University of Sindh (UoS).     
                <p>
                    During Masters, Engr. Kumar was the member of Information Processing and Transmission (IPT) Lab which is directed by Dr. Syed Ali Hassan. In the Master's thesis, Kumar has carried out the performance analysis of large scale wireless networks under the supervision of Dr. Syed Ali Hassan. His research was published in IEEE 88th Vehicular Technology Conference (VTC) in 2018. 
                </p>
            </p>

            <Tabs defaultActiveKey="Education" id="uncontrolled-tab-example" className="my-3">
                <Tab eventKey="Education" title="Education">
                    <input type="text" className="searchBar mb-4 w-25" placeholder="Search for Education"/>
                    <Tables title="Title" year="Year"/>
                </Tab>
                <Tab eventKey="Position-Held" title="Position Held">
                    <input type="text" className="searchBar mb-4 w-25" placeholder="Search for Positions"/>
                    <Tables title="Title" timePeriod="Time Period"/>
                </Tab>
                <Tab eventKey="Administrative-Experience" title="Administrative Experience">
                    <input type="text" className="searchBar mb-4 w-25" placeholder="Search for Administrative Experience"/>
                    <Tables title="Title" timePeriod="Time Period"/>
                </Tab>
                <Tab eventKey="Courses" title="Courses">
                    <input type="text" className="searchBar mb-4 w-25" placeholder="Search for Courses"/>
                    <Tables title="Title" type="Type"/>
                </Tab>
            </Tabs>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Publications</Accordion.Header>
                    <Accordion.Body>
                        <input type="text" className="searchBar mb-4 w-25" placeholder="Search for Publications"/>
                        <Tables year="Year" type="Type" publication="Publication"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Downloads</Accordion.Header>
                    <Accordion.Body>
                        <input type="text" className="searchBar mb-4 w-25" placeholder="Search for Downloads"/>
                        <Tables filename="File Name" type="Type" date="Date" download="Download"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default FacultyMemberContent
