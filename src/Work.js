import React, {useState} from 'react';
import './Styles/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work() {

  return (
    <div id='work' className='work-container'>
      <div className='title-container'>
        <div className='border-one'></div>
          <h1>Recent Work</h1>
        <div className='border-two'></div>
      </div>
        <div className='project-container'>

            <a href='https://krishokr.github.io/slice-the-pie/'>
              <div className='project project-one'>
                <h3 >Slice the Pie</h3>
                <h5 >You're running a university. How much would you allocate to different sectors? Learn about your funding sources with a guessing game by inputting percentages of each section of a pie chart. </h5>
                <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                  <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
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

            <a href='https://krishokr.github.io/meet/'>
              <div className='project project-one'>
                <h3 >Hang</h3>
                <h5 >A meetup application using Google Calendar API with data from Career Foundry that allows users to find events in their city. Two charts make it easier for users to understand what kind of events they can expect to find. Uses Recharts.</h5>
                <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                  <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
                </div>
              </div>
              
            </a>
            
        </div>
    </div>
  )
}
