import { Accordion, type AccordionItem } from './Accordion'
import GradientButton from './GradientButton';
import './styles/faq.css'

export const Faq = () => {
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
    return (
        <div className='faq-main-container'>
            <div className="faq-container">
                <h3>Frequently asked questions</h3>
                 <Accordion/>
                 <GradientButton text='See all FAQ' arrow={true}/>
            </div>
        </div>
    )
}