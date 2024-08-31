import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi"; // Using React Icons for the arrow icon

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default TopButton;
