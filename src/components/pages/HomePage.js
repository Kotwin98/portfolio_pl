import React from "react";
import "../../styles/pages/HomePage.scss";

const HomePage = () => {
  return (
    <section className="home">
      <div className="home_welcome">
        <span className="home_header">Hi!</span>
        <p className="home_text">
          My name is Mateusz Kotwiński.
          About 18 months ago I planned to become a Front-end Developer.
          I finished an intense 9 month long bootcamp with
          help of an expirianced teacher - Bootcamp Web Developer Plus in Kodilla.
          I also finished a few interesting courses on Udemy and I had spend a lot of time studying on my own.
          Im still improving my skills, especially in JavaScript and React.
          I have a lot of projects to show my knowledge.
          Currently Im looking for my first job in IT. 
        </p>
      </div>
    </section>
  );
};

export default HomePage;