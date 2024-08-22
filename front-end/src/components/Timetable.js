import { useState } from 'react';
import SearchBar from './SearchBar'

const Timetable = () => {
    const parts = ["First Year", "Second Year", "Third Year", "Final Year"];
    const [part, setPart] = useState('');
    return (
        <>
            <SearchBar funcForChange={setPart} arrayOfOptions={parts} default="Part"/>
            {part === "default" ? '' :
                <div className="course-body py-4">
                    <h4>COURSE SPECIFICATION OF {part}</h4>
                </div>

            }
        </>
    )
}

export default Timetable