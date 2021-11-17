
import React, { useState } from 'react'
import "./Slideshow.scss"
import ImageData from '../ImageData'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className='carousel'>
            <div className='carouselInner' style={{ backgroundImage: `url(${ImageData[currentImage].image})` }}>
                <div className='left' onClick={() => {
                    currentImage > 0 && setCurrentImage(currentImage - 1);
                }}><FiChevronLeft style={{ fontSize: 30 }} /></div>
                <div className='center' ></div>
                <div className='right' onClick={() => {
                    currentImage < ImageData.length - 1 && setCurrentImage(currentImage + 1);
                }}><FiChevronRight style={{ fontSize: 30 }} /></div>

            </div>
        </div>
    )
}
export default Carousel