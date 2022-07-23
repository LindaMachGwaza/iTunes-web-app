// Import useState
import React, { useState } from 'react';
// Import react-router-dom components
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// Import components
import Home from './components/Home';
import Favourites from './components/Favourites';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Function to display the app
function App() {
  const [favourites, setFavourites] = useState();

  //Show favourite items that the user would have selected
  const fetchFavourites = async () => {
    const result = await fetch('/api');
    const data = await result.json();
    setFavourites(data.favourites);
  }
 
  return (
    <div className="App">
       {/*Pages routes or links */}
    <Router>
      <Routes>
      <Route path= "/" element ={<Home fetchFavourites={fetchFavourites} favourites={favourites}/>}/>
      <Route path= "/favourites" element ={<Favourites fetchFavourites={fetchFavourites} favourites={favourites}/>}/>
      </Routes>
    </Router>
    </div>
  );
}


export default App;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/