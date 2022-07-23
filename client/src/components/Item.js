// Import components from react
import React, { useEffect, useState } from 'react';
// Import components from react-bootstrap
import { Button } from 'react-bootstrap';
// Import items from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

// Import css
import '../App.css'
//Function to display items
const Item = ({ item, fetchFavourites, favourites }) => {
   const [addFavClicked, setAddFavClicked] = useState(false);
   // Function to determine item's id
   const id = 
      item.trackId ? item.trackId : ( 
         item.artistId && item.collectionId ? (
            Number(item.artistId) + Number(item.collectionId)
         ) : (
            item.artistId ? item.artistId : item.collectionId
         )
      );

   //Api request to add item to favourites
   const addItem = async () => {
      await fetch('/api/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id,
            favItem: item
         })
      });
      fetchFavourites();
   }

   //Function to remove or delete from favourite
   const removeItem = async () => {
      await fetch(`/api/delete/${id}`, {
         method: 'DELETE'
      });
      fetchFavourites();
   }

    //Function to add items from favourites
   const handleAdd = (e) => {
      e.preventDefault();
      setAddFavClicked(true);
      addItem();
   }

   //Function to remove items from favourites
   const handleRemove = (e) => {
      e.preventDefault();
      setAddFavClicked(false);
      removeItem();
   }

  //Determine view more url
   const viewMoreUrl = item.trackViewUrl ? item.trackViewUrl : item.collectionViewUrl;
   const handleViewMore = () => {
      window.open(viewMoreUrl);
   }

   //UseEffect to check if item was added to favs or not
   useEffect(() => {
      if (favourites && favourites !== undefined) {
         for (let i = 0; i < favourites.length; i++) {
            if (favourites[i].id === id) {
               setAddFavClicked(true);
            }
         }
      }
   }, [favourites, id])
   
   return (
      <div className='output-item'>
         {/* Display item's artWork*/}
         <div className='img'>
            {item.artworkUrl100 ? (
               <img src={item.artworkUrl100} alt='media artwork' />
            ) : (
               <div className='img-text'>
                  No image
               </div>
            )}
         </div>
         {/* Show item's information */}
         <div className='item-info'>
            {!item.trackName ? (
               <div className='collection-name'>
                  <span>Name:</span> {item.collectionName}
               </div>
            ) : (
               <div className='track-name'>
                  <span>Name:</span> {item.trackName}
               </div>
            )}
            <div className='artist-name'>
               <span>Artist:</span> {item.artistName}
            </div>
            {/* Display kind or wrapper type */}
            {item.kind ? (
               <div className='kind'>
                  <span>Type:</span> {item.kind}
               </div>
            ) : (
               <div className='wrapper-type'>
                  <span>Type:</span> {item.wrapperType}
               </div>
            )}
         </div>
         <div className='btns'>
            {/*On button click item can be selected or deselected as favourite. Selected item is added to favourite list */}
            <div className='heart-btn'>
               {addFavClicked ? (
                  <button onClick={handleRemove}>
                     <FontAwesomeIcon icon={faSolidHeart} className='clicked' />
                  </button>
               ) : (
                  <button onClick={handleAdd}>
                     <FontAwesomeIcon icon={faSolidHeart} />
                  </button>
               )}
            </div>
            {/*View more info on button click */}
            <div className='view-more-btn'>
               <Button variant='secondary' onClick={handleViewMore}>
                  View more
               </Button>
            </div>
         </div>
      </div>
   )
}

export default Item;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/