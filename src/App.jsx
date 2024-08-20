import './data.js';
import MovieBanner from './components/MovieBanner/MovieBanner.jsx';
import Navbar from './components/Navbar/Navbar';
import Explore from './components/Explore/Explore';
import Release from './components/Release/Release';
import './App.css';
import { ListAnimes } from './data.js';
import { useState } from 'react';
function App() {
  
  return (
    <div className='page_anonime'>
      <div className="page">
        <div className="content">
          <Navbar />
          <Explore item = {ListAnimes.banner} />
          <div className="anime_items">
            <h1 className="release_title">
              New Release
            </h1>
            <div className="list_anime">
             {ListAnimes.data.map((anime,idx) => { 
               return <div className={`div${idx+1}`} key = {anime.id}>
                  <Release item = {anime} />
              </div>
            })}
            </div>
           
            </div>
          
           
    
          </div>
          
        </div>
        
      </div>

   
  )
 
}

export default App;
