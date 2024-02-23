import React from 'react'
import airbnbClone from '../assets/portfolio/airbnb-clone.png'
import djangoBlog from "../assets/portfolio/DjangoBlog.png"
import graphQLProject from "../assets/portfolio/graphQLProject.png"
import stockApp from "../assets/portfolio/stockApp.png"
import inventoryManagement from "../assets/portfolio/inventoryManagement.png"

function Portfolio() {
    const handleDemoUrl = (url) => {
        window.open(url, '_blank')
    }
    const portfolio = [
        {
            id: 1,
            src: stockApp,
            url: "https://github.com/pratiksahu142/StockBroker",
            codeurl: "https://github.com/pratiksahu142/StockBroker",
            name: "Stocks Management Application",
            description: "A Java Swing based application to practice various Programming Design Patterns",
        },
        {
            id: 2,
            src: airbnbClone,
            url: "https://github.com/pratiksahu142/airbnb-clone",
            codeurl: "https://github.com/pratiksahu142/airbnb-clone",
            name: "Wanderwise - An AirBnb clone",
            description: "A full-stack ReactJS based Web application with Express for the backend"
        },
        {
            id: 3,
            src: inventoryManagement,
            url: "https://github.com/pratiksahu142/inventory-management-system",
            codeurl: "https://github.com/pratiksahu142/inventory-management-system",
            name: "Inventory Management Application",
            description: "A Springboot & ReactJS based Web app to practice Circuit breaker libraries in resilient distributed systems"
        },
        {
            id: 4,
            src: djangoBlog,
            url: "https://github.com/pratiksahu142/django-blog-app",
            codeurl: "https://github.com/pratiksahu142/django-blog-app",
            name: "Blog App",
            description: "Django Practice Application"
        },
        {
            id: 5,
            src: graphQLProject,
            url: "https://github.com/pratiksahu142/graphql-project-management-project",
            codeurl: "https://github.com/pratiksahu142/graphql-project-management-project",
            name: "Project Management GraphQL App",
            description: "Project Management Web App with Node.js, GraphQL, MongoDB, and React"
        },
    ]

    return (
        <div name='portfolio'
             className='display flex flex-col justify-center items-center bg-gradient-to-b from-gray-400 to-gray-900 w-max-content mx-auto h-max-content text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-0 flex flex-col justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>
                        Portfolio
                    </p>
                    <p className='py-6 font-bold'>Checkout some of my work right here, click to see the code on Github</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0'>
                    {
                        portfolio.map(({id, src, url, codeurl, name, description}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt=""
                                     className='rounded-md duration-200 hover:105'/>
                                <div className='flex-col items-center justify-center'>
                                    {/*<button onClick={() => handleDemoUrl(url)} className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>Demo</button>*/}
                                    <button onClick={() => handleDemoUrl(codeurl)}
                                            className='w-full px-6 py-2 mt-3 text-center font-bold text-orange-500 hover:scale-105 duration-200'>{name}
                                    </button>
                                    <p className='text-xs py-1 px-2'>{description}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Portfolio
