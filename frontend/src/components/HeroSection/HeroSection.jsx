import React from 'react'
import heroSectionImage from "../../assets/images/heroSection.png"
import "./HeroSection.css"

function HeroSection() {
    return (
        <>
            <div className="heroSection-area section_padding">
                <div className="heroSection_content">
                    <div className="sub-title">
                        <p>Securing Your Visual World, Byte by Byte</p>
                    </div>
                    <div className="title">
                        <h1>Safeguarding Your Visual Data with Cutting-Edge <span>Security Solutions</span></h1>
                    </div>
                    <div className="hero-content">
                        <p>
                            We bring you the most advanced image encryption and decryption solutions utilizing the power of the Advanced Encryption Standard (AES).
                        </p>
                    </div>
                    <div className="sec-btn">
                        <div className="encrypt-btn">
                            <a href="/encryption">Encryption</a>
                        </div>
                        <div className="decrypt-btn">
                            <a href="/decryption">Decryption</a>
                        </div>
                    </div>
                </div>
                <div className="heroSection_image">
                    <img src={heroSectionImage} alt="heroSectionImage" />
                </div>
            </div>
        </>
    )
}

export default HeroSection