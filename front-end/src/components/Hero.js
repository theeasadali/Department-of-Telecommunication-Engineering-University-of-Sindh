import {Container} from 'react-bootstrap';
import HeroContent from './HeroContent';
const Hero = () => {
    return (
        <section className="hero">
            <Container>
                <HeroContent greeting="Welcome to the Department of" title="Telecommunication Engineering" desc="To produce intellectual graduates with eclectic vision in the field of telecommunication to keep pace with the current trends and envisage future prospects in terms of both the professional and research practices." />
            </Container>
        </section>
    )
}

export default Hero
