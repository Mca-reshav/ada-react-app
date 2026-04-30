import GradientButton from "./GradientButton"

type TreatmentProps = {
  imagePos: "left" | "right";
  image: string;
  title: string;
  description: string;
};

const TreatmentComponent: React.FC<TreatmentProps> = ({
  imagePos,
  image,
  title,
  description,
}) => {
  return (
    <>
      {
        imagePos == 'left' ?
          <div className='treatment-container'>
            <div className="treatment-image">
              <img src={image} alt="treatment" />
            </div>

            <div className="treatment-content">
              <h4>{title}</h4>
              <p>{description}</p>
              <GradientButton text="Learn More" arrow={true} />
            </div>
          </div> :
          <div className='treatment-container'>
            <div className="treatment-content">
              <h4>{title}</h4>
              <p>{description}</p>
              <GradientButton text="Learn More" arrow={true} />
            </div>

            <div className="treatment-image">
              <img src={image} alt="treatment" />
              <div className="circle"></div>
            </div>

          </div>
      }
    </>
  );
};

export default TreatmentComponent;

import img1 from "../assets/founder-image.svg";
import img2 from "../assets/founder-image.svg";
import img3 from "../assets/founder-image.svg";
import './styles/treatment.css'
import banner from '../assets/treament-top-banner.svg';

type TreatmentItem = {
  imagePos: "left" | "right";
  image: string;
  title: string;
  description: string;
};

export const Treatment = () => {
  const data: TreatmentItem[] = [
    {
      imagePos: "left",
      image: img1,
      title: "Mental Health",
      description:
        "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    },
    {
      imagePos: "right",
      image: img2,
      title: "Addiction And Recovery",
      description:
        "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    },
    {
      imagePos: "left",
      image: img3,
      title: "Supervised Medical Weight Loss",
      description:
        `The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own.
Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.`,
    },
  ];

  return (
    <>
      <img src={banner} alt='treatment-banner' className="treatment-top-banner" />
      <div className="treatment-main-container">
        <h3>Our Treatment Focus</h3>

        {data.map((item, index) => (
          <TreatmentComponent key={index} {...item} />
        ))}
      </div>
    </>
  );
};