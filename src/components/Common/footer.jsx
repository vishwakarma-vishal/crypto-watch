import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-black text-white py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <h2
          className="text-2xl font-bold cursor-pointer mb-4 sm:mb-6"
          onClick={topFunction}
        >
          CryptoTracker<span className="text-blue-500">.</span>
        </h2>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
