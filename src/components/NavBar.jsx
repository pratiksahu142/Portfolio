import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      name: "Home"
    },
    {
      id: 2,
      link: "about",
      name: "About"
    },
    {
      id: 3,
      link: "portfolio",
      name: "Portfolio"
    },
    {
      id: 4,
      link: "skills",
      name: "Skills"
    },
    {
      id: 5,
      link: "workexperience",
      name: "Work Experience"
    },
    {
      id: 6,
      link: "contact",
      name: "Contact"
    },
  ];

  return (
      <div className="flex flex-wrap justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
          <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-monaco ml-2">Pratik Sahu</h1>
          </div>

          <ul className="hidden md:flex">
              {links.map(({ id, link, name }) => (
                  <li
                      key={id}
                      className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                  >
                      <Link to={link} smooth duration={500}>
                          {name}
                      </Link>
                  </li>
              ))}
          </ul>

          <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                  {links.map(({ id, link }) => (
                      <li
                          key={id}
                          className="px-4 cursor-pointer capitalize py-6 text-2xl sm:text-3xl md:text-4xl"
                      >
                          <Link
                              onClick={() => setNav(!nav)}
                              to={link}
                              smooth
                              duration={500}
                          >
                              {link}
                          </Link>
                      </li>
                  ))}
              </ul>
          )}
      </div>

  );
};

export default NavBar;