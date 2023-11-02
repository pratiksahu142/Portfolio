import React from 'react'
import HeroImage from '../assets/heroImage.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-scroll";

const Home = () => {

    const handleDemoUrl = () => {
        window.open(
            "https://drive.google.com/file/d/17ocxrI790afnKYC4uR83J84M2n6fL6Vs/view?usp=sharing",
            '_blank')
    }

    return (
        <div name="home"
             className="flex flex-col justify-center min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div
                className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md text-lg">
                        I'm a passionate developer who is always looking for new challenges. I love
                        learning new things and building things.
                        I have Experience in MERN stack, Java Frameworks, Frontend/Backend/Cloud
                        Technologies, and DevOps
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
          </span>
                        </Link>
                        <span>
          <button
              onClick={() => handleDemoUrl()}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:text-black text-white py-2 px-4 rounded inline-flex items-center"
          >
            <svg
                className="fill-current w-9 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            <span>Resume</span>
          </button>
        </span>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="My profile"
                         className="rounded-2xl mx-auto w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2"/>
                </div>
            </div>
        </div>

    )
}

export default Home;
