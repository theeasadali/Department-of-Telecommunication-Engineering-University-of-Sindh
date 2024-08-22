import Footer from './components/Footer'
import Header from './components/Header'
import PageHeader from './components/PageHeader'
import sectionImg from "./assets/img/gallery-2.jpg";
import contentImg from "./assets/img/hero.jpg"
import PageContent from './components/PageContent';

const MissionVision = () => {
    return (
        <>
            <Header />
            <PageHeader title="Mission and Vision" tagline="Mission and Vision is defined here." sectionImg={sectionImg}/>
            <PageContent heading="Welcome to the Mission and Vision Page" content="Description Of Mission and Vision Page" missionVision="true" image={contentImg}/>
            <Footer />
        </>
    )
}

export default MissionVision
