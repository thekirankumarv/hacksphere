import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    // Check if scrolling down
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setVisible(false); // Hide when scrolling down
    } 
    // Check if scrolling up
    else if (window.scrollY < lastScrollY) {
      // Only show the navbar if the user is at the top
      if (window.scrollY < 50) {
        setVisible(true); // Show when at the top
      }
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`bg-white backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <Link to="/hackathon">
          <img className="h-12" src="/image/images.png" alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
