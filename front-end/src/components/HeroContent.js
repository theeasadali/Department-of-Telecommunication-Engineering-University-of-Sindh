import {Stack, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroContent = ({...props}) => {
    const {greeting, title, desc} = props;
    return (
        <Row>
            <Col xs lg={8}> 
                <div className='hero-content'>
                    <p className="body-large">{greeting}</p>
                    <h1 className='title'>{title}</h1>
                    <p className='desc'>{desc}</p>
                    <Stack direction="horizontal" gap={2}>
                        <Link to="/Course-Contents" className="btn btn-outline-fyp">Course Contents</Link>
                        <Link to="/Course-Schemes" className='btn btn-outline-fyp'>Course Scheme</Link>
                    </Stack>
                </div>
            </Col>
        </Row>
    )
}

export default HeroContent
