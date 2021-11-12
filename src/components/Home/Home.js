import React, { useState } from 'react'
import './Home.scss'
import TourplaceData from '../TourplaceData'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const Home = () => {
    const [people, setPeople] = useState(TourplaceData)
    const [index, setIndex] = useState(0)

    return (
        <div>
            <h1 className="title">Welcome to Our website</h1>
            <section className="section">
                <div className="">
                    <h2 className="title2">Slider Demo</h2>
                </div>
                <div className="section-center">
                    {people.map((place, placeIndex) => {
                        const { id, image } = place
                        return <div key={id}>
                            <img src={image} alt='' className="place-image" width="200px" height="200px" />

                        </div>
                    })}
                    <button className="prev"><FiChevronLeft /></button>
                    <button className="next"><FiChevronRight /></button>

                </div>
            </section>
        </div>
    )
}

export default Home


