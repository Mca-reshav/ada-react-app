import './styles/founder-info.css'
import founderImage from '../assets/founder-image.svg'
import GradientButton from './GradientButton'

export const FounderInfo = () => {
    return (
        <div className="main-container">
            <div className="container">

                <div className="image">
                    <img src={founderImage} alt="founder-image" />
                </div>

                <div className="info">
                    <h3>Meet The Founder</h3>

                    <div className="info-description">
                        <h4>Lakeisha Appleton</h4>
                        <span>FNP-C, PMHNP- BC</span>
                    </div>

                    <p className="quote">
                       “Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig
                    </p>

                    <GradientButton text="Learn More" arrow={true}/>
                </div>

            </div>
        </div>
    )
}