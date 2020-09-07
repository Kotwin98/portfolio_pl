import React from "react";
import "../../styles/pages/HomePage.scss";

const HomePage = () => {
  return (
    <section className="home">
      <span className="home_title">Cześć!</span>
      <p className="home_text">
        Nazywam się Mateusz Kotwiński.
        Około 1,5 roku temu postanowiłem zostać Front-end developerem.
        Ukończyłem intensywny 9-cio miesięczny kurs programowania pod okiem indywidualnego mentora - Bootcamp Web Developer Plus w Kodilla.
        Ponadto ukończyłem kilka kursów na Udemy i dużo czasu spędziłem na samodzielnej pracy.
        Stale pogłębiam swoją wiedze, zwłaszcza w JavaScript i React.
        Posiadam wiele projektów które pokazują moje umiejętności.
        Obecnie poszukuje swojej pierwszej pracy w IT. 
      </p>
    </section>
  );
};

export default HomePage;