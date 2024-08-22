import Footer from './components/Footer'
import Header from './components/Header'
import PageHeader from './components/PageHeader'
import sectionImg from "./assets/img/gallery-3.jpg";
import PageContent from './components/PageContent';


const Gallery = () => {
    return (
        <>
            <Header />
            <PageHeader title="Gallery" sectionImg={sectionImg} tagline="Look at the beauty of our Faculty and Nature in it."/>
            <PageContent heading="Gallery Department of Telecommunication Engineering" content="To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices.Faculty of Engineering and Technology is." galleryImages="true"/>
            <Footer />
        </>
    )
}

export default Gallery
