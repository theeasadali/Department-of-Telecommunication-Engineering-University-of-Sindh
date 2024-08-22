import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import PageContent from './components/PageContent'
import PageHeader from './components/PageHeader'
import sectionImg from "./assets/img/gallery-3.jpg";

const Downloads = () => {
    return (
        <>
            <Header /> 
            <PageHeader title="Downloads" sectionImg={sectionImg} tagline="Here are some of the Downloads that will happen."/>
            <PageContent heading="Downloads Department of Telecommunication Engineering" content="To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices.Faculty of Engineering and Technology is composed of an Institute and six departments: Prof. A. H. S. Bukhari Institute of Information and Communication Technology, Department of Electronics Engineering, Department of Telecommunication Engineering, Department of Information Technology, Department of Software Engineering, Department of Telemedicine and e-Health and Department of Industrial Electronics Engineering. A. H. S Bukhari Institute of Information and Communication Technology is an independent post-graduate institute offering MS/MPhil programs in disciplines of Electronics, Telecommunications, Information Technology and Software Engineering, and PhD degree program in Information Technology. Currently, over 300 students are enrolled in all MS/ MPhil and PhD programs." downloads="true"/>
            <Footer />
        </>
    )
}

export default Downloads
