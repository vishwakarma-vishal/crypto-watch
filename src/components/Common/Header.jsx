import Button from "./Button";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between  gap-6 py-4 px-6 bg-white dark:bg-black">
      <div className="flex gap-10">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          <a href="/"> CryptoTracker<span className="text-blue-500">.</span> </a>
        </h1>

        <nav className="hidden md:flex items-center space-x-4">
          <a href="/" className="text-gray-900 dark:text-white">
            Home
          </a>
          <a href="/compare" className="text-gray-900 dark:text-white">
            Compare
          </a>
          <a href="/watchlist" className="text-gray-900 dark:text-white">
            Watchlist
          </a>
        </nav>
      </div>

      <div className="hidden md:block">
        <a href="/dashboard">
          <Button text={"dashboard"} />
        </a>
      </div>

      <div className="md:hidden ml-4">
        <div>
          {/* Menu button visible on smaller screens */}
          <button onClick={() => setOpen(true)} className="p-2">
            <FaBars className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>

          {/* Drawer appears when open is true */}
          {open && (
            <div className="fixed inset-0 z-50 flex justify-end items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
              <div className="relative w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg sm:max-w-sm">
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <FaTimes className="h-6 w-6 text-gray-900 dark:text-white" />
                </button>

                {/* Navigation links */}
                <div className="flex flex-col space-y-4">
                  <a href="/" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                    Home
                  </a>
                  <a href="/compare" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                    Compare
                  </a>
                  <a href="/watchlist" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                    Watchlist
                  </a>
                  <a href="/dashboard" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
