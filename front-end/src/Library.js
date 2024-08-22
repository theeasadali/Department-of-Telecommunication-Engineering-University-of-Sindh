import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const Library = () => {
    return (
        <>
            <Header />
            <PageHeader title='Seminar Library' tagline="Faculty of Engineering and Technology's Library" sectionImg={sectionImg}/>
            <PageContent heading="List of Available Books" library="true"/>
            <Footer />
        </>
    )
}

export default Library
