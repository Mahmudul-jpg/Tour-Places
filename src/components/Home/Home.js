import React, { useState } from 'react'
import './Home.scss'
import TourplaceData from '../TourplaceData'
import { FiChevronLeft, FiChevronRight, FiSmartphone } from 'react-icons/fi'
const Home = () => {
    const [people, setPeople] = useState(TourplaceData)
    const [index, setIndex] = useState(0)

    return (
        <div>
            <h1 className="title">Welcome to Our website</h1>
            <section className="section">

                <div className="section-center">
                    {people.map((place, placeIndex) => {
                        const { id, image, name, city } = place
                        let position = 'nextSlide'
                        if (placeIndex === index) {
                            position = 'activeSlide'
                        }
                        if (placeIndex === index - 1 || (index === 0 && placeIndex === people.length - 1)
                        ) {
                            position = 'lastSlide'
                        }
                        return (
                            <main className={position} key={id} >
                                <img src={image} alt={name} className="place-image" width="200px" height="200px" />
                                {/* <h4>{name}</h4>
                                <p>{city}</p> */}
                                <FiSmartphone />
                            </main>
                        )
                    })}
                    <button className="prev" onClick={() => { setIndex(index - 1) }}><FiChevronLeft /></button>
                    <button className="next" onClick={() => { setIndex(index - 1) }}><FiChevronRight /></button>

                </div>
            </section>
        </div>
    )
}

export default Home


