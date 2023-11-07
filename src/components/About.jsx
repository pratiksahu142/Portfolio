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
                        With <strong>4+</strong> years of experience as a Software Engineer and a solid understanding of Software Development,
                        I am currently pursuing my M.S. in Computer Science at Northeastern University, Boston.
                        I am actively looking for <strong>full-time Software Engineer</strong> roles where my passion for Backend Development and
                        Large-Scale Distributed Systems can thrive. My interest lies in developing resilient,
                        and scalable enterprise applications that efficiently serve millions of users.
                        </p>
                    <br/>
                    <p className='text-xl'>
                        I love collaborating with a team, fostering mutual learning and growth. While I enjoy
                        contributing as a team member, I also relish leading decisions, designing solutions, and taking
                        charge of development. After gaining experience across various projects and organizations, I've
                        honed my ability to quickly adapt and implement new skills.
                    </p>
                    <br/>
                    <p className='text-xl'>
                        In every project, my ultimate goal is to create software that genuinely benefits end-users.
                        The ever-evolving nature of software development excites me, as there is always something new to discover.
                    </p>
                    <br/>
                    <p className='text-xl'>
                        If you have exciting and challenging opportunities in the Software Industry, I'm eager to connect
                        and explore how my skills and interests align. Let's create amazing software together!
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About;
