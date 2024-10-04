//import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Play from './components/Play/Play';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="container">
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />}/>
         
        <Route path='/play' element={<Play />}/>
      </Routes>
     
    </Router>
    </div>
    
   </>
  )
}

export default App
