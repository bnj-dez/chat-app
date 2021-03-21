import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.status,
        }
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="avatar"/>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div
                        className="status"
                        onClick={() => {
                            const newOnline = !this.state.online;
                            this.setState({online: newOnline})
                        }}
                    >
                        <div className={this.state.online ? "status-online" : "status-offline"}/>
                        <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default Contact;
