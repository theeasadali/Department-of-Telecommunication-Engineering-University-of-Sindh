import { useState } from "react";
import { FaTimes } from "react-icons/fa"
import img1 from "../assets/img/Laboratory.jpg"

const LaboratoryContent = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [tempTitle, setTempTitle] = useState('');

    const getImg = (imgSrc, imgTitle) => {
        setTempImgSrc(imgSrc);
        setTempTitle(imgTitle);
        setModel(true);
    }

    const images = [
        {
            id: 1,
            imgSrc: img1,
            title: "Laboratory 1"
        }
    ]
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="model-img" />
                <h2>{tempTitle}</h2>
                <FaTimes onClick={() => setModel(false)}/>
            </div>
            <div className="w-50">
                {images.map((image, index)=>(
                    <div className="galleryImg-container">
                        <img src={image.imgSrc} alt="Sponsor" onClick={() => getImg(image.imgSrc, image.title)}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LaboratoryContent
