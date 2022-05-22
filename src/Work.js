import React, {useState} from 'react';
import './Styles/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkDetails from './WorkDetails';
import ChatImage from './img/chat-demo.png';
import GDFAImage from './img/gdf-a-demo.png';
import HangImage from './img/hang-demo.png';
import GDFImage from './img/gdf-demo.png';
import PokedexImage from './img/pokedex-demo.png';
import SLPImage from './img/slice-the-pie-demo.png';

export default function Work() {

  return (
    <div id='work' className='work-container'>
      <div className='title-container'>
        <div className='border-one'></div>
          <h1>Recent Work</h1>
        <div className='border-two'></div>
      </div>
        <div className='project-container'>
              <div className='project project-four'>
                <WorkDetails Name= 'Green Dragon Films' Description='Welcome to Green Dragon, a full stack MERN application that allows you to admire and explore your favorite adventures. Users can login to view their favorite action and adventure movies.' ImagePath={GDFImage} Github='https://github.com/krishokr/greenDragonFilms' Link='https://greendragonfilms.netlify.app/' Icons={['fa-brands fa-node-js', 'fa-brands fa-react', 'fa-brands fa-css3-alt']}/>
              </div>
              
              <div  className='project project-four'>
                  <WorkDetails Name='Green Dragon - Angular' Description='This is the Angular version of the frontend application. Green Dragon allows you to admire and explore your favorite adventures. Users can login to view their favorite action and adventure movies.' ImagePath={GDFAImage} Github='https://github.com/krishokr/green-dragon-films-Angular' Link='https://green-dragon-films-angular.netlify.app/welcome' Icons={["fa-brands fa-angular", "fa-brands fa-css3-alt"]}/>
              </div>

              <div className='project project-one'>

                <WorkDetails Name= 'Hang' Description='Ever wonder what kinds of happenings are in your city but not sure where to look? Introducing Hang, a mellow meetup application that allows users to find events in their own city.' ImagePath={HangImage} Github='https://github.com/krishokr/meet' Link='https://krishokr.github.io/meet/' Icons={['fa-brands fa-react', "fa-brands fa-css3-alt", "fa-solid fa-chart-pie"]}/>
              </div>

              
              
              <div className='project project-one'>

                <WorkDetails Name= 'Slice the Pie' Description='You are running a university. How much would you allocate to different sectors? Learn about your funding sources with a guessing game by inputting percentages of each section of a pie chart. ' ImagePath={SLPImage} Github='https://github.com/krishokr/slice-the-pie' Link='https://krishokr.github.io/slice-the-pie/' Icons={['fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']}/>
                
              </div>
              
              

              <div  className='project project-three'>
                <WorkDetails Name='Pokedex' Description='A Pokedex app that allows a user to view details about specific pokemon from an external Pokemon API.' ImagePath={PokedexImage} Github='https://github.com/krishokr/Simple-Pokedex-App' Link='https://krishokr.github.io/Simple-Pokedex-App/' Icons={["fa-brands fa-js", "fa-brands fa-html5", "fa-brands fa-bootstrap"]}/>
            
              </div>



              <div className='project project-four'>
                  <WorkDetails Name='Textable' Description='Textable is a colorful React Native mobile chat app for ios that allows users to personalize their chat through color customization and communicate through messages, images, and by sending their current location.' ImagePath={ChatImage} Github='https://github.com/krishokr/textable' Link='Textable' Icons={['fa-brands fa-react', 'fa-brands fa-css3-alt']}/>
              </div>
        </div>
    </div>
  )
}
