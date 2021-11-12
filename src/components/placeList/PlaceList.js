import React, { useState } from 'react'
import './PlaceList.scss'
import Tour from '../tour/Tour'
import TourplaceData from '../TourplaceData'
const PlaceList = () => {

    const [states, setStates] = useState({ tours: TourplaceData })
    const removeTour = id => {
        const { tours } = states
        const sortedTours = tours.filter(place => place.id !== id)
        setStates({
            tours: sortedTours
        })
    }
    return (
        <section class='place-list'>


            {TourplaceData.map(tour => {
                return <Tour
                    key={tour.id} image={tour.image} name={tour.name} city={tour.city} info={tour.info} removeTour={removeTour}

                />
            }
            )}
        </section>
    )
}

export default PlaceList
