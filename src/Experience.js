import React from 'react';
import './Styles/experience.css'

export default function Experience() {
  return (
    <div id='experience'>
      <div className='experience-container'>
      <div className='education-container'>
          <h1>Education</h1>
          <h2 className='uni-title'>University of California Davis</h2>
          <h3>June 2021</h3>
          <div className='row-box'>
            <div className='exp exp-three'>
              <h2>BA Philosophy</h2>
              <p>My major gave me the tools to not just analyze everything, but to look for a solution. My courses required me to sift through dense philosophical arguments and play the devil's advocate- I had to respond to the argument by finding its weaknesses and come up with an amendment. This taught me to value detail and the importance of precision in wording. In addition to critical thinking, I was also exposed to logic, which is the mathematical translation of arguments into symbols to prove or disprove its validity. With its own logical rules and syntax, including variables, conditionals, and quantifiers, it is a form of code, a way of describing something about the world using symbols.</p>
            </div>
            <div className='line-div'></div>
            <div className='exp exp-four'>
              <h2>Minor Computer Science</h2>
              <p>I have taken introductory courses in Python and Java where I learned the fundamentals of programming, object oriented programming, and data structures and algorithms. I had the opportunity to take an upper division course on databases where we were required to build a database from scratch. This was a valuable experience in career preparation because we were required to work in teams of five and had to present our work to the professor for review. My final course was in Web Development where we were required to build two full stack projects you can view above- Tractivity and Slice the Pie. Slice the Pie was created in efforts with the Manetti-Shrem Museum of Art to give guests an interactive experience while waiting in line.</p>
            </div>
            {/* <div className='exp exp-five'>
              <h2>Career Foundry</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}
          </div>
        <div className='achievement-container'>
          <h1>Experience</h1>
          <div className='row-box'>
            <div className='exp exp-one'>
              <h2>UC Davis Climbing</h2>
              <h3>President - Treasurer</h3>
              <h5>March 2018-March 2020</h5>
              <p>In college I immersed myself with the UC Davis climbing community. I watched it grow exponentially during my time in college thanks to not only my own efforts, but also to our efforts as a collective- both board and members. I believe this team can give future students a fantastic way to explore their passion for climbing and form a connection to this inspiring and supportive community much as it did for me. Along with the President, as Treasurer, I spoke in front of the UC Davis Sport Club board in efforts to become an official UC Davis Sport Club and receive school funding. We were successful, and in addition to funding, we were allowed to use the official UC Davis logo at competitions. As President, I was able to secure a sponsorship with The Boulder Field, a climbing gym in Sacramento run by Carlo Traversi, a professional climber. This allowed the team to practice at one of the best gyms in Northern California and have access to all the tools necessary to meet their goals both outdoors and at competitions. As President, it was my job to oversee the team board, run practices, and help the fundraiser and treasurer with finances. As such, I learned a lot about running a team, collaboration, and how to handle disagreement. There is value in difference, and in the ability to listen to others especially when your thoughts don't align. </p>
            </div>
            {/* <div className='line-div'></div>
            <div className='exp exp-two'>
                <h2>Bike Shop Assistant</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}
          </div>
        </div>

          <div className='resume-container'>
            <div className='lines'></div>
            <div className='lines'></div>
            <a className='resume-download' href='Kris_Hokr_Resume.pdf' download>Download Resume</a>
          </div>
          
        </div>
      </div>
    </div>
  
  )
}
