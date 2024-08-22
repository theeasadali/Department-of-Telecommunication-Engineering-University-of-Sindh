import { useState } from "react";
import SearchBar from "./SearchBar";
const CourseScheme = () => {
    const [batch, setBatch] = useState('');
    const batches = ["2K11", "2K12", "2K13", "2K14", "2K15", "2K16", "2K17", "2K18", "2K19"];

    const semester1 = [
        {
            courseCode: "ENG-300",
            title: "English Composition and Comprehension",
            creditHours: 2
        },
        
        {
            courseCode: "PS-303",
            title: "Pakistan Studies",
            creditHours: 1
        },

        {
            courseCode: "TELE-310",
            title: "Circuit Analysis",
            creditHours: 3
        },

        {
            courseCode: "TELE-311",
            title: "Circuit Analysis (Lab)",
            creditHours: 1
        },

        {
            courseCode: "TELE-312",
            title: "Introduction to Information Technology",
            creditHours: 3
        },

        {
            courseCode: "TELE-313",
            title: "Introduction to Information Technology",
            creditHours: 1
        },

        {
            courseCode: "TELE-314",
            title: "Computer Programming C++",
            creditHours: 3
        },

        {
            courseCode: "TELE-315",
            title: "Computer Programming C++",
            creditHours: 1
        },

        {
            courseCode: "TELE-316",
            title: "Calculus and Analytical Geometry",
            creditHours: 3
        }
    ]
    return (
        <>
            <SearchBar funcForChange={setBatch} arrayOfOptions={batches} default="Batch"/>
            {(batch === "2K19") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }

            {(batch === "2K18") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                    <h6>Pre-requisite: <span className='body-small'>H.S.C Pre- Engineering or General Science group with Mathematics, Physics and Computer background, with at least 45% aggregate marks, Pre- Entry Test.</span></h6>
                    <p className="body-large">Admission on district U/R quota basis, 61 seats available.</p>
                    <hr/>

                    <div className="course-body-year">
                        <h4 className='pb-2'>First Year</h4>
                        <div className="semester">
                            <h5>1st Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <div className="semester">
                            <h5>1sd Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <hr/>
                    </div>

                    <div className="course-body-year">
                        <h4 className='pb-2'>Second Year</h4>
                        <div className="semester">
                            <h5>1st Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <div className="semester">
                            <h5>2nd Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <hr/>
                    </div>
                    <div className="course-body-year">
                        <h4 className='pb-2'>3rd Year</h4>
                        <div className="semester">
                            <h5>1st Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <div className="semester">
                            <h5>2nd Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <hr/>
                    </div>

                    <div className="course-body-year">
                        <h4 className='pb-2'>Fourth Year</h4>
                        <div className="semester">
                            <h5>1st Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                        <div className="semester">
                            <h5>2nd Semester</h5>
                            {semester1.map((subject, index) => (
                                <p key={index}><span>{subject.courseCode}</span> {subject.title} <span>({subject.creditHours})</span></p>
                            ))}
                        </div>
                    </div>
                </div>
            }

            {(batch === "2K17") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }

            {(batch === "2K16") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }

            {(batch === "2K15") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }

            {(batch === "2K14") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }
                                
            {(batch === "2K13") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }

            {(batch === "2K12") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }

            {(batch === "2K11") &&
                <div className="course-body py-4">
                    <h5>Course Scheme for {batch}</h5>
                </div>
            }
        </>
    )
}

export default CourseScheme
