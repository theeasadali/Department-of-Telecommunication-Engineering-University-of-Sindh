import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const Publications = () => {
    return (
        <>
            <Header />
            <PageHeader title='Publication' tagline="Faculty of Engineering and Technology's Publications" sectionImg={sectionImg}/>
            <PageContent heading="Publications" publications="true"/>
            <Footer />
        </>
    )
}

export default Publications
