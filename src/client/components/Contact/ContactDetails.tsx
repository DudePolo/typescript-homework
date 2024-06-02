import React from "react";
import "./Contact.css";

interface Contact {
    _id: string;
    name: string;
    email: string;
    portrait: string;
    resume: string;
    socials: string;
}

interface ContactDetailsProps{
    contact: Contact;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
    return (
        <div className="contact-details">
            <h4>{contact.name}</h4>
                <p>{contact.email}</p>
            <div className="contact-images-container">
                <div className="contact-portrait">
                    <img src={contact.portrait} alt={contact.name} />
                </div>
                <div className="contact-resume">
                    <img src={contact.resume} alt={contact.name} />
                </div>
            </div>
            <div className="socials-container">
            <div className="contact-icons">
                <img src="/assets/github.png" alt="github icon" />
                <img src="/assets/js-icon.png" alt="javascript icons" />
                <img src="/assets/python-icon.webp" alt="python icon" />
            </div>
            <div className="contact-socials">
                <a href={contact.socials}> <img src='/assets/linked_in.png' alt="linkedinSocial"/></a>
            </div>
            </div>   
        </div>
    )
}

export default ContactDetails