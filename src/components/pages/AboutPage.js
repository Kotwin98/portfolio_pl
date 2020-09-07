import React from "react";
import "../../styles/pages/AboutPage.scss";
import { Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <section className="about">
      <Row>
        <Col md={5}>
          <span className="about_title">Start</span>
          <p className="about_text">
            Początek mojego zapoznania się z programowaniem rozpoczął się od przypadkowego znalezienia poradnika c++ na youtube.
            Poradnik bardzo mnie zaciekawił, więc od razu po obejrzeniu ściągnąłem środowisko CodeBlocks i samemu napisałem kilka linijek kodu.
            Po czasie chciałem spróbować innych technologii, dlatego zainteresowałem się front-endem.
          </p>
        </Col>
        <Col md={5}>
          <span className="about_title">Nauka</span>
          <p className="about_text">
            Od początku 2019 roku systematycznie poszerzam swoją wiedzę na temat front-endu. Ukończyłem intesywny 9-cio miesięczny kurs pod okiem indywidualnego mentora - Bootcamp Kodilla Web Developer Plus.
            W międzyczasie udało mi się także ukończyć kilka kursów na platformie Udemy m.in. React - The Complete Guide, The Complete JavaScript Course.
            Aktualnie uczę się bardzo dużo samemu oraz rozwijam swoje projekty używając wcześniej zdobytej wiedzy i nowych rozwiązań które znajduje w internecie.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <span className="about_title">Aktualnie</span>
          <p className="about_text">
            Obecnie szukam pracy lub stażu w IT jako Junior Front-end Developer.
            Bardzo szybko się uczę dlatego, jestem też gotów podjąć inne stanowiska używające innych technologii, niż te które mi są obecnie znane. 
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AboutPage;