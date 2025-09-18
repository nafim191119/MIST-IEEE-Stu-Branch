import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8">
        
        {/* IEEE Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="https://i.ibb.co.com/39BhWv9V/ieee-logo.png"
            alt="IEEE Logo"
            className="h-12"
          />
          <img
            src="https://i.ibb.co.com/hkzT3R5/IEEE-1-removebg-preview.png"
            alt="IEEE MIST SB"
            className="h-20 w-36"
          />
        </div>

        {/* Useful Links */}
        <div className="text-gray-400">
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://ieee.org" target="_blank" rel="noreferrer" className="hover:text-white">IEEE.org</a></li>
            <li><a href="https://ieeexplore.ieee.org/" target="_blank" rel="noreferrer" className="hover:text-white">IEEE Xplore</a></li>
            <li><a href="#" className="hover:text-white">IEEE Standards</a></li>
            <li><a href="#" className="hover:text-white">IEEE Spectrum</a></li>
            <li><a href="#" className="hover:text-white">More Sites</a></li>
          </ul>
        </div>

        {/* About & Activities */}
        <div className="text-gray-400">
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About IEEE MIST SB</a></li>
            <li><a href="#" className="hover:text-white">Upcoming Events</a></li>
            <li><a href="#" className="hover:text-white">Achievements</a></li>
            <li><a href="#" className="hover:text-white">Current Executive Body</a></li>
            <li><a href="#" className="hover:text-white">Exemplary Members</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaXTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
          <p className="text-sm">📧 info@ieeemistsb.org</p>
          <p className="text-sm">📧 contact@ieeemistsb.org</p>
          <p className="text-xs mt-2">Last Updated: 01 June 2025</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
          <div className="space-x-4 mb-2 md:mb-0">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">FAQ</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p>
            © Copyright {new Date().getFullYear()} IEEE MIST SB – All rights reserved. 
            Developed by <span className="text-yellow-400 font-semibold">IEEE MIST SB Web Development Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
