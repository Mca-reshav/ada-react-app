import GradientButton from "./GradientButton";
import logo from "../assets/logo.svg";
import './styles/navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      
      {/* Left */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="brand">Ada Psychiatry</span>
      </div>

      {/* Right */}
      <div className="nav-right">
        <ul className="nav-links">
          <li>Who we are</li>
          <li>Who we treat</li>
          <li>Services</li>
          <li>Resources</li>
        </ul>

        <GradientButton
          text="Book an Appointment"
          onClick={() => console.log("clicked")}
        />
      </div>

    </div>
  );
};