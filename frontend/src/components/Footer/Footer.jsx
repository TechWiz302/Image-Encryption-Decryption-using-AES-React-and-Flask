import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
import { Details } from '../../data/constant';

function Footer() {
    return (
        <>
            <section id='footer' className="footer-subscribe-wrapper">
                <div className="footer-area py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h1>VARS</h1>
                                    <ul className="footer-social">
                                        <li>
                                            <a href={Details.facebook} className="footerSocialMediaIcon" target="display"><FacebookIcon sx={{ fontSize: 40 }} /></a>
                                        </li>
                                        <li>
                                            <a href={Details.github} className="footerSocialMediaIcon" target="display"><GitHubIcon sx={{ fontSize: 40 }} /></a>
                                        </li>
                                        <li>
                                            <a href={Details.linkedin} className="footerSocialMediaIcon" target="display"><LinkedInIcon sx={{ fontSize: 40 }} /></a>

                                        </li>
                                        <li>
                                            <a href={Details.insta} className="footerSocialMediaIcon" target="display"><InstagramIcon sx={{ fontSize: 40 }} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul className="footer-quick-links">
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Contact Us</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Contact Info</h3>
                                    </div>
                                    <div className="footer-info-contact"> <i className="flaticon-phone-call"></i>
                                        <span>Phone: </span>
                                        <span>080 707 555-321</span>
                                    </div>
                                    <div className="footer-info-contact">
                                        <span>Email: </span>
                                        <span>demo@example.com</span>
                                    </div>
                                    <div className="footer-info-contact">
                                        <span>Address: </span>
                                        <span>Navi Mumbai, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer