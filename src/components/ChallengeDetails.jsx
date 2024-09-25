import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { items } from "../utils/items";
import { MdOutlineWatchLater } from "react-icons/md";
import CarbonSkillIcon from "../assets/carbon_skill-level-basic.svg";
import Navbar from "../components/Navbar";

const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    const item = items[id];
    setChallenge(item);
  }, [id]);

  const handleDelete = () => {
    items.splice(id, 1);
    navigate("/hackathon");
  };

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <header className="max-w-6xl w-full mx-auto py-12 px-4 md:py-24 md:px-8 space-y-8 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <button className="flex justify-center items-center bg-yellow-300 text-custom-light gap-2 px-4 py-2 rounded-md text-sm">
            <MdOutlineWatchLater className="text-lg" />
            Starts on {challenge.startDate}
          </button>
        </div>
        <div className="space-y-4 md:space-y-8">
          <span className="font-semibold text-white text-3xl md:text-5xl leading-tight block">
            {challenge.title}
          </span>
          <p className="text-white text-base md:text-lg block">
            {challenge.description}
          </p>
        </div>
        <button className="flex gap-2 bg-white rounded-lg px-4 py-2 md:px-6">
          <img src={CarbonSkillIcon} alt="skill-logo" className="w-5 h-5 md:w-6 md:h-6" />
          {challenge.type}
        </button>
      </header>

      <div className="bg-white flex-1 w-full">
        <div className="w-full px-4 md:px-0">
          <nav className="border-b-2 border-b-slate-50">
            <div className="h-16 flex justify-between items-center shadow-xl w-full px-4">
              <div className="h-full p-5 font border-b-4 border-b-green-600 pl-0 md:pl-4">
                Overview
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to={`/hackathon/details/${id}/edit`}
                  className="text-white bg-green-600 rounded-xl px-4 py-2 md:px-8"
                >
                  Edit
                </Link>
                <button
                  className="text-red-600 border-2 border-red-500 p-2 rounded-xl px-4 md:px-6"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </nav>

          <div className="w-full p-4 md:p-6 space-y-4">
            <p className="text-sm md:text-base">
              Butterflies are the adult flying stage of certain insects
              belonging to an order or group called Lepidoptera. The word
              "Lepidoptera" means "scaly wings" in Greek. This name perfectly
              suits the insects in this group because their wings are covered
              with thousands of tiny scales overlapping in rows.
            </p>
            <p className="text-sm md:text-base mt-4">
              An agency of the Governmental Wildlife Conservation is planning to
              implement an automated system based on computer vision so that it
              can identify butterflies based on captured images. As a consultant
              for this project, you are responsible for developing an efficient
              model.
            </p>
            <p className="text-sm md:text-base mt-4">
              Your Task is to build an Image Classification Model using CNN that
              classifies to which class of weather each image belongs to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeDetails;
