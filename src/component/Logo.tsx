import { MdLocationOn } from "react-icons/md";

const Logo = () => {
  return (
    <>
      <svg
        width="0"
        height="0"
      >
        <linearGradient
          id="blue-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop
            stopColor="#800080"
            offset="0%"
          />
          <stop
            stopColor="blue"
            offset="100%"
          />
        </linearGradient>
      </svg>
      <i>
        <MdLocationOn className="logo" />
      </i>
    </>
  );
};

export default Logo;
