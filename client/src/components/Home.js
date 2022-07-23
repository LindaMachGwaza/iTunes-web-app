// Import useState from react
import React, { useState } from 'react'
// Import components
import Header from './Header'
import Search from './Search'
import Output from './Output'
// Import CSS
import '../App.css';

//Function to display the homepage where user interracts with the app
const Home = ({fetchFavourites, favourites}) => {
    const [term, setTerm] = useState('');
    const [media, setMedia] = useState('all');
    const [output, setOutput] = useState({});
 
    // Fetch the searched item/data from backend api and display to the frontend
    const fetchOutput = async () => {
       const result = await fetch(`/search?term=${term}&media=${media}`);
       const data = await result.json();
       setOutput(data.response);
    }
 
    // Search items on submission of request, alert user to enter a term before submission
    const handleSubmit = (e) => {
       e.preventDefault();
       if (term === '') {
          alert(`Please enter a term before searching`);
       } else {
          fetchOutput();
       }
    }
 
    // Handle term change
    const handleTermChange = (e) => {
       setTerm(e.target.value);
    }
 
    // Handle media type change
    const handleMediaChange = (e) => {
       setMedia(e.target.value);
    }
    //Display Header, Search and Output components
    return (
       <div className='home'>
          <div className='header-section'>
             <Header />
          </div>
          <div className='search-and-output'>
             <div className='search-container-section'>
                <Search
                   handleSubmit={handleSubmit}
                   term={term}
                   handleTermChange={handleTermChange}
                   handleMediaChange={handleMediaChange}
                />
             </div>
             <div className='output-container-section'> {/*Display searched results, allow favourites to be selected and displayed */}
                <Output 
                   output={output}
                   fetchFavourites={fetchFavourites}
                   favourites={favourites}
                />
             </div>
          </div>
       </div>
    )
 }

export default Home; 

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/