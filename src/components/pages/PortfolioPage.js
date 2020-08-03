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
      <span className="portfolio_title">Selected projects</span>
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
                  href="https://kotwin98.github.io/portfolio/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  href="https://github.com/Kotwin98/portfolio"
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Simple portfolio website done in React with React Router and it also features some small animations{" "}
              <strong>
                Tech stack: HTML | Sass | React | React Router | Npm
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Blog App</span>
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
                  href="#"
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Blog app done with MERN stack. You can easily and posts and see them displayed on the page.{" "}
              <strong>
                Tech stack: MERN (MongoDB, Express, React, Node.js) | Sass.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Furniture Store</span>
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
                  href="https://loving-goldwasser-86b571.netlify.app/#"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  href="https://github.com/Kotwin98/project-wdp-1906-04"
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Project done in a team with 3 other people. This project was developed for a month as an exercise for working in a group.{" "}
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
                  href="https://kotwin98.github.io/toDoApp/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  href="https://github.com/Kotwin98/toDoApp"
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              App developed to quickly write and save tasks.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | React | Yarn.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Calculator</span>
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
                  href="https://kotwin98.github.io/calculator/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  href="https://github.com/Kotwin98/calculator"
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Simple calculator done in JavaScript.{" "}
              <strong>
                Tech stack: HTML | CSS | RWD | JavaScript
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Weather App</span>
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
                  href="https://kotwin98.github.io/weatherApp/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  href="https://github.com/Kotwin98/weatherApp"
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              App that allows to check weather in any place by writing a city name.{" "}
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