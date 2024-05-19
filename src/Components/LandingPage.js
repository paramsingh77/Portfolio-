import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './landing.css';
import video from './853969-hd_1920_1080_25fps.mp4'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
const LandingPage = () => {
  const navigate = useNavigate();
  const [background,setBackground] = useState('default');
  const handleNavigate = (path) => {
    if(path === '/projects'){
      navigate(path)
    }
    else if(path === '/work'){
      navigate(path)
    }
    else if(path === '/resume'){
      navigate(path)
    }
    setBackground(path === '/projects')

  }
  const backgroundClass = background === 'white'
  return (
    <div className='backgrounds'>
       {/* <video autoPlay loop muted className='backfix'>
       <source src={video} width={100} height={100} type="video/mp4"/>
       </video> */}

      <div className='Name white'>
        <div className='headers-options'>
                <ul>
                    <li><div onClick={()=> handleNavigate('/projects')}>Projects</div></li>
                    <li><div onClick={()=> handleNavigate('/work')}>Work</div></li>
                    {/* <li><div onClick={()=> handleNavigate('/resume')}>Resume</div></li> */}
                    <li><a href='./resume._parminder.pdf' className='no-link' download>Resume </a></li>
                </ul>
        </div>
        <div className='name-display'>
                 Parminder Singh
         </div>
        <div className='description-me'>
            I am a full-stack developer , working on different tools to make things to reality.
        </div>
        <div className='two-cards'>
          <div className='card-1'>
            <div>University of North Alabama</div>
            <div>Computer Science</div>
            <div className='gpa-tag'>
              GPA
            </div>
            <div>
              3.61
            </div>
          </div>
          <div className='card-2'>
            <div className='link'>
              Links
            </div>
            <div className='social-links'>
              <ul>
                <li> <a href="https://www.github.com/paramsingh77">Github</a></li>
                <li> <a href="https://www.linkedin.com/in/psingh20">LinkedIn</a></li>
                <li> <a href='https://www.leetcode.com/parmindersingh'>LeetCode</a></li>
               
              </ul>
            </div>
          </div>
        </div>
        </div>
    </div>
   
  )
}

export default LandingPage
