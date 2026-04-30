import GradientButton from "./GradientButton"
import unionIcon from '../assets/Union.svg'
import unionGroup1 from '../assets/union-group-icons.svg'
import unionGroup2 from '../assets/union-group-icons2.svg'
import unionGroup3 from '../assets/union-group-icons3.svg'
import unionGroup4 from '../assets/union-group-icons4.svg'
import './styles/union.css'
export const Union = () => {
    const serviceItems = [
        {
            image: unionGroup1,
            text: 'Psychiatric Evaluation'
        },
        {
            image: unionGroup2,
            text: 'Medication Management'
        },
        {
            image: unionGroup3,
            text: 'Supportive Psychotherapy'
        },
        {
            image: unionGroup4,
            text: 'ADHD Screening'
        },
        {
            image: unionGroup1,
            text: 'MAT Treatment'
        },
        {
            image: unionGroup2,
            text: 'Gene Sight Testing'
        }
    ]

    return (
        <div className="union-main-container">
            <div className="union-top-banner">
                <img src={unionIcon} alt="union-banner" />
                <h3>“</h3>
                <h4>“We help people living with and experiencing difficult times”</h4>
            </div>

            <div className="union-container">
                <h3>Our Services</h3>

                <div className="union-services-list">
                    {serviceItems.map((item, index) => (
                        <div className="union-services-list-item" key={index}>
                            <img src={item.image} alt={item.text} />
                            <h6>{item.text}</h6>
                        </div>
                    ))}
                </div>
                <div className="union-button">
                    <GradientButton text="View our services" arrow={true} />
                </div>
            </div>
        </div>
    )
}