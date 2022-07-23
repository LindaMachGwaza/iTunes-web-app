import React, { useState } from 'react'
// Import react-bootstrap components
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//Import components
import Help from './Help'
// Import CSS
import '../App.css'

//Function for Header section
const Header = () => { 
    //Show or hide help section
    const [showHelp, setShowHelp] = useState(false);
    const handleHelpClose = () => setShowHelp(false);
    const handleHelpOpen = () => setShowHelp(true);

    return (
        <div>
            <div className='header-container'>
                <div className='help-btn'>{/*Help section opens on click of button */}
                    <Button variant='secondary' onClick={handleHelpOpen}>Help</Button>
                </div>
            <div className='header'>
                <h1>iTunes Web App Search Store</h1>
            </div>
            <div className='favourite-btn'>
                <Link to ='/favourites'> {/*Button to favourites page when clicked */}
                <Button className='btn btn-secondary'>Favourites</Button>
                </Link>
            </div>
            </div>
            {/*Help component */}
            <Help showHelp ={showHelp}
                  handleHelpClose={handleHelpClose}  
            />
        </div>
    )
}


export default Header;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/