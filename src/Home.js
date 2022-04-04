import React, {useState} from 'react';
import './Styles/Home.css';

import { Transition } from 'react-transition-group';
const defaultStyles= {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


export default function Home() {
	const [detailsVisible, setdetailsVisible] = useState(false);
	
	function handleHover() {
		setdetailsVisible(!detailsVisible);
	}



  return (
		<section id='home' className='home-container'>
			<div className='home-img-container'>
				<img className='profile-img' alt="Kris" src={require('./img/profile.jpeg')}/>
			</div>
			<div className='home-text-container'>
				<div className='visible-content'>
					<h1 className='home-title'>Adventurous ideas?</h1>
					<h3>I'm Kris, web developer and recent UC Davis graduate.</h3>
					{/* <p onMouseOver={() => handleHover()} onMouseLeave={() => handleHover()} style={{cursor: 'pointer'}}>more</p> */}
				</div>
				{/* <Transition in={detailsVisible} timeout={300}>
					{state => (
						<p className='hidden-details' title="Transition alert" styles={{...defaultStyles, ...transitionStyles[state]}} onClose={handleHover}>As a Philosophy major, I bring to development an analytical eye for detail and organization. I not only want to understand how code works and why, but also how to make it simpler and cleaner so it's easier for fellow developers to write quality features.</p>
					)}
				</Transition> */}
			</div>
			
		</section>
    
  )
}
