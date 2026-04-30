import { useState, useEffect } from "react";
import bg1 from "../assets/slider.svg";
import gradientOverlay from "../assets/slider-gradient.svg";
import "./styles/hero-slider.css";

const slides = [
  {
    title: "Need a mental health provider?",
    description: "No Look Further",
    subDescription: 'Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.',
    image: bg1,
  },
  {
    title: "Compassionate & Confidential",
    description:
      "We provide a safe space for healing and growth.",
    image: bg1,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img
        src={slides[current].image}
        alt="slide"
        className="hero-bg"
      />

      <img
        src={gradientOverlay}
        alt="overlay"
        className="hero-overlay"
      />

      <div className="hero-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].description}</p>
        <p>{slides[current].subDescription}</p>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;