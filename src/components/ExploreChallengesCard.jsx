import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDateDiff } from "../utils/dateFunctions";
import { formatDate1 } from "../utils/dateFunctions"; // Import the correct date formatting utility
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ExploreChallengesCard = ({ item }) => {
  const [diff, setDiff] = useState({});

  const status =
    new Date() > new Date(item.startDate) && new Date() < new Date(item.endDate)
      ? "Active"
      : new Date() > new Date(item.endDate)
      ? "Past"
      : "Upcoming";

  item.status = status;

  useEffect(() => {
    const timer =
      (status === "Upcoming" || status === "Active") &&
      setInterval(() => {
        setDiff(getDateDiff(new Date(), new Date(item.startDate)));
      }, 1000);
    return () => clearInterval(timer);
  }, [item, status]);

  return (
    <Link to={`/hackathon/details/${item.id}`}>
      <div className="m-8 bg-white rounded-xl overflow-hidden shadow-md h-full"> 
        <img 
          src={item.image} 
          alt="card header" 
          className="w-full h-32 object-cover" // Ensure responsive behavior
        />
        <div className="p-6 flex flex-col items-center space-y-4">
          <div
            className={`px-3 py-1 text-center ${
              status === "Upcoming"
                ? "bg-orange-100"
                : status === "Active"
                ? "text-custom-green bg-green-100"
                : "bg-red-100"
            } rounded-lg`}
          >
            {status}
          </div>

          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-sm text-gray-600">
            {status === "Upcoming"
              ? "Starts in"
              : status === "Active"
              ? "Ends in"
              : "Ended on"}
          </p>
          {status !== "Past" ? (
            <div className="w-full grid grid-cols-4 divide-x text-center">
              <div>
                <h4>{diff.day}</h4>
                <p>Days</p>
              </div>
              <div>
                <h4>{diff.hour}</h4>
                <p>Hours</p>
              </div>
              <div>
                <h4>{diff.minute}</h4>
                <p>Mins</p>
              </div>
              <div>
                <h4>{diff.second}</h4>
                <p>Secs</p>
              </div>
            </div>
          ) : (
            <h4 className="text-center">{formatDate1(item.endDate)}</h4>
          )}
          <div className="space-x-4">
            <button
              disabled={status === "Past"}
              className="flex items-center text-white bg-custom-green rounded-xl px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IoMdCheckmarkCircleOutline className="mr-2 text-xl" />
              Participate now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreChallengesCard;
