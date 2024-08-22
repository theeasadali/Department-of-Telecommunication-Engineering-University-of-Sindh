import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {Container} from 'react-bootstrap'
import axios from 'axios'

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [tempTitle, setTempTitle] = useState('');

    const getImg = (imgSrc, imgTitle) => {
        setTempImgSrc(imgSrc);
        setTempTitle(imgTitle);
        setModel(true);
    }

    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        const fetchGallery = async () => {
            const {data} = await axios.get('/api/gallery')
            setGallery(data)
        }

        fetchGallery();
    }, [])

    const slicedGallery = gallery.slice(0,3);

    return (
        <section className="home-sections py-4">
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="model-img" />
                <h2>{tempTitle}</h2>
                <FaTimes onClick={() => setModel(false)}/>
            </div>
            <Container>
                <div className="section-intro">
                    <h1>Gallery</h1>
                    <p className="body-small">Look at the beauty of our Faculty and Nature in it.</p>
                </div>
                <div className="gallery-container">
                    {slicedGallery.map((image, index)=>(
                        <div className="galleryImg-container" key={index}>
                            <img src={image.img} alt={image.title} onClick={() => getImg(image.img, image.title)}/>
                        </div>
                    ))}
                </div>
                <div className="section-btn">
                    <Link to="/Gallery" class="btn btn-outline-fyp">Check out Our Gallery</Link>
                </div>
            </Container>
        </section>
    )
}

export default Gallery
