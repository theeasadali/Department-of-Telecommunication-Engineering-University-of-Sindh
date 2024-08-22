import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";
import { useParams } from 'react-router-dom';

const FacultyMember = () => {
    const {memberName} = useParams();
    return (
        <>
            <Header />
            <PageHeader title={memberName} tagline="Telecommunication Engineering (FET's) Faculty Member" sectionImg={sectionImg}/>
            <PageContent heading={"Member's Profile"} facultyMember="true"/>
            <Footer />
        </>
    )
}

export default FacultyMember
