import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="Image de profil"/>
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className={props.status ? "status-online" : "status-offline"} />
                    <p className="status-text">{props.status ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default Contact;
