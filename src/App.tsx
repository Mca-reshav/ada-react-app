import { FounderInfo } from "./components/FounderInfo"
// import GradientButton from "./components/GradientButton"
import HeroSlider from "./components/HeroSlider"
import { Navbar } from "./components/Navbar"
import './App.css'
import { Treatment } from "./components/Treatment"
import { Union } from "./components/Union"
import { WhyShould } from "./components/WhyShould"
import { TestimonialSlider } from "./components/TestimonialSlider"
import { SimpleSteps } from "./components/SimpleSteps"
import { FollowingStates } from "./components/FollowingStates"
import { Faq } from "./components/Faq"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="main-container">
      {/* <GradientButton text="Learn More" onClick={() => alert("Clicked!")} /> */}
        <Navbar/>
        <HeroSlider/>
        <FounderInfo/>
        <Treatment/>
        <Union/>
        <WhyShould/>
        <TestimonialSlider/>
        <SimpleSteps/>
        <FollowingStates/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default App
