import React from 'react'
import Home from './Home'
import About from "./About"
import MissionVision from "./MissionVision"
import { Routes, Route } from 'react-router-dom';
import ChairmanMessage from './ChairmanMessage';
import Notices from './Notices';
import Events from './Events';
import Gallery from './Gallery';
import CourseSchemes from './CourseSchemes';
import CourseContents from './CourseContents';
import Downloads from './Downloads';
import DepartmentStructure from './DepartmentStructure';

//Academics 
import Timetable from './Timetable';
import Programs from './Programs';
import Library from './Library';
import DepartmentPEO from './DepartmentPEO';
import DepartmentPLO from './DepartmentPLO';

// R&D
import Laboratories from './Laboratories';
import Publications from './Publications';
import Projects from './Projects';

// PEOPLE
import Staff from './Staff'
import Faculty from './Faculty'
import FacultyMember from './FacultyMember';

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Mission-and-Vision" element={<MissionVision />} />
          <Route path="/Chairman-Message" element={<ChairmanMessage />}/>
          <Route path="/Notices" element={<Notices />}/>
          <Route path="/Events" element={<Events />}/>
          <Route path="/Gallery" element={<Gallery />}/>
          <Route path="/Downloads" element={<Downloads />}/>
          <Route path="/Department-Structure" element={<DepartmentStructure />}/>

          {/* Academics */}
          <Route path="/Timetable/:shift" element={<Timetable />}/>
          <Route path="/Programs/:program" element={<Programs />}/>
          <Route path="/Library" element={<Library />}/>
          <Route path="/DepartmentPEO" element={<DepartmentPEO />}/>
          <Route path="/DepartmentPLO" element={<DepartmentPLO />}/>

          {/* R&D */}
          <Route path="/Laboratories" element={<Laboratories/>} />
          <Route path="/Publications" element={<Publications/>} />
          <Route path="/Projects" element={<Projects/>} />

          {/* PEOPLE */}
          <Route path="/Faculty" element={<Faculty />} />
          <Route path="/Staff" element={<Staff />} />

          <Route path="/Faculty-Member/:memberName" element={<FacultyMember />} />
          <Route path="/Course-Schemes" element={<CourseSchemes />}/>
          <Route path="/Course-Contents" element={<CourseContents />}/>
        </Routes>
    </div>
  );
}

export default App;
