import React from 'react';
// Import Button component
import { Button } from 'react-bootstrap';
// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as faSolidTrash } from '@fortawesome/free-solid-svg-icons';
// Import CSS
import '../App.css';

//Function to show fav items as well as be able to remove or delete items
const FavItem = ({ item, fetchFavourites }) => {
    //Delete item and set new list
    const removeItem = async () => {
       await fetch(`/api/delete/${item.id}`, {
          method: 'DELETE'
       });
       fetchFavourites();
    }
    const handleRemove = (e) => {
       e.preventDefault();
       removeItem();
    }
    //View more function; allow user to view more info when view more button is clicked
    const viewMoreUrl = item.favItem.trackViewUrl ? item.favItem.trackViewUrl : item.favItem.collectionViewUrl;
    const handleViewMore = () => {
       window.open(viewMoreUrl);
    }
 
    return (
       <div className='fav-item'>
        {/*Display artwork or text if no artwork */}
          <div className='img'>
             {item.favItem.artworkUrl100 ? (
                <img src={item.favItem.artworkUrl100} alt='media artwork' />
             ) : (
                <div className='img-text'>
                   No image
                </div>
             )}
          </div>
          {/*Display item's info */}
          <div className='item-info'>
             {!item.favItem.trackName ? (
                <div className='collection-name'>
                   <span>Name:</span> {item.favItem.collectionName}
                </div>
             ) : (
                <div className='track-name'>
                   <span>Name:</span> {item.favItem.trackName}
                </div>
             )}
             <div className='artist-name'>
                <span>Artist:</span> {item.favItem.artistName}
             </div>
             {item.favItem.kind ? (
                <div className='kind'>
                   <span>Type:</span> {item.favItem.kind}
                </div>
             ) : (
                <div className='wrapper-type'>
                   <span>Type:</span> {item.favItem.wrapperType}
                </div>
             )}
          </div>
          {/*Onclick of buttons user can remove item from list or view more info */}
          <div className='btns'>
             <div className='remove-btn'>
                <button onClick={handleRemove}>
                   <FontAwesomeIcon icon={faSolidTrash} />
                </button>
             </div>
             <div className='view-more-btn'>
                <Button variant='secondary' onClick={handleViewMore}>
                   View more
                </Button>
             </div>
          </div>
       </div>
    )
 }
 
 export default FavItem;

 /*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
  StackOverflow, Github, Geeksforgeeks*/