import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './images/image1.avif';
import image2 from './images/image2.avif';
import image3 from './images/image3.avif';
import image4 from './images/image4.avif';
import image5 from './images/image5.avif';
import image6 from './images/image6.avif';
import image7 from './images/image7.avif';
import image8 from './images/image8.avif';
import image9 from './images/image9.avif';
import image10 from './images/image10.avif';



const Task3 = () => {
    const [selectImage, setSelectImage] = useState(require('./images/image1.avif'))
    const navigate = useNavigate();

    const handleImageClick = (e) =>{
        setSelectImage(e)
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        accessibility:false,
    };

    const home = () => {
        navigate('/') 
    }

  


    

    const task3 = () => (
        <div className='maincontainer'>
            <div className='maincontainer_home'>
                <button onClick={home}>Home</button>
            </div>
            <div className='maincontainer_imageGallery'>
                <div className='maincontainer_imageGallery_heading'>
                    <h1>Image Gallery</h1>
                </div>
                <div className='maincontainer_imageGallery_image'>
                    <img src={selectImage} alt="mainImage" />
                </div>
             
                <div className='maincontainer_imageGallery_slider'>
                    <Slider 
                        {...settings }
                    >                   
                        <img src={require("./images/image1.avif")} alt="" onClick={() => handleImageClick(image1)} />
                        <img src={require("./images/image2.avif")} alt="" onClick={() => handleImageClick(image2)} />
                        <img src={require("./images/image3.avif")} alt="" onClick={() => handleImageClick(image3)} />
                        <img src={require("./images/image4.avif")} alt="" onClick={() => handleImageClick(image4)} />
                        <img src={require("./images/image5.avif")} alt="" onClick={() => handleImageClick(image5)} />
                        <img src={require("./images/image6.avif")} alt="" onClick={() => handleImageClick(image6)} />
                        <img src={require("./images/image7.avif")} alt="" onClick={() => handleImageClick(image7)} />
                        <img src={require("./images/image8.avif")} alt="" onClick={() => handleImageClick(image8)} />
                        <img src={require("./images/image9.avif")} alt="" onClick={() => handleImageClick(image9)} />
                        <img src={require("./images/image10.avif")} alt="" onClick={() => handleImageClick(image10)} /> 
                    </Slider>               
                </div>
               
            </div>
        </div>
    )
  return (
    <div>
        {task3()}
    </div>
  )
}

export default Task3

