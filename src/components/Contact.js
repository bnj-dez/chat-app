import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Image de profil"/>
            <div>
                <h4 className="name">Elizabeth Mcdonalid</h4>
                <div className="status">
                    <div className="status-online" />
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
