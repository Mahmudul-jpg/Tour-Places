import React from 'react'
import './Tour.css'
const Tour = () => {
    return (
        <article className="tour">
            <div className="image-container">
                <img width="400px" height="200px"
                    src='https://images.unsplash.com/photo-1624485871361-65454b13edfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZGFyYmFuJTJDJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                    alt=''
                />
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                <h2>city</h2>
                <h4>name</h4>
                <h5>info{""}
                    <span><i className="fas.fa-caret-square-down" /></span></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
        </article>
    )
}

export default Tour
