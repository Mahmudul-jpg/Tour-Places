import React from 'react'
import './Home.scss'
// import "swiper/css/bundle";
// import "./styles.css";
import Swipe from './Swipe'
// import TourplaceData from '../TourplaceData'
// import { FiChevronLeft, FiChevronRight, FiSmartphone } from 'react-icons/fi'
// import Carousel from './SlideShow'
const Home = () => {


    return (
        <div>
            <h1 className="title">Welcome to Our website</h1>
            <Swipe />
            {/* <Carousel /> */}

        </div>
    )
}

export default Home


