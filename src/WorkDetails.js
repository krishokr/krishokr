import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/workDetails.css';

export default function WorkDetails(props) {
    const [step, setstep] = useState(1);


  return (
    <div className='work-details'>


            <h1>{props.Name}</h1>
    
            {(step === 1) ? <p>{props.Description}</p> : <img alt='screenshot of project' src={props.ImagePath} style={{width: (props.Link === 'Textable') ? '5vw' : '80%'}}/>}

            {(step === 2) ? <div className='icons'> {props.Icons.map(Icon =>      <FontAwesomeIcon icon={Icon} />)} 
            </div>  : ''}
        

        <div className='button-icon-container'>
        <div className='button-container'>
            <button className='demo-links'><a href={props.Github}>View on Github</a></button>
            <button className='demo-links' style={{display: (props.Link==='Textable' ? 'none': '')}}><a href={props.Link}>View Live App</a></button>
        </div>

        <div className='next-icons'>
            {(step === 2) ? <FontAwesomeIcon onClick={() => setstep(step => step-=1)} icon='fa-solid fa-arrow-left' /> : ''}
            {(step === 1) ? <FontAwesomeIcon onClick={() => setstep(step => step+=1)} icon='fa-solid fa-arrow-right' /> : ''}
        </div>
        </div>
        

        
        
         
    </div>
  )
}
