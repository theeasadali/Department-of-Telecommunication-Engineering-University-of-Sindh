import { Container,Row, Col } from 'react-bootstrap';
import sponsorImage from '../assets/img/sponsor-1.jpg'
import sponsorImage2 from '../assets/img/sponsor-2.jpg'
import sponsorImage3 from '../assets/img/sponsor-3.png'
import sponsorImage4 from '../assets/img/sponsor-4.png'
import sponsorImage5 from '../assets/img/sponsor-5.jpg'
const Sponsors = () => {
    const sponsorImages = [
        {
            id:1,
            imgSrc: sponsorImage
        },
        {
            id:2,
            imgSrc: sponsorImage2
        },
        {
            id:3,
            imgSrc: sponsorImage3
        },
        {
            id: 4,
            imgSrc: sponsorImage4
        },
        {
            id:5,
            imgSrc: sponsorImage5
        }
    ];
    return (
        <section className="home-sections py-4" style={{backgroundColor: "white"}}>
            <Container>
                <div className="section-intro">
                    <h1>Sponsors</h1>
                    <p className="body-small">Here are some of our Sponsors</p>
                </div>
                <Row className='py-4 text-center'>
                    {sponsorImages.map((image, index)=>(
                        <Col className='py-3' key={index}>
                            <img className='sponsorImg' src={image.imgSrc} alt="Sponsor" />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Sponsors
