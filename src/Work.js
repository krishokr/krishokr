import React, {useState} from 'react';
import './Styles/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work() {
  const [oneIsHovered, setoneIsHovered] = useState(false);
  const [twoIsHovered, settwoIsHovered] = useState(false);
  const [threeIsHovered, setthreeIsHovered] = useState(false);
  const [fourIsHovered, setfourIsHovered] = useState(false);
  const [fiveIsHovered, setfiveIsHovered] = useState(false);

  function handleHoverOne() {
    return oneIsHovered ? setoneIsHovered(false) : setoneIsHovered(true);
  }

  function handleMouseLeaveOne() {
    return oneIsHovered ? setoneIsHovered(true) : setoneIsHovered(false);
  }

  function handleHoverTwo() {
    return twoIsHovered ? settwoIsHovered(false) : settwoIsHovered(true);
  }

  function handleMouseLeaveTwo() {
    return oneIsHovered ? settwoIsHovered(false) : settwoIsHovered(true);
  }

  function handleHoverThree() {
    return threeIsHovered ? setthreeIsHovered(false) : setthreeIsHovered(true);
  }

  function handleMouseLeaveThree() {
    return threeIsHovered ? setthreeIsHovered(false) : setthreeIsHovered(true);
  }

  function handleHoverFour() {
    return fourIsHovered ? setfourIsHovered(false) : setfourIsHovered(true);
  }

  function handleMouseLeaveFour() {
    return fourIsHovered ? setfourIsHovered(false) : setfourIsHovered(true);
  }

  return (
    <div id='work' className='work-container'>
      <div className='title-container'>
        <div className='border-one'></div>
          <h1>Recent Work</h1>
        <div className='border-two'></div>
      </div>
        <div className='project-container'>

            <a href='https://manettishremproject.krishokr.repl.co/'>
              <div className='project project-one'>
                <h3 >Slice the Pie</h3>
                <h5 >You're running a university. How much would you allocate to different sectors? Learn about your funding sources with a guessing game by inputting percentages of each section of a pie chart. </h5>
                <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                </div>
              </div>
              
            </a>

            <a href="https://tractivityfitnesstracker.krishokr.repl.co/">
              <div className='project project-two'>
                <h3>Tractivity</h3>
                <h5>A fitness tracking app that allows users to login, set reminders to log their future workouts, store their workouts, and view them in a graphical form using SQLite and D3.</h5>
                <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-js" />
                  <FontAwesomeIcon icon="fa-brands fa-html5" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                </div>
              </div>
            </a>


            <a href='https://greendragonfilms.netlify.app/' >
              <div className='project project-four'>
                <h3>Green Dragon Films</h3>
                <h5 >Welcome to Green Dragon, a site that allows you to admire and explore your favorite adventures. A full stack app that allows users to log and view their favorite action and adventure movies.</h5>
                <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                </div>
              </div>
            </a>

            <a href='https://krishokr.github.io/Simple-Pokedex-App/'>
              <div  className='project project-three'>
                <h3 >Pokedex</h3>
                <h5 >A simple Pokedex app that allows a user to view details about specific pokemon from an external Pokemon API. </h5>
                <div className='icons'>             
                  <FontAwesomeIcon icon="fa-brands fa-js" />  
                  <FontAwesomeIcon icon="fa-brands fa-html5" />
                  <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
                </div>
              </div>
            </a>
            
        </div>
    </div>
  )
}
