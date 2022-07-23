import React from 'react'
// Import components
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavItem from './FavItem';
// Import CSS
import '../App.css';

//Function to display favourites
const Favourites = ({fetchFavourites, favourites}) => {
   return (
      <div className='favourites-container'>
         <div className='header-section'>
            <div className='header-container'>
               <div className='back-btn'>
                  {/* On click of this button; user returns to home page */}
                  <Link to='/'>
                     <Button className='btn btn-secondary'>Back</Button>
                  </Link>
               </div>
               <div className='header'>
                  <h1>My Favourites</h1>
               </div>
               {/* Used spacer to ensure that the title is in the middle of the page */}
               <div className='spacer'></div>
            </div>
         </div>
         {/*If no favourites selected then display no favourites message or show favourites in favourite section if user selects them */}
         <div className='favourites'>
            {(favourites === undefined) ? (
               <div className='empty'>
                  <p>No favourites selected yet.</p>
               </div>
            ) : (
               <div className='fav-items'>
                  {favourites && favourites.map((item) => (
                    //Favourite item component
                     <FavItem
                        item={item}
                        key={item.id}
                        fetchFavourites={fetchFavourites}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}

export default Favourites;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/