import React from 'react';
import './Contact.css';

function Contact() {
    const name = "Elizabeth Mcdonalid";
    const avatar = "https://randomuser.me/api/portraits/women/32.jpg";
    const status = true;

    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="Image de profil"/>
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={status ? "status-online" : "status-offline"} />
                    <p className="status-text">{status ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
