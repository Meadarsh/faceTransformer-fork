"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div className="w-full bg-transparent flex flex-col md:flex-row fixed justify-between items-center h-16 z-40 px-4">
      <div className="logo absolute left-6 md:static p-4">
        <a href="/">
          <img src="/img/Home-page/logo (7).png" alt="Logo" className="h-10" />
        </a>
      </div>

      <div
        className={`nav-items font-semibold flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center md:static absolute w-full md:w-auto top-16 md:top-auto left-0 md:left-auto md:mr-56 bg-[#DED0C5] md:bg-transparent transition-all duration-300 ${
          isClick ? "block" : "hidden md:flex"
        }`}
      >
        <a
          href="/"
          className="py-2 px-4 md:p-0 text-center md:text-left"
        >
          HOME
        </a>
        <a
          href="/gallery"
          className="py-2 px-4 md:p-0 text-center md:text-left"
        >
          GALLERY
        </a>
        <a
          href="/services"
          className="py-2 px-4 md:p-0 text-center md:text-left"
        >
          SERVICES
        </a>
        <a
          href="/blog"
          className="py-2 px-4 md:p-0 text-center md:text-left"
        >
          BLOG
        </a>
        <a
          href="/contact"
          className="py-2 px-4 md:p-0 text-center md:text-left"
        >
          CONTACT US
        </a>
        <a
          href="/about"
          className="py-2 px-4 md:p-0 text-center md:text-left"
        >
          ABOUT
        </a>
      </div>

      <div className="md:hidden absolute right-6">
        <button
          onClick={toggleNavbar}
          aria-expanded={isClick}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
        >
          {isClick ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
