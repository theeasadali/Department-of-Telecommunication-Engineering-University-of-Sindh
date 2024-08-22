import {useState, useEffect} from 'react'
import SearchBar from './SearchBar';
import SubjectContent from './SubjectContent';
import axios from 'axios'

const CourseContent = () => {
    const [batch, setBatch] = useState('');
    const [part, setPart] = useState('');
    const [semester, setSemester] = useState('');
    const [subject, setSubject] = useState('');

    const batches = ["2K11", "2K12", "2K13", "2K14", "2K15", "2K16", "2K17", "2K18", "2K19"];
    const parts = ["First Year", "Second Year", "Third Year", "Final Year"];
    const semesters = ["1st Semester", "2nd Semester"];
    // const subjects = ["Radar-Systems", "subject-2"];

    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const fetchSubjects = async () => {
            const {data} = await axios.get('/api/subjects')
            setSubjects(data)
        }

        fetchSubjects();
    }, [])
    const dbBatches = subjects.map((subject) => subject.batch);
    const dbParts = subjects.map((subject) => subject.part);
    const dbSemesters = subjects.map((subject) => subject.semester);
    
    console.log(dbBatches,dbParts, dbSemesters);
    return (
        <>
            <SearchBar funcForChange={setBatch} arrayOfOptions={batches} default="Batch"/>
            <SearchBar funcForChange={setPart} arrayOfOptions={parts} default="Part"/>
            <SearchBar funcForChange={setSemester} arrayOfOptions={semesters} default="Semester"/>
            <SearchBar funcForChange={setSubject} arrayOfOptions={semesters} default="Subject"/>

            {subjects.map((subject, index) => (
                (subject.batch === batch) &&  
                <>
                </>
            ))
                
            }
                    <div className="course-body py-4">
                        <h4>COURSE SPECIFICATION OF {batch}, {part}/{semester} &mdash; {subject}</h4>
                        <hr/>
                        <SubjectContent part={part} semester={semester} subjects={subjects}/>
                    </div>

        </>
    )
}

export default CourseContent
