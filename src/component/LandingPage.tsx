import { MdLocationOn } from "react-icons/md";
import Logo from "./Logo";
import { GiLightningFrequency } from "react-icons/gi";

const LandingPage = () => {
  return (
    <>
      <section className="header">
        <div className="header-bg"></div>
        <span className="brand">
            <Logo/>
          MyLocations
        </span>
        <nav className="navbar">
          <span>Sign In</span>
          <span>Sign Up</span>
        </nav>
      </section>
    </>
  );
};

export default LandingPage;
