import React, { useState } from 'react'
import './PlaceList.scss'
import Tour from '../tour/Tour'
import TourplaceData from '../TourplaceData'
import { FiSearch } from 'react-icons/fi'
const PlaceList = () => {
    const [searchItem, setSearchItem] = useState('')
    const [states, setStates] = useState({ tours: TourplaceData })
    const removeTour = id => {
        const { tours } = states
        const sortedTours = tours.filter(place => place.id !== id)
        setStates({
            tours: sortedTours
        })
    }
    return (
        <>
            <div className="inPut"><input type='search' placeholder='Search place' onChange={(e) => { setSearchItem(e.target.value) }} /><FiSearch /></div>
            <section class='place-list'>


                {TourplaceData.filter((val) => {
                    if (searchItem === '') { return val }
                    else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val
                    }
                }).map(tour => {
                    return <Tour
                        key={tour.id} image={tour.image} name={tour.name} city={tour.city} info={tour.info} removeTour={removeTour}

                    />
                }
                )}

            </section>
        </>
    )
}

export default PlaceList
