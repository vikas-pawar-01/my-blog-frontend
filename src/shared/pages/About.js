import React from 'react';
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import useScript from "../hooks/script-hook";

const About = () => {
    const url = 'https://platform.linkedin.com/badges/js/profile.js';
    useScript(url);

    return (
        <Modal>
            <a target="_blank" href="https://vikaspawar.info/#home">
                About
            </a>
        </Modal>
    )
}

export default About;
