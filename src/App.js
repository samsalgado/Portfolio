import './App.css';
import Stats from './Stats';
import Me from './IMG_4536.png';
import Github from './Octocat.png';
import React from 'react';
import lnk from './lnk.png';
import twitter from './twitter.png';
import youtube from './youtube.png';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Me} alt="" width="300 px" height="250px" className='App-logo' />
        <div class="social-container2">
        <a href="https://twitter.com/ttf123457">
        <img src={twitter} alt="" width="100px" />
        </a>

        
        <a href='https://www.youtube.com/channel/UC6sW-ySnK3c72_9vJAOdQow'><img src={youtube} alt="img" width="100px" />
        </a>
        <a href="https://github.com/samsalgado"><img src={Github} alt="" width="100px" />
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
        <Stats languages="JavaScript, Rust, C++, Go, Python, Solidity" age = {25} experience = {3}
        college = "Florida Gulf Coast University" holding="Bitcoin, XRP, Cardano" adjectives="Master Strategist, Change Agent, Creative" book="The Bitcoin Standard" />
        </tbody>
        </table>
        </header>
          

        <footer>
        <p>
        Full-Stack blockchain developer, change agent, and strategist optimizing archaic business systems with both traditional and new-aged technology. Proficient in Solidity, C++, Rust, Go, JavaScript, and Python(Django, SQL).  I am also learning Bitcoin scripting for potential future applications. I am a researcher and a strategist. The analyst is required to analyze the parts; the strategist is required to see the pattern.
        </p>
  
       <a href="https://samsalgado.github.io/SCP/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio Project
      </a>
      <a href='https://www.dvlpnft.io/'> Project 1</a>
      <a href='https://www.themerlingroupworld.com'>Project 2</a>
      <a href='https://github.com/samsalgado/Phase0.1-DMED-TOKEN'>  Project 3</a>
      <a href='https://github.com/samsalgado/Go-Blockchain'>Project 4</a>
      <a href='https://github.com/samsalgado/Rust-Chain'>Project 5</a>
      <a href='https://teachingtechnology12.gumroad.com/?_ga=2.128784204.1318804168.1662652584-15204'>Course</a>
      <a href='https://profile.indeed.com/document/view'> Resume</a>
        </footer>
  
      </div>
    );
  }
}
export default App;