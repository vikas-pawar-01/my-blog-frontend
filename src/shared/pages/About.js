import React from 'react';
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import useScript from "../hooks/script-hook";

const About = () => {
    const url = 'https://platform.linkedin.com/badges/js/profile.js';
    useScript(url);

    return (
        <Modal>
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="vikaspawar01"
                data-version="v1">
                <Link className="badge-base__link LI-simple-link"
                    to="https://in.linkedin.com/in/vikaspawar01?trk=profile-badge">
                    Vikas Pawar
                </Link>
            </div>

        </Modal>
    )
}

export default About;
