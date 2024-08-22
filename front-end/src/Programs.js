import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";
import { useParams } from 'react-router-dom';

const Programs = () => {
    const {program} = useParams();
    return (
        <>
            <Header />
            <PageHeader title={'Programs - ' + program} tagline="Programs for all parts." sectionImg={sectionImg}/>
            <PageContent heading={"Course Scheme and Course Contents for " + program} programs="true" program={program}/>
            <Footer />
        </>
    )
}

export default Programs
