import React from "react";
import "../../styles/pages/ContactPage.scss";
//bootstrap
import { Row, Col } from "react-bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <section className="contact">
      <span className="contact_title">Kontakt</span>
      <div className="contact_socials">
        <Row>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/11DTTAKTJ81I6IQodvYcT_2UkpH3BJ8me/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/11DTTAKTJ81I6IQodvYcT_2UkpH3BJ8me/view?usp=sharing"
            >
              Curriculum Vitae
            </a>
          </Col>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:mkotwinski98@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="mailto:mkotwinski98@gmail.com">
              mailto:mkotwinski98@gmail.com
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mateusz-kotwi%C5%84ski/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mateusz-kotwi%C5%84ski/"
            >
              linkedin.com/in/mateusz-kotwiński
            </a>
          </Col>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kotwin98"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kotwin98"
            >
              github.com/Kotwin98
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactPage;