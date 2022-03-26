import { transition } from 'd3';
import React, {useState} from 'react';
import './Styles/Home.css';



export default function Home() {
	const [detailsVisible, setdetailsVisible] = useState(false);
	
	function handleHover() {
		setdetailsVisible(true);
	}

	function handleLeave() {
		setdetailsVisible(false);
	}

	const hiddenDetailsStyle = {
		display: detailsVisible ? 'flex' : 'none',
		transition: '0.5s'
	}


  return (
		<section className='home-container'>
			<div className='home-img-container'>
				<img className='profile-img' alt="Kris" src={require('./img/profile.jpeg')}/>
			</div>
			<div className='home-text-container'>
				<div className='visible-content'>
					<h1 className='home-title'>Adventurous ideas?</h1>
					<h3>I'm Kris, web developer and recent UC Davis graduate.</h3>
					<p onMouseOver={() => handleHover()} onMouseLeave={() => handleLeave()} style={{cursor: 'pointer'}}>more</p>
				</div>
				<p className='hidden-details' style={hiddenDetailsStyle}>As a Philosophy major, I bring to development an analytical eye for detail and organization. I not only want to understand how code works and why, but also how to make it simpler and cleaner so it's easier for fellow developers to write quality features.</p>
			</div>
			
		</section>
    
  )
}
