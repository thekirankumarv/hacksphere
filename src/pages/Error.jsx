import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-custom-light grid place-content-center place-items-center space-y-8">
      <h2 className="text-white text-2xl font-semibold">404 - Page Not Found</h2>
      <p className="text-white text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className="bg-white text-custom-dark w-fit px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
        onClick={() => navigate("/hackathon")}
        aria-label="Go back to home"
      >
        Go back to home
      </button>
    </section>
  );
};

export default Error;
