import { useEffect, useState } from "react";
import "./styles/testimonial-slider.css";
import founderImage from '../assets/founder-image.svg'

type Slide = {
  text: string;
  name: string;
  company: string;
  image: string;
};

const slides: Slide[] = [
  {
    text: "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: founderImage,
  },
  {
    text: "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
    name: "John Doe",
    company: "Tech Corp",
    image: founderImage,
  },
  {
    text: "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
    name: "Sarah Lee",
    company: "StartupX",
    image: founderImage,
  },
  {
    text: "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: founderImage,
  },
  {
    text: "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
    name: "John Doe",
    company: "Tech Corp",
    image: founderImage,
  },
  {
    text: "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
    name: "Sarah Lee",
    company: "StartupX",
    image: founderImage,
  },
];

export const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <h4>What Our Patients Are saying</h4>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
      >
        {slides.map((item, index) => {
          const isActive = index === current;

          return (
            <div className="slide" key={index}>
              <div className={`card ${isActive ? "active" : ""}`}>
                <div className="quote-container">
                  <span className="quoted">“</span>
                </div>
                <p className="text">{item.text}</p>
                <div className="card-footer">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <small>{item.company}</small>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};