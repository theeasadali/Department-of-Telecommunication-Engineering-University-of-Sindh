import Header from "./components/Header"
import PageHeader from "./components/PageHeader"
import PageContent from "./components/PageContent"
import Footer from "./components/Footer"
import sectionImg from "./assets/img/gallery-3.jpg";
const CourseContents = () => {
    return (
        <>
            <Header />
            <PageHeader title="Course Contents" sectionImg={sectionImg} tagline="Check out the What you will be learning in this Semester!"/>
            <PageContent heading="Gallery Department of Telecommunication Engineering" content="To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices.Faculty of Engineering and Technology is." courseContents="true"/>
            <Footer />
        </>
    )
}

export default CourseContents
