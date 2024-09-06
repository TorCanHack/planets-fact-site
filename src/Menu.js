import React from "react";
import { Link } from "react-router-dom";
import earthImg from './starter-code/assets/planet-earth.svg'
import mercuryImg from './starter-code/assets/planet-mercury.svg'
import jupiterImg from './starter-code/assets/planet-jupiter.svg'
import neptuneImg from './starter-code/assets/planet-neptune.svg'
import saturnImg from './starter-code/assets/planet-saturn.svg'
import marsImg from './starter-code/assets/planet-mars.svg'
import venusImg from './starter-code/assets/planet-venus.svg'
import uranusImg from './starter-code/assets/planet-uranus.svg'
import arrow from './starter-code/assets/icon-chevron.svg'

const Menu = ({menu, setMenu}) => {

    const hideMenu = () => {
        setMenu(false)
      }

    return (
        <nav className="font-spartans font-bold p-6">
            {menu && <ul className="md:hidden">

              <li key="mercury" className='flex flex-row border-b border-gray-300 py-4 '>
                <img src={mercuryImg} alt='' className='h-5 w-5 mr-5 '/> 
                  MERCURY 
                  <Link to='/mercury' onClick={hideMenu} className="flex ml-auto"> 
                    <button className=''>
                      <img src={arrow} alt=''/>
                    </button>
                  </Link>
              </li>

              <li key="venus" className='flex flex-row border-b border-gray-300 py-4'>
                  <img src={venusImg} alt='' className='h-5 w-5 mr-5'/> 
                  VENUS 
                  <Link to='/venus' className="flex ml-auto">
                      <button className='' onClick={hideMenu}>
                        <img src={arrow} alt=''/>
                      </button>
                  </Link>
              </li>

              <li key="earth" className='flex flex-row border-b border-gray-300 py-4'>
                <img src={earthImg} alt='' className='h-5 w-5 mr-5'/>
                EARTH 
               <Link to='/earth' className="flex ml-auto">
                  <button className='' onClick={hideMenu}>
                    <img src={arrow} alt=''/>
                  </button>
                </Link>
              </li>

              <li key="mars" className='flex flex-row border-b border-gray-300 py-4'>
                <img src={marsImg} alt='' className='h-5 w-5 mr-5'/> 
                MARS
                <Link to='/mars' className="flex ml-auto">
                  <button className='' onClick={hideMenu}>
                    <img src={arrow} alt=''/>
                  </button>
                </Link>
              </li>

              <li key="jupiter" className='flex flex-row border-b border-gray-300 py-4'>
                <img src={jupiterImg} alt=''className='h-5 w-5 mr-5'/> 
                JUPITER 
                <Link to='/jupiter' className="flex ml-auto">
                  <button className='' onClick={hideMenu}>
                    <img src={arrow} alt=''/>
                  </button>
                </Link>
              </li>

              <li key="saturn" className='flex flex-row border-b border-gray-300 py-4'>
                <img src={saturnImg} alt='' className='h-5 w-5 mr-5'/> 
                SATURN  
                <Link to='/saturn' className="flex ml-auto">
                  <button className='' onClick={hideMenu}>
                    <img src={arrow} alt=''/>
                  </button>
                </Link>
              </li>

              <li key="uranus" className='flex flex-row border-b border-gray-300 py-4'>
                <img src={uranusImg} alt='' className='h-5 w-5 mr-5'/> 
                URANUS
                <Link to='/uranus' className="flex ml-auto">
                  <button className='' onClick={hideMenu}>
                    <img src={arrow} alt=''/>
                  </button>
                </Link>
              </li>

              <li key="neptune" className='flex flex-row border-b border-gray-300 py-4'>
                <img src={neptuneImg} alt=''className='h-5 w-5 mr-5'/> 
                NEPTUNE 
                <Link to='/neptune' className="flex ml-auto">
                  <button className='' onClick={hideMenu}>
                    <img src={arrow} alt=''/>
                  </button>
                </Link>
              </li>
            </ul>}
            

        </nav>
    )

}

export default Menu;

