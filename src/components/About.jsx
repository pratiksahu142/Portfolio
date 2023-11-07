import React from 'react'

function About() {
    return (
        <div name="about" className='flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-400 to-gray-900 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>
                        About
                    </p>
                </div>
                <div>
                    <p className='text-xl mt-10 lg:mt-20'>
                        With 4 years of experience as a Backend Developer and a solid understanding of Software Development, I am currently pursuing my MSCS at Northeastern University, Boston. I am actively looking for full-time SWE roles where my passion for Backend Development and DevOps can thrive.
                    </p>
                    <br/>
                    <p className='text-xl'>
                        In every project, my ultimate goal is to get involved in the design and development of software that truly benefits the end user. The ever-evolving nature of software development excites me, as there is always something new to discover.
                    </p>
                    <br/>
                    <p className='text-xl'>
                        If you have exciting and challenging opportunities in the Software Industry, I'm eager to connect and explore how my skills and interests align. Let's create amazing software together!
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About;
