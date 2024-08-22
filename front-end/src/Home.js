import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import ChairmanMessage from './components/ChairmanMessage'
import LatestEvents from './components/LatestEvents';
import Notices from './components/Notices';
import Sponsors from './components/Sponsors'
import Gallery from './components/Gallery';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <About heading="About" body="To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices.Faculty of Engineering and Technology is composed of an Institute and six departments: Prof. A. H. S. Bukhari Institute of Information and Communication Technology, Department of Electronics Engineering, Department of Telecommunication Engineering, Department of Information Technology, Department of Software Engineering, Department of Telemedicine and e-Health and Department of Industrial Electronics Engineering. A. H. S Bukhari Institute of Information and Communication Technology is an independent post-graduate institute offering MS/MPhil programs in disciplines of Electronics, Telecommunications, Information Technology and Software Engineering, and PhD degree program in Information Technology. Currently, over 300 students are enrolled in all MS/ MPhil and PhD programs." />
                <ChairmanMessage />
                <Notices />
                <LatestEvents />
                <Gallery />
                <Sponsors />
            </main>
            <Footer />
        </div>
    )
}

export default Home
