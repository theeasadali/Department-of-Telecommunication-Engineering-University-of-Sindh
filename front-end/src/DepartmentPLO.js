import Header from './components/Header'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import sectionImg from "./assets/img/gallery-3.jpg";

const DepartmentPLO = () => {
    return (
        <>
            <Header />
            <PageHeader title='Department PLO' tagline="Program Learning Outcomes (PLOs)" sectionImg={sectionImg}/>
            <PageContent heading="PEO" content="Program learning outcomes are the narrower statements that describe what students are expected to know and be able to do by the time of graduation. These relate to the knowledge, skills and attitude that the students acquire while proceeding through the program. The program learning outcomes ensure that by the time of graduation the students should retain certain set of knowledge, skills and behavioral traits, at least to some acceptable extent. The PLOs helps to assess the students based on the following attributes:" departmentPLO="true"/>
            <Footer />
        </>
    )
}

export default DepartmentPLO
