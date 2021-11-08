import React from 'react'
import './Tour.scss'
const Tour = (props) => {
    const { city, image, name, info } = props;
    return (
        <article className="tour">
            <div className="image-container">
                <img width="200px"
                    src={image}
                    alt=''
                />
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                <h2>{city}</h2>
                <h4>{name}</h4>
                <h5>info{" "}
                    <span><i className="fas fa-caret-square-down" /></span></h5>
                <p>{info}</p>
            </div>
        </article>
    )
}

export default Tour
