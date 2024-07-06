import NavBtn from "./NavBtn";
import "./styles/Landing.css";
function Landing() {
  return (
    <>
      <div className="landing-container poppins-regular">
        <div className="nav">
          <span>
            <NavBtn />
          </span>
        </div>

        <div className="yearbook-title">
          <span className="year">2024</span>
          <span className="book">Year</span>
          <span className="title">Book</span>
        </div>
        <div className="department">HU Computer Science Department</div>
      </div>
    </>
  );
}

export default Landing;
