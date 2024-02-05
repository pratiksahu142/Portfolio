import React from 'react'
import HeroImage from '../assets/heroImage.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-scroll";

const Home = () => {

    const handleDemoUrl = () => {
        window.open(
            "https://drive.google.com/file/d/1HeDJG8ZNIy6bFJI5BUGFKAx1jR4ZYqyG/view?usp=sharing",
            '_blank')
    }

    return (
        <div name="home"
             className="flex flex-col justify-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-400">
            <div
                className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-2">
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
                        I'm a  <span className='text-orange-500'>{'Software Engineer'}</span>
                    </h2>
                    <p className="text-white py-4 max-w-md text-lg">
                        Crafting <span className='text-orange-500'>{'<code/>'}</span> that brings ideas to life, I'm a software engineer with a passion for turning
                        innovation into reality. Let's build the future, one line at a time.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 to-orange-600 cursor-pointer"
                        >
                            Projects Portfolio
                            <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
          </span>
                        </Link>
                        <span>
          <button
              onClick={() => handleDemoUrl()}
              className="bg-gradient-to-r from-orange-300 to-orange-600 cursor-pointer hover:text-black text-white py-2 px-4 rounded inline-flex items-center"
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
                         className="rounded-2xl border-8 border-white mx-auto w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2"/>
                </div>
            </div>
        </div>

    )
}

export default Home;
