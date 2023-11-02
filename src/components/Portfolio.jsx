import React from 'react'
import tsp from '../assets/portfolio/TSP.png'
import cloudinfra from "../assets/portfolio/cloudInfra.png"
import stockApp from "../assets/portfolio/stockApp.png"
import DataWarehouse from "../assets/portfolio/DataWarehouse.png"

function Portfolio() {
    const handleDemoUrl = (url) => {
        window.open(url, '_blank')
    }
    const portfolio = [
        {
            id: 1,
            src: stockApp,
            url: "https://github.com/Rohit-hooda/StockBroker",
            codeurl: "https://github.com/Rohit-hooda/StockBroker"
        },
        {
            id: 2,
            src: tsp,
            url: "https://github.com/Rohit-hooda/ticket-reselling-app",
            codeurl: "https://github.com/Rohit-hooda/ticket-reselling-app"
        },
        {
            id: 3,
            src: DataWarehouse,
            url: "https://github.com/Rohit-hooda/Pubmed_DataWarehouse",
            codeurl: "https://github.com/Rohit-hooda/Pubmed_DataWarehouse"
        },
        {
            id: 4,
            src: cloudinfra,
            url: "https://github.com/Rohit-hooda/aws-infra",
            codeurl: "https://github.com/Rohit-hooda/aws-infra"
        },
    ]

    return (
        <div name='portfolio'
             className='display flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 w-max-content mx-auto h-max-content text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>Checkout some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({id, src, url, codeurl}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt=""
                                     className='rounded-md duration-200 hover:105'/>
                                <div className='flex items-center justify-center'>
                                    {/*<button onClick={() => handleDemoUrl(url)} className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>Demo</button>*/}
                                    <button onClick={() => handleDemoUrl(codeurl)}
                                            className='w-1/2 px-6 py-3 mt-4 text-center text-white hover:scale-105 duration-200'>Code
                                    </button>
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
