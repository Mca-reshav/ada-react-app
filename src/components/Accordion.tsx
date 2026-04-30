import { useState } from "react";
import './styles/accordion.css'

export type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    title: "Convenient access",
    content:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    title: "Concierge approach",
    content: "Personalized care tailored to your needs.",
  },
  {
    title: "High quality service",
    content: "We maintain the highest standards in patient care.",
  },
  {
    title: "Trusted and empathic providers",
    content: "Our providers are compassionate and experienced.",
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
            <h5>{item.title}</h5>
          </div>

          {activeIndex === index && (
            <div className="accordion-content">
              <span>{item.content}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};