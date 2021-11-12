import React, { useState } from 'react'
import './Tour.scss'
// import { FaChevronCircleDown } from 'react-icon/fa'
const Tour = (props) => {
    const { id, city, image, name, info } = props;
    const { removeTour } = props
    const [state, setState] = useState({ showInfo: false });
    const handleInfo = () => {
        setState({ showInfo: !state.showInfo })
    }
    return (
        <article className="tour">
            <div className="image-container">
                <img width="300px" height="200px"
                    src={image}
                    alt=''
                />
                <span className="close-btn" onClick={() => { removeTour(id) }}>
                    <i className="fas fa-window-close " />

                </span>
            </div>
            <div className="tour-info">
                <h2>{city}</h2>
                <h4>{name}</h4>
                <h5>info{" "}
                    <span onClick={handleInfo} > <i className="fas fa-caret-square-down" /></span></h5>
                {state.showInfo && <p>{info} </p>}

            </div>
        </article>
    )
}

export default Tour
//className="fas fa-info"