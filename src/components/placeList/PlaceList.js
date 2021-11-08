import React from 'react'
import './PlaceList.scss'
import Tour from '../tour/Tour'
import TourplaceData from '../TourplaceData'
const PlaceList = () => {
    console.log(TourplaceData)

    return (
        <section class='place-list'>


            {TourplaceData.map(tour => {
                return <Tour
                    key={tour.id} image={tour.image} name={tour.name} city={tour.city} info={tour.info}

                />
            }
            )}
        </section>
    )
}

export default PlaceList
