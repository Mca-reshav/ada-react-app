import whyShouldImage from '../assets/why-should-image.svg'
import { Accordion } from './Accordion'
import './styles/why-should.css'

export const WhyShould = () => {
    return (
        <div className="why-should-main-container">
            <div className="why-should-container">
                <div className="why-should-container-left">
                    <img src={whyShouldImage} alt="why-should-image"/>
                </div>
                <div className="why-should-container-right">
                    <h4>Why Should You Choose Ada Psychiatry?</h4>
                    <Accordion/>
                </div>
            </div>
        </div>
    )
}