import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/workDetails.css';

export default function WorkDetails(props) {
    const [step, setstep] = useState(1);


  return (
    <div className='work-details'>
        <h1>{props.Name}</h1>
    
        {(step === 1) ? <p>{props.Description}</p> : <img alt='screenshot of project' src={props.ImagePath} />}

        <div className='next-icons'>
            {(step === 2) ? <FontAwesomeIcon onClick={() => setstep(step => step-=1)} icon='fa-solid fa-arrow-left' /> : ''}
            {(step === 1) ? <FontAwesomeIcon onClick={() => setstep(step => step+=1)} icon='fa-solid fa-arrow-right' /> : ''}
        </div>
        <div className='button-container'>
            <button className='demo-links'><a href={props.Github}>View on Github</a></button>
            <button className='demo-links'><a href={props.Link}>View Live App</a></button>
        </div>
         
    </div>
  )
}