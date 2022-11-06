import './App.css';
import Stats from './Stats';
import twitter from './socials/twitter.png'
import youtube from './socials/youtube.png'
import lnk from './socials/lnk.png'
import Github from './socials/Octocat.png'
import Me from './sam.png';
import React from 'react'
const App = () => {
    return (
      <div className="App">
        

        <header className="App-header">
        <h1>Samuel Salgado</h1>
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


          <table className='container'>
        <thead>
        <tr className='titles'>
        <th>Languages</th>
        <th>Age</th>
        <th>Years of Experience</th>
        <th>Projects</th>
        <th>Coins I Hold</th>
        <th>Areas of Expertise</th>
        <th>Certifications</th>
        </tr>
        </thead>
        <tbody>
        <Stats languages="JavaScript, Rust, C++, Go, Python, Solidity" age = {25} experience = {3}
         projects= "SCP(Portfolio Project), Red-Art Splash, The Merlin Group, Go Blockchain, RustChain" holding="Bitcoin, XRP, Cardano" adjectives="Manufacturing, Data Analytics, Wellness, Blockchain, Cybersecurity" certifications="JavaScript, Solidity, Python, Big Data, Hadoop" />
        </tbody>
        </table>
        </header>
          

        <footer>
        <h2 className='centerfooter'>Project History</h2>
  
     
      <div>
        
   

      <a href="https://samsalgado.github.io/SCP/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio Project
      </a>
      <a href='http://www.redartsplash.com/'> Red-Art Splash</a>

      <a href='https://www.themerlingroupworld.com'>The Merlin Group</a>
      
      <a href='https://github.com/samsalgado/Go-Blockchain'>Go Blockchain</a>
           <a href='https://github.com/samsalgado/Rust-Chain'>Rust Chain</a>

            <a href='https://teachingtechnology12.gumroad.com/?_ga=2.128784204.1318804168.1662652584-15204'>Course</a>
           <a href='https://profile.indeed.com/document/review'> Resume</a>

      
        </div>
        </footer>

        
      </div>
    );
  }

export default App;