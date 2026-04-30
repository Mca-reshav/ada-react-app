import GradientButton from "./GradientButton"
import './styles/simple-steps.css'
import seriesImg  from '../assets/simple-steps-series.svg'

export const SimpleSteps = () => {
    return (
        <div className="simple-steps-main-container">
            <div className="simple-steps-container">
                <h4>Four Simple Steps To Get Started</h4>
            <div className="simple-steps-body">
                <img src={seriesImg} alt='simple steps series'/>
            </div>
            <GradientButton text="Schedule a Call" arrow={true}/>
            </div>
        </div>
    )
}