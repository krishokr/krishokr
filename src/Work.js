import React, {useState} from 'react';
import './Styles/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkDetails from './WorkDetails';
import ChatImage from './img/chat-demo.png';
import GDFAImage from './img/gdf-a-demo.png';
import HangImage from './img/hang-demo.png';
import GDFImage from './img/gdf-demo.png';
import PokedexImage from './img/pokedex-demo.png';

export default function Work() {

  return (
    <div id='work' className='work-container'>
      <div className='title-container'>
        <div className='border-one'></div>
          <h1>Recent Work</h1>
        <div className='border-two'></div>
      </div>
        <div className='project-container'>
    {/* https://krishokr.github.io/meet/ */}
        {/* <a href='#'> */}
              <div className='project project-one'>

                <WorkDetails Name= 'Hang' Description='Ever wonder what kinds of happenings are in your city but not sure where to look? Introducing Hang, a mellow meetup application that allows users to find events in their own city.' ImagePath={HangImage} Github='https://github.com/krishokr/meet' Link='https://krishokr.github.io/meet/'/>


                {/* <h3 >Hang</h3> */}
                
                {/* <h5 >Ever wonder what kinds of happenings are in your city but not sure where to look? Introducing Hang, a mellow meetup application that allows users to find events in their own city. </h5> */}
                {/* <div className='highlights-container'>
                  <h3>Highlights</h3>
                  <p>Is a Progressive Web Application and can be viewed on or offline.</p>
                  <p>Uses Recharts, a D3 charting library to view data from Career Foundry's Google Calendar API.</p>
                  <p>Used both Test Driven Development and Behavior Driven Development to develop a clean application.</p> 
                </div> */}
                {/* <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                  <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
                </div> */}
              </div>
              
            {/* </a> */}

            {/* <a href='https://krishokr.github.io/slice-the-pie/'> */}
              <div className='project project-one'>

                <WorkDetails Name= 'Slice the Pie' Description='You are running a university. How much would you allocate to different sectors? Learn about your funding sources with a guessing game by inputting percentages of each section of a pie chart. ' ImagePath={HangImage} Github='https://github.com/krishokr/slice-the-pie' Link='https://krishokr.github.io/slice-the-pie/'/>
                
                {/* <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                  <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
                </div> */}
              </div>
              
            {/* </a> */}

            {/* <a href="https://tractivityfitnesstracker.krishokr.repl.co/">
              <div className='project project-two'>
                <h3>Tractivity</h3>
                <h5>A fitness tracking app that allows users to login, set reminders to log their future workouts, store their workouts, and view them in a graphical form using SQLite and D3.</h5>
                <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-js" />
                  <FontAwesomeIcon icon="fa-brands fa-html5" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                </div>
              </div>
            </a> */}


            {/* <a href='https://greendragonfilms.netlify.app/' > */}
              <div className='project project-four'>
                <WorkDetails Name= 'Green Dragon Films' Description='Welcome to Green Dragon, a full stack MERN application that allows you to admire and explore your favorite adventures. Users can login to view their favorite action and adventure movies.' ImagePath={GDFImage} Github='https://github.com/krishokr/greenDragonFilms' Link='https://greendragonfilms.netlify.app/'/>
                
                {/* <div className='icons'>
                  <FontAwesomeIcon icon="fa-brands fa-node-js" />
                  <FontAwesomeIcon icon="fa-brands fa-react" />
                  <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
                </div> */}
              </div>
            {/* </a> */}

            {/* <a href='https://krishokr.github.io/Simple-Pokedex-App/'> */}
              <div  className='project project-three'>
              <WorkDetails Name='Pokedex' Description='A Pokedex app that allows a user to view details about specific pokemon from an external Pokemon API.' ImagePath={PokedexImage} Github='https://github.com/krishokr/Simple-Pokedex-App' Link='https://krishokr.github.io/Simple-Pokedex-App/'/>
              
                {/* <div className='icons'>             
                  <FontAwesomeIcon icon="fa-brands fa-js" />  
                  <FontAwesomeIcon icon="fa-brands fa-html5" />
                  <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
                </div> */}
              </div>
            {/* </a> */}

          
            
        </div>
    </div>
  )
}
