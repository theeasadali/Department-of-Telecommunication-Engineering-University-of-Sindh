import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";
import { useParams } from 'react-router-dom';

const Timetable = () => {
    const {shift} = useParams();
    return (
        <div>
            <Header />
            <PageHeader title={'Timetables - ' + shift} tagline="Timetables for all parts." sectionImg={sectionImg}/>
            <PageContent heading="Timetables for respective subjects" timetable="true" shift={shift}/>
            <Footer />
        </div>
    )
}

export default Timetable
