import "./styles/footer.css";
import logo from '../assets/logo.svg';
import social from '../assets/footer-socials.svg'

const footerData = [
  {
    title: "Quick Links",
    items: ["Who We Are", "What We Treat", "Services", "Contact Us"],
  },
  {
    title: "Resources",
    items: ["FAQs", "Blog", "Fees and Insurance"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Return Policy", "Cookie Settings"],
  },
  {
    title: "Business Hours",
    items: ["Monday - Thursday", "09:00 am - 4:00 pm"],
  },
];

export const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-top">
        
        {/* LEFT SECTION */}
        <div className="footer-left">
          {footerData.map((section, index) => (
            <div className="footer-column" key={index}>
              <h5>{section.title}</h5>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <div className="footer-logo-container">
            <img src={logo} alt="logo"/>
            <h4 className="logo">ADA PSYCHIATRY</h4>
          </div>
          <div className="footer-info">
            <h5>Locate us</h5>
            <p>1820 E Ray Road, STE A107, Chandler, Arizona 85225</p>
            <p>Phone: 480-526-9292</p>
          </div>

          <div className="footer-info">
            <h5>For Careers</h5>
            <p>Career@adapsychiatry.com</p>
          </div>

          <div className="footer-info">
            {/* <h5>Follow us</h5> */}
            <div className="social-icons">
              <img src={social} alt="socials"/>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© Ada Psychiatry. All rights reserved.</span>
      </div>
    </div>
  );
};