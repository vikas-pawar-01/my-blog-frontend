import Modal from "./Modal";
import { Link } from "react-router-dom";
import useScript from "../components/useScript";

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
                data-vanity="vikas-pawar-01"
                data-version="v1">
                <Link
                    className="badge-base__link LI-simple-link"
                    to="https://in.linkedin.com/in/vikas-pawar-01?trk=profile-badge"
                >
                </Link>
            </div>
        </Modal>
    )
}

export default About;
