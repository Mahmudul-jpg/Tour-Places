import React from 'react'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
function About() {
    return (
        <div>
            <div style={{ textAlign: 'center', color: 'grey' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt nostrum laboriosam debitis, quas quidem quaerat pariatur molestias quam voluptates veniam tempora ab vitae porro earum necessitatibus sint sapiente dolore esse. Nam perspiciatis officia laudantium exercitationem, in blanditiis debitis porro perferendis voluptas nulla recusandae esse provident repellat architecto! Omnis illum blanditiis illo fuga quia ducimus? Molestias quos, veniam eveniet in numquam fugiat beatae obcaecati ex maxime sit similique et amet temporibus harum facilis maiores optio earum deleniti alias! Minus sint fugiat provident consectetur temporibus corporis, libero, minima tenetur sit dicta ab illo facere voluptas eligendi quisquam quidem velit quia? Dicta?
            </div>
            <br />
            <br />
            <div style={{ textAlign: 'right', color: 'black' }}><h3>Created By - <span style={{ color: 'green', fontStyle: 'italic' }}>Mahmudul Hasan Shuvo</span></h3></div>
            <div style={{ textAlign: 'center', color: 'grey' }}>
                <h2>Follow me on</h2>
                <div style={{
                    backgroundColor: 'rgb(4, 4, 41)',
                    fontSize: '500%',
                    margin: '0 2rem',
                    fontWeight: '500'
                }}><FiLinkedin />
                    <FiGithub />
                    <FiInstagram />
                </div>

            </div>
        </div>
    )
}

export default About
