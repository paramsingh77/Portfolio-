import React from 'react'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router , Routes , Route, useNavigate } from 'react-router-dom';
import ProjectDisplay from './Components/ProjectDisplay.js';
import Work from './Components/Work.js';
import { Navigate } from 'react-router-dom';
import Resume from './Components/Resume.js';
const App = () => {
   
  return (
    <>
      <Router>
      {/* <LandingPage/> */}
        <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/projects' element={<ProjectDisplay/>} />
        <Route exact path='/work' element={<Work/>} />
        <Route exact path='/resume' element={<Resume/>}/>
        </Routes>
      
      </Router>
  </>      
  )
}

export default App
