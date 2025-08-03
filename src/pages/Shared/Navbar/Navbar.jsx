import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaSearch, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="w-full shadow text-black">
      {/* Top Bar */}
      <div className="bg-gray-100 text-[10px] py-1 md:px-44 flex flex-col md:flex-row justify-between items-center text-gray-700 gap-1">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> Mirpur, Dhaka, Bangladesh</span>
          <span className="flex items-center gap-1"><FaPhoneAlt /> +88 01XXXXXXXX</span>
          <span className="flex items-center gap-1"><FaEnvelope /> admin@XXXXXXXgmail.com</span>
        </div>
        <div className="flex gap-3 mt-1 md:mt-0">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaYoutube className="cursor-pointer hover:text-red-500" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar bg-white px-44">
        {/* Left: Logo */}
        <div className="navbar-start flex items-center gap-2 text-md">
          <img src="" alt="MIST-IEEE-logo-2" alt="MIST-IEEE-logo" alt="MIST-IEEE-logo-1" alt="IEEE Logo" className="h-10 w-20" />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-[12px]">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>

            <li>
              <details>
                <summary>Members</summary>
                <ul className="p-2 bg-base-100">
                  <li><a>Executive</a></li>
                  <li><a>General</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Chapters</summary>
                <ul className="p-2 bg-base-100">
                  <li><a>WIE (Women in Engineering)</a></li>
                  <li><a>RAS (Robotics & Automation Society)</a></li>
                  <li><a>CS (Computer Society)</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Events</summary>
                <ul className="p-2 bg-base-100">
                  <li><a>RAS</a></li>
                  <li><a>WIE</a></li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Gallery</summary>
                <ul className="p-2 bg-base-100">
                  <li><a>Mission</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </details>
            </li>

            <li><a>Blog/News</a></li>

            <li>
              <details>
                <summary>Membership</summary>
                <ul className="p-2 bg-base-100">
                  <li><a>Projects</a></li>
                  <li><a>Events</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-white border-t shadow-md lg:hidden px-4 py-2">
          <ul className="flex flex-col gap-1 text-sm">
            <li><a>Home</a></li>
            <li><a>News</a></li>
            <li>
              <details>
                <summary className="cursor-pointer">Members</summary>
                <ul className="pl-4">
                  <li><a>Executive</a></li>
                  <li><a>General</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">Newsletters</summary>
                <ul className="pl-4">
                  <li><a>2024</a></li>
                  <li><a>2025</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">Chapters</summary>
                <ul className="pl-4">
                  <li><a>RAS</a></li>
                  <li><a>WIE</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">About</summary>
                <ul className="pl-4">
                  <li><a>Mission</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </details>
            </li>
            <li><a>Join IEEE</a></li>
            <li>
              <details>
                <summary className="cursor-pointer">CARG SIGHT</summary>
                <ul className="pl-4">
                  <li><a>Projects</a></li>
                  <li><a>Events</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
