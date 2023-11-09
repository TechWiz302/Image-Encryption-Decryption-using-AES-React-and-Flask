import React from 'react'
import "./Pricing.css"

function Pricing() {
    return (
        <>
            <div id='pricing' className="pricing section_padding">
                <div className="pricing-heading">
                    <h1>Pricing</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="pricing-container">
                            <div className="pricing-container-bg">
                                <div className="pricing-title">
                                    <h3>Startup Plan</h3>
                                </div>
                                <div className="pricing-amount">
                                    <h2>$50 </h2>
                                    <span>-per month</span>
                                </div>
                            </div>
                            <div className="price-features">
                                <ul>
                                    <li>50 Encryption/Decrytpion Per Day</li>
                                    <li>Email Support</li>
                                    <li>Image size limit upto 10Mb only</li>
                                    <li><del>No Watermarking</del></li>
                                    <li><del>Add Free</del></li>
                                    <li><del>Multiple User Access</del></li>
                                </ul>
                            </div>
                            <div className="price-btn-cont">
                                <a href="#" className="price-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="pricing-container">
                            <div className="pricing-container-bg">
                                <div className="pricing-title">
                                    <h3>Standard Plan</h3>
                                </div>
                                <div className="pricing-amount">
                                    <h2>$100 </h2>
                                    <span>-per month</span>
                                </div>
                            </div>
                            <div className="price-features">
                                <ul>
                                    <li>100 Encryption/Decrytpion Per Day</li>
                                    <li>Email Support</li>
                                    <li>Image size limit upto 30Mb only</li>
                                    <li>No Watermarking</li>
                                    <li>Add Free</li>
                                    <li><del>Multiple User Access</del></li>
                                </ul>
                            </div>
                            <div className="price-btn-cont">
                                <a href="#" className="price-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="pricing-container">
                            <div className="pricing-container-bg">
                                <div className="pricing-title">
                                    <h3>Premium Plan</h3>
                                </div>
                                <div className="pricing-amount">
                                    <h2>$150 </h2>
                                    <span>-per month</span>
                                </div>
                            </div>
                            <div className="price-features">
                                <ul>
                                    <li>Unlimited Encryption/Decrytpion Per Day</li>
                                    <li>Email Support</li>
                                    <li>Image size limit upto 10Mb only</li>
                                    <li>No Watermarking</li>
                                    <li>Add Free</li>
                                    <li>Multiple User Access</li>
                                </ul>
                            </div>
                            <div className="price-btn-cont">
                                <a href="#" className="price-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing