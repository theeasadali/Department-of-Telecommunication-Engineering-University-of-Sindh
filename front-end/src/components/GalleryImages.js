import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from 'axios'

const GalleryImages = () => {
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
    console.log(gallery)
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="model-img" />
                <h2>{tempTitle}</h2>
                <FaTimes onClick={() => setModel(false)}/>
            </div>
            <div className="gallery-container">
                {gallery.map((image, index)=>(
                    <div className="galleryImg-container" key={index}>
                        <img src={image.img} alt={image.title} onClick={() => getImg(image.img, image.title)}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GalleryImages
