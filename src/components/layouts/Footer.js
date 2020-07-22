import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layouts/Footer.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <ul className="footer">
                <li>
                <NavLink exact to="/about" className="footer_menu">
                    About me
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/skills" className="footer_menu">
                    Skills
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/portfolio" className="footer_menu">
                    Portfolio
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/contact" className="footer_menu">
                    Contact
                </NavLink>
                </li>
            </ul>
            <p className="footer_links">
                &copy;2020{" "}
                <a href="https://github.com/Kotwin98/portfolio_v2">
                <b>Mateusz Kotwiński</b>
                </a>
                <a className="footer_social" href="https://github.com/Kotwin98">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                className="footer_social"
                href="https://www.linkedin.com/in/mateusz-kotwi%C5%84ski"
                >
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                className="footer_social footer_social--hidden"
                href="mailto:mkotwinski98@gmail.com"
                >
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </p>
        </>
    );
};

export default Footer;