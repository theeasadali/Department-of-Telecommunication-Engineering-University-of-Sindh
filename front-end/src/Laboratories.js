import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const Laboratories = () => {
    return (
        <>
            <Header />
            <PageHeader title='Laboratory' sectionImg={sectionImg}/>
            <PageContent heading="Laboratories" content="Well Equiped Laboratories" laboratories="true"/>
            <Footer />
        </>
    )
}

export default Laboratories
