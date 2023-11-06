import React from 'react'
import cba from '../assets/workexperience/cba.png'
import statestreet from "../assets/workexperience/statestreet.png"
import barclays from "../assets/workexperience/barclays.png"
import morganstanley from "../assets/workexperience/morganstanley.png"

function WorkExperience() {
    const handleDemoUrl = (url) => {
        window.open(url, '_blank')
    }
    const workex = [
        {
            id: 1,
            src: barclays,
            responsibilities: ["Developed Springboot microservices for Command and Query side using Axon framework",
            "Utilised ActiveMQ messaging framework capabilities for communication among event driven microservices",
            "Implemented Test Driven Development (TDD) for development using Mockito framework",
            "Modernised legacy Spring services handling Business APIs into dockerized Springboot Microservices that saved ~20% costs with increased scalability and reliability",
            "Migrated legacy applications from ESX Servers to Openshift cloud platform",
            "Ideated and executed a middleware service to handle inconsistencies while migration from legacy to modern services",
            "Developed Groovy scripts to automate CICD pipelines in Jenkins",
            "Helped in new team members ramp up with domain knowledge of existing microservices",
            "Actively participated in CSR activities organised by Barclays for specially abled kids",
            "Led team building activities like organising Clay Statue making competition, dance and singing competitions on various occassions"],
            name: "Barclays",
            role: "Graduate Analyst - Java Developer",
            duration: "August 2018 - December 2020"
        },
        {
            id: 2,
            src: cba,
            responsibilities: ["Developed dockerized consumer and producer microservices with Spring Integration",
            "Configured and integrated Kafka for inter-service communications",
            "Created and configured CICD pipelines on TeamCity and Urbancode to deploy services on Mesosphere cloud platform",
            "Devised cron jobs to fetch missed events everyday at given time",
            "Adopted GitFlow branching strategy for organised release process ",
            "Automated versioning of builds for faster release cycles upto ~30% which was appreciated and adopted across domains"],
            name: "Commonwealth Bank of Australia",
            role: "Software Engineer",
            duration: "December 2020 - February 2022"
        },
        {
            id: 3,
            src: morganstanley,
            responsibilities: ["Full time Software Development Consultant at Morgan Stanley on payroll of Wissen Technology",
            " Implemented notification feature for existing workflow in a Choreography based system in Spring integration services",
            "Integrated SonarQube with existing services to track code coverage and overall quality",
            "Improved code quality of existing services along with addition of JUnit Tests"],
            name: "Morgan Stanley (Wissen Technology)",
            role: "Software Development Consultant",
            duration: "February 2022 - August 2022"
        },
        {
            id: 4,
            src: statestreet,
            responsibilities: [
            "Spearheaded the creation of a centralized web portal using Django Framework and Python to streamline client onboarding within the SaaS platform, resulting in a remarkable 70% error reduction and improved operational efficiency",
            "Enhanced the application's recommendation system, leading to a more user-friendly experience",
            "Engineered RESTful APIs for seamless data retrieval from a Schedular Tool, optimizing response times through advanced data serialization techniques",
            "Innovatively designed and automated deployment processes onto Windows servers using Python scripts, significantly reducing manual labor and mitigating deployment-related human errors"],
            name: "Charles River Development (State Street)",
            role: "Software Engineer Co-op",
            duration: "July 2023 - December 2023"
        },
    ]

    return (
        <div name='workexperience'
             className='display flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 w-max-content mx-auto h-max-content text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-0 flex flex-col justify-center w-full h-full'>
                <div className='pb-4 mb-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Work Experience
                    </p>
                </div>
                <div className='py-2 px-2 sm:px-0'>
                    {
                        workex.map(({id, src, responsibilities, name, role, duration}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg grid grid-cols-4 '>
                                <div className='col-span-1'>
                                    <img src={src} alt="" className='p-2 rounded-md h-30 w-full duration-200 hover:105'/>
                                    <div className='flex-col items-center text-center justify-center'>

                                        <p className='text-sm font-bold text-blue-400 py-1 px-3 hover:scale-105 duration-200'>{role}</p>
                                        <p className='text-xs text-blue-200 py-1 px-3'>{duration}</p>
                                    </div>
                                </div>
                                <div className='flex-col items-center col-span-3 pt-3 pb-2'>
                                    <ul>
                                        {responsibilities.map((responsibility, index) => (
                                          <li className='text-xs' key={index}>- {responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default WorkExperience
