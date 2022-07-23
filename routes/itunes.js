const express = require('express');
const router = express.Router();

//Objects empty array
let favourites = [];

//GET favourites request
getFavouritesHandler = (req, res) => {
   if (favourites.length === 0) {
      res.send({
         message: "You have no favourites to display"
      })
   } else {
      res.send({
         favourites
      })
   }
}

//GET 
router.get('/', getFavouritesHandler)

//POST new item and add to existing items
postFavouritesHandler = (req, res) => {
   //Create unique id
   const id = Math.floor(100000 + Math.random() * 900000);
   newItem = Object.assign(req.body);
   favourites.push(newItem);

   return res.send({
      message: 'Item added successfully',
      favourites
   });
}

//POST - favourites
router.post('/add', postFavouritesHandler)

//DELETE by id
deleteFavouritesHandler = (req, res) => {
   const id = Number(req.params.id);
   for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].id === id) {
         favourites.splice(i, 1);
      };
   };

   res.send({
      message: `Item with id ${id} has been deleted`,
      favourites
   });
}

//DELETE from favourites
router.delete('/delete/:id', deleteFavouritesHandler);

module.exports = router;

/*Sources used in executing the task include Hyperiondev notes and vedios, previous tasks, You Tube, Google.com, 
StackOverflow, Github, Geeksforgeeks*/