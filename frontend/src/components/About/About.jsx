import React from 'react'
import {about} from "../../assets/index"
import "./About.css"

function About() {
    return (
        <>
            <div id='about' className="about-section section_padding">
                <div className="about-image">
                    <img src={about} alt={about} width={600}/>
                </div>
                <div className="about-content">
                    <p className="about-subTitle">
                        ABOUT OUR COMPANY
                    </p>
                    <h1 className="about-title">
                        <span>Our Mission</span> Is To Make Your Images As Safe As Possible.
                    </h1>
                    <p className="about-description">
                        VARS is a leading technology firm dedicated to revolutionizing data security through innovative solutions. Specializing in AES-based image encryption and decryption, we are committed to providing robust and user-friendly systems that ensure the utmost protection for digital images, enabling secure transmission and storage for our valued clients.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About