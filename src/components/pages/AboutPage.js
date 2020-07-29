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
            My first steps with programming started when I acidently found a tutorial for c++ on youtube. It got me so intrested that immidiatly after the video I downloaded CodeBlocks and started writing my first lines of code.
            For the next few weeks I had been watching other parts of the tutorial and getting better with coding. I wanted to try something else that is more visiual and I got intrested with front-end.
          </p>
        </Col>
        <Col md={5}>
          <span className="about_title">Learning</span>
          <p className="about_text">
            From the start of 2019 I had been learning front-end. I finished an intense 9 month long bootcamp with help of an expirianced teacher - Bootcamp Kodilla Web Developer Plus.
            In the meantime I done few courses on Udemy such as React - The Complete Guide, The Complete JavaScript Course.
            Currently I learn alot on my own and I develop my own projects using knowlege I learned before and sources on the internet.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <span className="about_title">Currently</span>
          <p className="about_text">
            Nowadays I am looking for a job or an internship as Junior Front-end Developer. I learn very fast so I am also ready to take other positions with technologies diffrent than I know.
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default AboutPage;