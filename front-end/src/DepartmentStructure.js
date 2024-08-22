import Header from "./components/Header"
import PageHeader from "./components/PageHeader"
import PageContent from "./components/PageContent"
import Footer from "./components/Footer"
import sectionImg from "./assets/img/gallery-3.jpg";

const DepartmentStructure = () => {
    return (
        <>
            <Header />
            <PageHeader title="Department Structure" sectionImg={sectionImg} tagline="Here are some of the Department Structure that will happen." />
            <PageContent heading="Department Structure Department of Telecommunication Engineering" content="To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional." departmentStructure="true"/>
            <Footer />
        </>
    )
}

export default DepartmentStructure
