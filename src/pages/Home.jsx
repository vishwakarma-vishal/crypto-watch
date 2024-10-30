import React from "react";
import Button from "../components/Common/Button";
import gradient from "../assets/gradient.png";
import iphone from "../assets/iphone.png";

function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 p-6 sm:flex-row sm:gap-16 sm:p-16 bg-white dark:bg-gray-900">
      {/* Info Section */}
      <div className="max-w-lg text-center sm:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl transition-transform transform duration-1000 ease-out opacity-0 animate-slide-in">
          Track Crypto
        </h1>
        <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400 sm:text-5xl md:text-6xl lg:text-7xl transition-transform transform duration-1000 delay-150 ease-out opacity-0 animate-slide-in">
          Real Time.
        </h1>
        <p className="mt-4 text-md text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl lg:text-2xl transition-transform transform duration-1000 delay-300 ease-out opacity-0 animate-slide-in">
          Stay updated with live crypto prices. <br></br>Check out the dashboard now!
        </p>
        <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:gap-8 transition-transform transform duration-1000 delay-500 ease-out opacity-0 animate-fade-in">
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
        </div>
      </div>

       {/* Image Section */}
       <div className="relative w-auto h-[70vh] sm:h-[70vh] md:mr-0 mr-14">
        <img
          src={gradient}
          alt="Gradient Background"
          className="absolute top-10 left-10 w-[80%] h-[90%] opacity-50 dark:opacity-30"
        />
        <img
          src={iphone}
          alt="iPhone"
          className="relative w-full h-full animate-float"
        />
      </div>
    </div>
  );
}

export default Home;