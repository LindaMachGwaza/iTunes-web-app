// Import react
import React from 'react';
// Import component
import Item from './Item';
// Import css
import '../App.css';

//Function to display output of items
const Output = ({ output, fetchFavourites, favourites }) => {
   return(
      <div className='output-container'>
         {(output.results !== undefined) ? (
            <>
               {(output.resultCount !== 0) ? (
                  <>
                  <div className='output-items'>
                     {/*Display items*/}
                     {output && output.results.map((item) => (
                        // Component for each item
                        <Item
                           item={item}
                           key = {
                              item.trackId ? item.trackId : (
                                 item.artistId && item.collectionId ? (
                                    Number(item.artistId) + Number(item.collectionId)
                                 ) : (
                                    item.artistId ? item.artistId : item.collectionId
                                 )
                              )
                           }
                           fetchFavourites={fetchFavourites}
                           favourites={favourites}
                        />
                     ))}
                  </div>
                  </>
               ) : (
                  <>
                  <div className='error-text'>
                     Sorry, no results found for your search.
                  </div>
                  </>
               )}
            </>
         ) : (
            <>
            <div className='welcome-text'>
               Welcome! Enter a search term and click search button!
            </div>
            </>
         )}
      </div>
   )
};

export default Output;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/