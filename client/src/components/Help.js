import React from 'react'
//Import react-bootstrap component
import { Offcanvas } from 'react-bootstrap';
//Import Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash as faSolidTrash } from '@fortawesome/free-solid-svg-icons';
//Import CSS
import '../App.css';

//Function that displays Help section on click of the help button
const Help = ({showHelp, handleHelpClose}) => {
   return (
      <Offcanvas 
         show={showHelp} 
         onHide={handleHelpClose}
         placement='start'
      >
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>See instructions below:</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <div className='help-search'>
               <h5 className='title'>To search:</h5>
               <ol>
                  <li>
                     Enter a term that you want to search for e.g artist name, movie/song name, etc.
                  </li>
                  <li>
                     Choose media type from dropdown i.e movie, podcast and so on. 
                  </li>
                  <li>
                     Click on search button.
                  </li>
               </ol>
            </div>
            <div className='help-add-fav'>
               <h5 className='title'>Add to favourites:</h5>
               <ol>
                  <li>
                     Click the heart icon next to the item you want to select <FontAwesomeIcon icon={faSolidHeart} /> .
                  </li>
               </ol>
            </div>
            <div className='help-view-more-info'>
               <h5 className='title'>To view item's additional info:</h5>
               <ol>
                  <li>Click the 'View more' button next to the item</li>
               </ol>
            </div>
            <div className='help-view-fav'>
               <h5 className='title'>To view favourites:</h5>
               <ol>
                  <li>
                     Click the 'Favourites' button which will take you to your list of favourites
                  </li>
               </ol>
            </div>
            <div className='help-remove-fav'>
               <h5 className='title'>To delete or remove item from favourites:</h5>
               <ol>
                  <li> Click the <FontAwesomeIcon icon={faSolidTrash} /> icon next to the item</li >
               </ol>
            </div>
            <div className='help-remove-fav-home'>
               <h5 className='title'>To deselect an item as favourite:</h5>
               <ol>
                  <li>Click the heart <FontAwesomeIcon icon={faSolidHeart}/> icon next to the item on the homepage</li>
               </ol>
            </div>
         </Offcanvas.Body>
      </Offcanvas>
   )
}

export default Help;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/