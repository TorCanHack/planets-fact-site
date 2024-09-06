
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



import Earth from './Earth';
import Mercury from './Mercury';
import Venus from './Venus';
import Saturn from './Saturn';
import Neptune from './Neptune';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Uranus from './Uranus';

import Home from './Home';
import Menu from './Menu';

function App() {
  const [menu, setMenu] = useState(true)
  

  

  
  return (
    <main className=" bg-spaceBlack text-white">
      
    
        
        <Router>
        
          <div>
            <Home menu={menu} setMenu={setMenu}/> 

            <Routes>
              <Route path='/' element={<Menu menu={menu} setMenu={setMenu}/>}/>
              <Route path='/mercury' element={<Mercury/>}/>
              <Route path='/venus' element={<Venus/>}/>
              <Route path='/earth' element={<Earth/>}/>
              <Route path='/mars' element={<Mars/>}/>
              <Route path='/jupiter' element={<Jupiter/>}/>
              <Route path='/saturn' element={<Saturn/>}/>
              <Route path='/uranus' element={<Uranus/>}/>
              <Route path='/neptune' element={<Neptune/>}/>
            </Routes>

          </div>
        </Router>
        
        
      
    </main>
  );
}

export default App;
