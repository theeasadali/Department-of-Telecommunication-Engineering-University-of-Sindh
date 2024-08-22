import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const Faculty = () => {
    return (
        <>
            <Header />
            <PageHeader title='Our Faculty' tagline="Telecommunication Engineering (FET's) Faculty" sectionImg={sectionImg}/>
            <PageContent heading="Faculty Members" faculty="true"/>
            <Footer />
        </>
    )
}

export default Faculty
