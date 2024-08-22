import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const Staff = () => {
    return (
        <>
            <Header />
            <PageHeader title='Staff' tagline="Telecommunication Engineering (FET) Staff" sectionImg={sectionImg}/>
            <PageContent heading="Staff Members" staff="true"/>
            <Footer />
        </>
    )
}

export default Staff
