const SubjectContent = (props) => {
    return (
        <div className="course-body-semester">
            <div className="semester">
                <h5>Subject Contents</h5>
                {props.subjects.map((subject) => (
                    <>
                        <p><span>Course Title: </span> {subject.courseTitle}</p>
                        <p><span>Course Code:</span> {subject.courseTitle}</p>
                        <p><span>Degree Program:</span> BS(Tele Communication) {subject.part} ({subject.semester})</p>
                        <p><span>Course rating:</span> {subject.creditHours}</p>
                        <p><span>Pre-requisites:</span> {subject.prerequisite}</p>
                    </>
                ))}
            </div>
            <div className="subject-contents pt-3">
                <h6>Course Objectives:</h6>
                <p className='body-small'>To introduce the basics of Radar system principles and laws are discussed with emphasis on to provide basic understanding of various radar components and subsystems. The course attempts to give the student an insight in the application of advanced radar systems in defense and civil measurement.</p>

                <h6>Course Outline:</h6>
                <p className='body-small'>
                    <span>Introduction:</span> Radar Block Diagram & Operation, Radar Range Equation, Radar Frequencies, Applications of Radar&nbsp;
                    <span>Radar Parameters:</span>Prediction of Range Performance, Minimum Detectable Signal, Receiver Noise, Signal to Noise Ratio, Integration of Radar pulses, Radar Cross Section, Transmitter Power, Antenna Parameters, System Losses, Propagation Effects, Radar Clutters.&nbsp;
                    <span>Radar Types:</span> CW and Frequency Modulated Radar, MTI and Pulse Doppler Radar, Tracking Radar.&nbsp;
                    <span>Components of Radars:</span> Radar Transmitters, Radar Antennas, Receivers, Displays and Duplexers.&nbsp;
                    <span>Detection of Radar Signals in Noise:</span> Detection Criteria, Detector Characteristics, Performance of Radar Operator, Automatic Detection.
                </p>

                <h6>Text Books/Reference Books:</h6>
                    <ol>
                        <li>Skolnik M.I., "Introduction to Radar System", McGraw Hill. 2002</li>
                        <li>Burtan R., "Radar Engineering", McGraw Hill. 2005</li>
                    </ol>
            </div>
        </div>
    )
}

export default SubjectContent
