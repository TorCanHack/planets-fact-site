import { Link } from "react-router-dom";
import React, {useState} from "react";
import hamBurger from './starter-code/assets/icon-hamburger.svg';
import grayHamBurger from './starter-code/assets/gray-hamburger.svg'



const Home = ({menu, setMenu}) => {

    

    const showMenu = () => {
        setMenu(true)
    }
    

    return (
        <header className="lg:flex lg:flex-row lg:justify-between lg:border-b lg:border-gray-300">
            <div className="flex flex-row justify-between border-b border-gray-300 p-6 md:border-b-0">
                <h1 className="md:text-28 font-bold mx-auto font-antonio md:my-4">THE PLANETS</h1>
                <Link to='/' onClick={showMenu} className="md:hidden">
                    <button>
                        <img src={`${menu ? grayHamBurger: hamBurger}`} alt='' className="filter grayscale grayscale-100"/>
                    </button>
                </Link>
            
                
            </div>
            <ul className="hidden md:flex flex-row justify-evenly border-b border-gray-300 md:pb-8 md:bg-[url('/src/starter-code/assets/background-stars.svg')] lg:w-665 lg:border-b-0 lg:items-center lg:pb-0">
              <li className="lg:hover:border-t-4 border-mercuryTheme lg:py-10">
                <Link to="/mercury">MERCURY</Link>
              </li>
              <li className="lg:hover:border-t-4 border-venusTheme lg:py-10">
                <Link to="/venus">VENUS</Link>
              </li>
              <li className="lg:hover:border-t-4 border-earthTheme lg:py-10">
                <Link to="/earth">EARTH</Link>
              </li>
              <li className="lg:hover:border-t-4 border-marsTheme lg:py-10">
                <Link to="/mars">MARS</Link>
              </li>
              <li className="lg:hover:border-t-4 border-jupiterTheme lg:py-10">
                <Link to="jupiter">JUPITER</Link>
              </li>
              <li className="lg:hover:border-t-4 border-saturnTheme lg:py-10">
                <Link to="/saturn">SATURN</Link>
              </li>
              <li className="lg:hover:border-t-4 border-uranusTheme lg:py-10">
                <Link to="/uranus">URANUS</Link>
              </li>
              <li className="lg:hover:border-t-4 border-neptuneTheme lg:py-10">
                <Link to="/neptune">NEPTUNE</Link>
              </li>

            </ul>

            
            
        </header>

    )
}

export default Home;