import React, { useState } from "react";
import Data from './starter-code/data.json';
import overviewImg from './starter-code/assets/planet-earth.svg';
import structureImg from './starter-code/assets/planet-earth-internal.svg';
import surfaceImg from './starter-code/assets/geology-earth.png';
import sourceIcon from './starter-code/assets/icon-source.svg'

const earthData = Data.filter(info => info.name === "Earth")

const Earth = () => {
    const [overview, setOverview] = useState(true);
    const [structure, setStructure] = useState(false);
    const [surface, setSurface] = useState(false);

    const handleOverview = () => {

        setOverview(true);
        setStructure(false);
        setSurface(false);

    }

    const handleStructure = () => {
        
        setOverview(false);
        setStructure(true);
        setSurface(false);

    }
    const handleSurface = () => {
        
        setOverview(false);
        setStructure(false);
        setSurface(true);

    }

    return (
        <>
        {earthData.map(data => (
            <section key={data.name} className="bg-[url('/src/starter-code/assets/background-stars.svg')] lg:px-52">
            <div className="flex flex-row justify-between font-spartans text-9 font-bold px-6 border-b  border-gray-300 md:flex-col md:w-281 md:h-154 md:border-b-0 md:relative md:top-98 md:ml-auto lg:w-350 lg:top-97 ">

                <button onClick={handleOverview} className={`md:p-4 md:border md:border-gray-300 text-left lg:hover:bg-slate-600  ${overview ? 'border-b-4 border-earthTheme h-10 md:bg-earthTheme': ''}`} >
                    <span className=" hidden md:inline-block md:mr-4">01</span>
                    OVERVIEW
                </button>

                <button onClick={handleStructure} className={`md:p-4 md:border md:border-gray-300 text-left lg:hover:bg-slate-600 ${structure ? 'border-b-4 border-earthTheme h-10 md:bg-earthTheme': ''}`} > 
                    <span className=" hidden md:inline-block md:mr-4">02</span>
                    <span className="md:hidden">STRUCTURE</span>
                    <span className="hidden md:inline-block"> INTERNAL STRUCTURE</span>
                </button>

                <button onClick={handleSurface} className={`md:p-4 md:border md:border-gray-300 text-left lg:hover:bg-slate-600 ${surface ? 'border-b-4 border-earthTheme h-10 md:bg-earthTheme': ''}`} >
                    <span className="hidden md:inline-block md:mr-4">03</span>
                    <span className="md:hidden">SURFACE</span>
                    <span className="hidden md:inline-block"> SURFACE GEOLOGY</span>
                </button>
            </div>
            {overview ? (<article className="flex flex-col justify-center items-center"> 
                <img src={overviewImg} alt="earth" className="w-44 h-44 my-24 md:w-72 md:h-72 md:mt-0 lg:w-450 lg:h-450 lg:mr-96"/> 
                <div className="text-center md:text-left md:w-339 md:h-64 md:mr-auto md:px-6 md:-mt-20 lg:ml-auto lg:mr-0 lg:relative lg:bottom-96 lg:-mt-48">
                    <h2 className="text-40 font-antonio mb-4 md:text-5xl lg:text-8xl">EARTH</h2> 
                    <p className="font-spartans text-xs leading-22 px-6 my-4 md:px-0 md:my-10 lg:text-sm">{data.overview.content}</p>
                    <p className="text-xs leading-6 text-gray-400 lg:text-sm">
                        Source: <span className="underline text-white">Wikipedia</span>
                        <a href={data.overview.source} target="_blank" rel="noopener noreferrer" className="mx-1">
                            <button  ><img src={sourceIcon} alt="" className="relative top-0.5"/></button>
                        </a>
                    </p>

                </div>
            </article>) 
            : structure ? (<article className="flex flex-col justify-center items-center">
                <img src={structureImg} alt="earth" className="w-44 h-44 my-24 md:w-72 md:h-72 md:mt-0 lg:w-450 lg:h-450 lg:mr-96"/> 
                <div className="text-center md:text-left md:w-339 md:h-64 md:mr-auto md:px-6 md:-mt-20 lg:ml-auto lg:mr-0 lg:relative lg:bottom-96 lg:-mt-48">
                    <h2 className="text-40 font-antonio mb-4 md:text-5xl lg:text-8xl">EARTH</h2> 
                    <p className="font-spartans text-xs leading-22 px-6 my-4 md:px-0 md:my-10 lg:text-sm">{data.overview.content}</p>
                    <p className="text-xs leading-6 text-gray-400 lg:text-sm">
                        Source: <span className="underline text-white">Wikipedia</span>
                        <a href={data.overview.source} target="_blank" rel="noopener noreferrer" className="mx-1">
                            <button  ><img src={sourceIcon} alt="" className="relative top-0.5"/></button>
                        </a>
                    </p>

                </div>
                </article>) 
            : (<article className="flex flex-col justify-center items-center"> 
                <img src={overviewImg} alt="earth" className="w-44 h-44 mt-24 md:w-72 md:h-72 md:mt-0 lg:w-450 lg:h-450 lg:mr-96"/> 
                <img src={surfaceImg} alt="earth" className="relative bottom-10 w-20 h-20 mb-4 md:w-28 md:h-28 md:bottom-14 lg:w-40 lg:h-40 lg:right-48 lg:-m-2"/>
                <div className="text-center md:text-left md:w-339 md:h-64 md:mr-auto md:px-6 md:-mt-28 lg:ml-auto lg:mr-0 lg:relative lg:bottom-96 lg:-mt-60 ">
                    <h2 className="text-40 font-antonio mb-4 md:text-5xl lg:text-8xl">EARTH</h2> 
                    <p className="font-spartans text-xs leading-22 px-6 my-4 md:px-0 md:my-10 lg:text-sm">{data.overview.content}</p>
                    <p className="text-xs leading-6 text-gray-400 lg:text-sm">
                        Source: <span className="underline text-white">Wikipedia</span>
                        <a href={data.overview.source} target="_blank" rel="noopener noreferrer" className="mx-1">
                            <button  ><img src={sourceIcon} alt="" className="relative top-0.5"/></button>
                        </a>
                    </p>

                </div>
            </article>)}
            <article className="px-6 my-4 md:flex md:flex-row md:justify-between lg:-mt-20 ">
                
                <div className="flex flex-row items-center border border-gray-400 px-4 h-12 md:flex-col md:items-start md:justify-center md:w-40 md:h-20 my-4 lg:w-64 lg:h-32 lg:mr-6">
                    <h3 className="font-spartans text-gray-400 text-9 font-bold leading-4 lg:text-xs ">ROTATION TIME </h3>
                    <p className="font-antonio text-white text-xl ml-auto md:ml-0 lg:text-40 lg:mt-4">{data.rotation}</p>

                </div>

                <div className="flex flex-row items-center border border-gray-400 px-4 h-12 md:flex-col md:items-start md:justify-center  md:w-40 md:h-20 my-4 lg:w-64 lg:h-32 lg:mr-6" >
                    <h3 className="font-spartans text-gray-400 text-9 font-bold leading-4 lg:text-xs ">REVOLUTION TIME </h3>
                    <p  className="font-antonio text-white text-xl ml-auto md:ml-0 lg:text-40 lg:mt-4">{data.revolution}</p>

                </div>

                <div className="flex flex-row items-center border border-gray-400 px-4 h-12 md:flex-col md:items-start md:justify-center  md:w-40 md:h-20 my-4 lg:w-64 lg:h-32 lg:mr-6">
                    <h3 className="font-spartans text-gray-400 text-9 font-bold leading-4 lg:text-xs">RADIUS </h3>
                    <p className="font-antonio text-white text-xl ml-auto md:ml-0 lg:text-40 lg:mt-4">{data.radius}</p>

                </div>
                

                <div className="flex flex-row items-center border border-gray-400 px-4 h-12 md:flex-col md:items-start md:justify-center  md:w-40 md:h-20 my-4 lg:w-64 lg:h-32">

                    <h3 className="font-spartans text-gray-400 text-9 font-bold leading-4 lg:text-xs">AVERAGE TEMP.</h3>
                    <p className="font-antonio text-white text-xl ml-auto md:ml-0 lg:text-40 lg:mt-4">{data.temperature}</p>

                </div>
 
                
            </article>
            
        </section>

        ))}
        </>
    )

}

export default Earth;