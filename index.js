const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const path = require('path');
//Helmet used to secure the app
 //const helmet = require('helmet');
//Import routes
const routes = require('./routes/itunes');
//initialize express
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
//app.use(helmet());
//app.use(
  // helmet({
    // contentSecurityPolicy: false,
   //})
 //);

//Routes
app.use('/api', routes);

//GET items from API search
app.get(`/search`, (req, res) => {
   const term = req.query.term; 
   const media = req.query.media;

   //Fetch request from iTunes API using term and media parameter keys
   fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=20`)
      .then(result => result.json())// Change the result into json format
      .then (response => {
         res.send({
            message: 'Search was successful',
            response
         })
      })
      .catch(error => {
         res.send({
            message: 'There seems to be an error'
         })
      })
})

//Similar to above but this is just to test the search endpoints.
app.get(`/searchTest`, (req, res) => {
   const term = 'Batman'; 
   const media = 'all'; 

   //Fetch request from iTunes API using term and media parameter keys
   fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=20`)
      .then(result => result.json()) 
      .then(response => {
         res.send({
            message: 'Search was successful',
            response
         })
      })
      .catch(error => {
         res.send({
            message: 'There seems to be an error'
         })
      })
})

if (process.env.NODE_ENV === 'production') {
   //Save static files
   app.use(express.static(path.join(__dirname, 'client/build')));
   //GET request and return results to frontend
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

//PORT
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/