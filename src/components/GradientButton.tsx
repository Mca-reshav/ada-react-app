import "./styles/gradient-button.css";

interface IButton {
  text: string,
  onClick?: ()=> void,
  arrow?: boolean
}
const GradientButton = ({ text, onClick, arrow }: IButton) => {
  return (
    <button className="gradient-btn" onClick={onClick}>
      <span className="btn-text">{text}</span>
      {arrow && <span className="btn-arrow">→</span>}
    </button>
  );
};

export default GradientButton;