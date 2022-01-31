import './App.css';
import Stats from './Stats';
import Me from './IMG_4536.PNG';
import Github from './Octocat.png';
import React from 'react';
import lnk from './lnk.png';
import twitter from './twitter.png';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Me} alt="" width="300 px" height="250px" className='App-logo' />
        <div class="social-container2">
        <a href="https://twitter.com/sjsalgado4899">
        <img src={twitter} alt="" width="100px" />
        </a>
        
        
        <a href="https://github.com/THEMERLINGROUP?tab=repositories"><img src={Github} alt="" width="100px" />
        </a>
        <a href="https://www.linkedin.com/in/blockchainmerlin/"><img src={lnk} alt="" width="100px"/></a>
         </div> 
       
        <h1>Samuel Salgado</h1>
          <table className='container'>
        <thead>
        <tr className='titles'>
        <th>Languages</th>
        <th>Age</th>
        <th>Years of Experience</th>
        <th>College</th>
        <th>Coins I Hold</th>
        <th>Adjectives To Describe Me</th>
        <th>Favorite Book</th>
        </tr>
        </thead>
        <tbody>
        <Stats languages="JavaScript, C++, Python, Solidity" age = {25} experience = {3}
        college = "Florida Gulf Coast University" holding="Bitcoin, XRP, Cardano" adjectives="Master Strategist, Change Agent, Creative" book="The Bitcoin Standard" />
        </tbody>
        </table>
        </header>
          

        <footer>
        <p>
        Young blockchain, traditional back-end developer, and Co-Founder of The Merlin Group. Change agent and strategist optimizing archaic business systems with new-aged technology. Personally and professionally invested in the re-emergence of functional medicine and broadening access to these revolutionary therapies and the herbal medicinal practices worldwide. Proficient in C++, JavaScript, and Python(Django, SQL).  I am also learning Rust and Bitcoin scripting for potential future applications. I am a researcher and a strategist. The analyst is required to analyze the parts; the strategist is required to see the pattern.
        </p>
  
       <a href="https://themerlingroup.github.io/SCP/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio Project
      </a>
      <a href='github.com/THEMERLINGROUP/DECENTMED'> Project 2</a>
      <a href='github.com/THEMERLINGROUP/Phase0.1-DMED-TOKEN'>  Project 3</a>
      <a href='https://my.indeed.com/resume/confirm-conversion'> Resume</a>
        </footer>
  
      </div>
    );
  }
}
export default App;