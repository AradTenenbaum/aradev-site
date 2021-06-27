import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import './style.css';

const ContactSection = () => {

    const contactWays = [
        {
            name: "Instagram",
            icon: <InstagramIcon className="way-icon instagram"/>,
            url: "https://www.instagram.com/arad_ten/",
            class: "instagram"
        },
        {
            name: "LinkedIn",
            icon: <LinkedInIcon className="way-icon linkedin"/>,
            url: "https://www.linkedin.com/in/arad-tenenbaum-387311206/",
            class: "linkedin"
        },
        {
            name: "Facebook",
            icon: <FacebookIcon className="way-icon facebook"/>,
            url: "https://www.facebook.com/profile.php?id=100009953648380",
            class: "facebook"
        }
    ];

    return (
        <div className="contact-container">
            <h2 className="contact-me">Contact Me</h2>
            <div className="ways">
                {contactWays.map((con) => <a href={con.url} className={"way " + con.class}>
                    {con.icon}
                    <div className="way-text">{con.name}</div>
                </a>)}
            </div>
        </div>
    )
}

export default ContactSection
