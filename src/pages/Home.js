import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const slides = [
  { yearStart: 2013, image: "/images/festa2014.jpg" },
  { yearStart: 2014, image: "/images/festa2015.jpg" },
  { yearStart: 2015, image: "/images/festa2016.jpg" },
  { yearStart: 2016, image: "/images/festa2017.jpg" },
  { yearStart: 2017, image: "/images/festa2018.jpg" },
  { yearStart: 2018, image: "/images/festa2019.jpg" },
  { yearStart: 2019, image: "/images/festa2020.jpg" },
  { yearStart: 2020, image: "/images/festa2021.jpg" },
  { yearStart: 2021, image: "/images/festa2022.jpg" },
  { yearStart: 2022, image: "/images/festa2023.jpeg" },
  { yearStart: 2023, image: "/images/festa2024.jpeg" },
];

const Home = () => {
  useEffect(() => {
      document.title = "Home-Festa";
    }, []);
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the World of BTS 🎉</h1>
        <p>Get ready to explore the most iconic moments from each year of the BTS FESTA!</p>
      </header>

      <section className="slider-section">
        <div className="slider">
          {slides.map(({ yearStart, image }, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="slide-background">
                <span className="year-range">
                  {yearStart} - {yearStart + 1}
                </span>
                <Link to={`/festa/${yearStart}`}>
                  <button className="details-button">Discover More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

