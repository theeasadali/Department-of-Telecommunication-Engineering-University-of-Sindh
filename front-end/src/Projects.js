import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const Projects = () => {
    return (
        <>
            <Header />
            <PageHeader title='Projects' tagline="Telecommunication Engineering (FET) Projects" sectionImg={sectionImg}/>
            <PageContent heading="Projects" projects="true"/>
            <Footer />
        </>
    )
}

export default Projects
