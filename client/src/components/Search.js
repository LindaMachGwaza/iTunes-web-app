import React from 'react'
// Import react-bootstrap components
import { Button, Form, FormControl, FormGroup, FormSelect } from 'react-bootstrap'
// Import CSS
import '../App.css'

const Search =({
    handleSubmit,
    term,
    handleTermChange,
    handleMediaChange
}) => {
    //Media type array
    const media = [
        {type: 'All media', value: 'all'},
        {type: 'Movie', value: 'movie'},
        {type: 'Podcast', value: 'podcast'},
        {type: 'Music', value: 'music'},
        {type: 'Music video', value: 'musicVideo'},
        {type: 'Audio book', value: 'audiobook'},
        {type: 'Short film', value: 'shortFilm'},
        {type: 'TV show', value: 'tvShow'},
        {type: 'Software', value: 'software'},
        {type: 'Ebook', value: 'ebook'}
     ];

     return (
        <div className='search-container'>
            <Form onSubmit={handleSubmit}> {/*Input field for searching; user enters a term they want to search for */}
                <FormGroup className='form-group search-box'>
                    <FormControl type='text' className='search-bar'placeholder='Search...'
                    name='term'value={term} onChange={handleTermChange}
                    />
                </FormGroup>
                <FormGroup className='form-group filter'>
                <FormSelect onChange={handleMediaChange}> {/*Display media options dropdown menu */}
                    {media && media.map((media)=> (
                        <option key ={media.value} value ={media.value}>
                                {media.type}
                        </option>
                    ))}
                </FormSelect>
                </FormGroup>
                <FormGroup className='submit-btn'>{/*Search items on button click */}
                    <Button variant='secondary' type='submit'>
                        Search
                    </Button>
                </FormGroup>
            </Form>

        </div>
     )
}

export default Search;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/