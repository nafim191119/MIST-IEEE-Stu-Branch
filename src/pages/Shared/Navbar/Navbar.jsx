import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);

  const navLinkStyle =
    "relative inline-block px-2 py-2 transition-colors duration-300 hover:text-yellow-400 " +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 " +
    "after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-[#002D62] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side logo */}
          <div className="flex items-center">
            <Link to={'/'} className="flex items-center rounded">
              <img
                src="https://i.ibb.co.com/hkzT3R5/IEEE-1-removebg-preview.png"
                alt="IEEE MIST SB"
                className="h-48 w-52 mt-3"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-4 text-white font-semibold uppercase tracking-wide text-[10px]">
              <li>
                <Link to={'/'} className={navLinkStyle}>
                  Home
                </Link>
              </li>

              <li className="group relative cursor-pointer">
                <span className={navLinkStyle}>Activities</span>
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white p-2 rounded shadow-lg min-w-[80px] text-black">
                  <li>
                    <a
                      href="#events"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#news"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      Achievements
                    </a>
                  </li>
                </ul>
              </li>

              <li className="group relative cursor-pointer">
                <span className={navLinkStyle}>Societies & AG</span>
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white p-2 rounded shadow-lg min-w-[80px] text-black">
                  <li>
                    <a
                      href="#ras"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      RAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pas"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      PAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ads"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      ADS
                    </a>
                  </li>
                  <li>
                    <a
                      href="#wie"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      WIE
                    </a>
                  </li>
                </ul>
              </li>

              <li className="group relative cursor-pointer">
                <span className={navLinkStyle}>Members</span>
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white p-2 rounded shadow-lg min-w-[180px] text-black">
                  <li>
                    <Link
                      to="/members"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      Panel
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#officers"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      Officers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#volunteers"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      Volunteers
                    </a>
                  </li>

                  {/* Nested submenu */}
                  <li
                    className="relative"
                    onMouseEnter={() => setIsTeamsOpen(true)}
                    onMouseLeave={() => setIsTeamsOpen(false)}
                  >
                    <span className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white cursor-pointer">
                      Teams ▸
                    </span>

                    {isTeamsOpen && (
                      <ul className="absolute left-full top-0 bg-white p-2 rounded shadow-lg min-w-[220px] text-black">
                        <li>
                          <a
                            href="#web"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Website Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="#media"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Media
                          </a>
                        </li>
                        <li>
                          <a
                            href="#events"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Events & Management
                          </a>
                        </li>
                        <li>
                          <a
                            href="#graphics"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Graphics
                          </a>
                        </li>
                        <li>
                          <a
                            href="#pr"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Public Relation
                          </a>
                        </li>
                        <li>
                          <a
                            href="#promotions"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Promotions
                          </a>
                        </li>
                        <li>
                          <a
                            href="#finance"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Finance & Corporate
                          </a>
                        </li>
                        <li>
                          <a
                            href="#logistics"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Logistics & Operations
                          </a>
                        </li>
                        <li>
                          <a
                            href="#membership"
                            className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                          >
                            Membership Development
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <a
                      href="#exemplary"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      Exemplary Members
                    </a>
                  </li>
                  <li>
                    <a
                      href="#all-members"
                      className="block px-3 py-2 hover:bg-blue-900 rounded hover:text-white"
                    >
                      All Members & Statistics
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#about" className={navLinkStyle}>
                  About
                </a>
              </li>
              <li>
                <a href="#publications" className={navLinkStyle}>
                  Publications
                </a>
              </li>
              <li>
                <a href="#contact" className={navLinkStyle}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#get-involved" className={navLinkStyle}>
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Right side button */}
          <div className="flex items-center">
            <a
              href="#portal"
              className="btn btn-outline btn-info btn-sm font-semibold"
            >
              IEEE MIST SB Portal
            </a>

            {/* Mobile toggle */}
            <button
              className="text-white text-2xl lg:hidden ml-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#002D62] px-4 py-4 space-y-2 text-white font-medium uppercase">
          <a href="#home" className="block">
            Home
          </a>

          <details>
            <summary>Activities</summary>
            <ul className="ml-4">
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            </ul>
          </details>

          <details>
            <summary>Societies & AG</summary>
            <ul className="ml-4">
              <li>
                <a href="#ras">RAS</a>
              </li>
              <li>
                <a href="#pas">PAS</a>
              </li>
              <li>
                <a href="#ads">ADS</a>
              </li>
              <li>
                <a href="#wie">WIE</a>
              </li>
            </ul>
          </details>

          <details>
            <summary>Members</summary>
            <ul className="ml-4">
              <li>
                <a href="#panel">Panel</a>
              </li>
              <li>
                <a href="#officers">Officers</a>
              </li>
              <li>
                <a href="#volunteers">Volunteers</a>
              </li>
              <details>
                <summary>Teams</summary>
                <ul className="ml-4">
                  <li>
                    <a href="#content">Content Writing & Publications</a>
                  </li>
                  <li>
                    <a href="#web">Website Development</a>
                  </li>
                  <li>
                    <a href="#media">Media</a>
                  </li>
                  <li>
                    <a href="#events-management">Events & Management</a>
                  </li>
                  <li>
                    <a href="#graphics">Graphics</a>
                  </li>
                  <li>
                    <a href="#pr">Public Relation</a>
                  </li>
                  <li>
                    <a href="#promotions">Promotions</a>
                  </li>
                  <li>
                    <a href="#finance">Finance & Corporate</a>
                  </li>
                  <li>
                    <a href="#logistics">Logistics & Operations</a>
                  </li>
                  <li>
                    <a href="#membership">Membership Development</a>
                  </li>
                </ul>
              </details>
              <li>
                <a href="#exemplary">Exemplary Members</a>
              </li>
              <li>
                <a href="#all-members">All Members & Statistics</a>
              </li>
            </ul>
          </details>

          <a href="#about" className="block">
            About
          </a>
          <a href="#publications" className="block">
            Publications
          </a>
          <a href="#contact" className="block">
            Contact
          </a>
          <a href="#get-involved" className="block">
            Get Involved
          </a>
        </div>
      )}
    </nav>
  );
}
