import React, {useState} from 'react';
import './Styles/work.css';

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
        <div className='project-container'>
            {/* <a href='https://manettishremproject.krishokr.repl.co/'>
              <div onMouseOver={() => handleHoverOne()} onMouseLeave={() => handleMouseLeaveOne()}className='project project-one'>
                <h3 style={{display: oneIsHovered ? 'none' : 'flex'}} >Slice the Pie</h3>
                <h3 style={{display: oneIsHovered ? 'flex' : 'none'}}className='hidden'>Description</h3>
              </div>
            </a> */}

            <a href='https://manettishremproject.krishokr.repl.co/'>
              <div className='project project-one'>
                <h3 >Slice the Pie</h3>
                <h5 >You're running a university. How much would you allocate to different sectors? Learn about your funding sources with a guessing game by inputting percentages of each section of a pie chart. See how well your choices match next to the real choices made by the Provost.</h5>
              </div>
            </a>

            {/* <a href="https://tractivityfitnesstracker.krishokr.repl.co/">
              <div onMouseOver={() => handleHoverTwo()} onMouseLeave={() => handleMouseLeaveTwo()} className='project project-two'>
                <h3 style={{display: twoIsHovered ? 'none' : 'flex'}}>Tractivity</h3>
                <h3 style={{display: twoIsHovered ? 'flex' : 'none'}}  className='hidden'>Description</h3>
              </div>
            </a> */}

            <a href="https://tractivityfitnesstracker.krishokr.repl.co/">
              <div className='project project-two'>
                <h3>Tractivity</h3>
                <h5>A fitness tracking app that allows users to login, set reminders to log their future workouts, store their workouts, and view them in a graphical form using SQLite and D3.</h5>
              </div>
            </a>

            {/* <a href='https://greendragonfilms.netlify.app/' >
              <div onMouseOver={() => handleHoverFour()} onMouseLeave={() => handleMouseLeaveFour()} className='project project-four'>
                <h3 style={{display: fourIsHovered ? 'none' : 'flex'}}>Green Dragon Films</h3>
                <h3 style={{display: fourIsHovered ? 'flex' : 'none'}} className='hidden'>Description</h3>
              </div>
            </a> */}

            <a href='https://greendragonfilms.netlify.app/' >
              <div className='project project-four'>
                <h3>Green Dragon Films</h3>
                <h5 >Welcome to Green Dragon, a site that allows you to admire and explore your favorite adventures. A full stack app that allows users to log and view their favorite action and adventure movies.</h5>
              </div>
            </a>

            {/* <a href='https://krishokr.github.io/Simple-Pokedex-App/'>
              <div onMouseOver={() => handleHoverThree()} onMouseLeave={() => handleMouseLeaveThree()} className='project project-three'>
                <h3 style={{display: threeIsHovered ? 'none' : 'flex'}}>Pokedex</h3>
                <h3 style={{display: threeIsHovered ? 'flex' : 'none'}} className='hidden'>Description</h3>
              </div>
            </a> */}

            <a href='https://krishokr.github.io/Simple-Pokedex-App/'>
              <div  className='project project-three'>
                <h3 >Pokedex</h3>
                <h5 >A simple Pokedex app that allows a user to view details about specific pokemon from an external Pokemon API. </h5>
              </div>
            </a>
            
            {/* <div className='project project-five'>Project one</div>
            <div className='project project-six'>Project one</div> */}
        </div>
    </div>
  )
}
