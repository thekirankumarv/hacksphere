import { useNavigate } from "react-router-dom";
import rocketIcon from "../assets/rocket-icon.svg";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-between h-auto max-w-6xl mx-auto py-16 lg:py-32 pt-20 px-4"> {/* Added px-4 for horizontal padding */}
        <div className="space-y-8 w-full lg:w-2/3">
          <div className="space-y-4">
            <h1 className="font-semibold text-3xl lg:text-4xl"> {/* Adjusted font size for responsiveness */}
              Accelerate Innovation with Global AI Challenges
            </h1>
            <p className="text-white text-base lg:text-lg lg:w-4/6"> {/* Adjusted text size */}
              AI Challenges at Asity simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets, allowing you to foster learning through competitions.
            </p>
          </div>
          <button
            className="bg-white text-base lg:text-lg text-custom-dark font-extrabold rounded-xl px-6 lg:px-7 py-2 lg:py-3" // Adjusted padding and text size
            onClick={() => navigate("/hackathon/admin")}
          >
            Create Challenge
          </button>
        </div>
        <img src={rocketIcon} alt="header illustration" className="w-2/3 lg:w-1/3 mt-8 lg:mt-0" />
      </section>
    </>
  );
};

export default Header;
