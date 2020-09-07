import React from "react";
import "../../styles/pages/PortfolioPage.scss";
import { Row, Col } from "react-bootstrap";
import portfolio from "../../images/portfolio/Portfolio.png";
import furnituresShop from "../../images/portfolio/FurnituresShop.png";
import blogApp from "../../images/portfolio/Blog-App.png";
import calculator from "../../images/portfolio/Calculator.png";
import toDoApp from "../../images/portfolio/toDoApp.png";
import weatherApp from "../../images/portfolio/WeatherApp.png";

const PortfolioPage = () => {
  return (
    <section className="portfolio">
      <span className="portfolio_title">Wybrane projekty</span>
      <div className="portfolio_projects">
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Portfolio</span>
            <div className="portfolio_wrapper">
              <img
                src={portfolio}
                alt="portfolio"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kotwin98.github.io/portfolio_pl/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kotwin98/portfolio_pl"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Prosta strona portfolio napisana w React z użyciem React Router i kilku animacji.{" "}
              <strong>
                Tech stack: HTML | Sass | React | React Router | Npm
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Blog</span>
            <div className="portfolio_wrapper">
              <img
                src={blogApp}
                alt="techstore"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                {/* <a
                  className="portfolio_button"
                  target="_blank"
                  href="#"
                >
                  DEMO
                </a> */}
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kotwin98/BlogApp"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Blog zrobiony z MERN stack. Pozwala na szybkie i łatwe dodawanie postów.{" "}
              <strong>
                Tech stack: MERN (MongoDB, Express, React, Node.js) | Sass.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Sklep meblowy</span>
            <div className="portfolio_wrapper">
              <img
                src={furnituresShop}
                alt="firstgame"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://loving-goldwasser-86b571.netlify.app/#"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kotwin98/project-wdp-1906-04"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Czteroosobowy projekt napisany w ramach Bootcampu Kodilla. Projekt rozwijany był przez miesiąc jako ćwiczenie pracy w grupie.{" "}
              <strong>
                Tech stack: HTML | Sass | JavaScript.
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">ToDoApp</span>
            <div className="portfolio_wrapper">
              <img
                src={toDoApp}
                alt="adminpanel"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kotwin98.github.io/toDoApp/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kotwin98/toDoApp"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Aplikacja pozwalająca na dodawanie i zapisywanie zadań.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | React | Yarn.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Kalkulator</span>
            <div className="portfolio_wrapper">
              <img
                src={calculator}
                alt="kanbanboard"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kotwin98.github.io/calculator/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kotwin98/calculator"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Prosty kalkulator napisany w JavaScript.{" "}
              <strong>
                Tech stack: HTML | CSS | RWD | JavaScript
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Aplikacja pogodowa</span>
            <div className="portfolio_wrapper">
              <img
                src={weatherApp}
                alt="commentsapp"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kotwin98.github.io/weatherApp/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Kotwin98/weatherApp"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Aplikacja pozwalająca sprawdzić pogodę w dowolnym mieście.{" "}
              <strong>
                Tech stack: HTML | Sass | API | React | Yarn.
              </strong>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PortfolioPage;