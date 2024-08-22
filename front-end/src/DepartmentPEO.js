import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const DepartmentPEO = () => {
    return (
        <>
            <Header />
            <PageHeader title='Department PEO' tagline="Department Program Educational Objective" sectionImg={sectionImg}/>
            <PageContent heading="PEO" content="The program educational objectives for bachelors in telecommunication program are stated below:" departmentPEO="true"/>
            <Footer />
        </>
    )
}

export default DepartmentPEO
