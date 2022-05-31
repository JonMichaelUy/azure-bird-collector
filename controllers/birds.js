const express = require('express');

const router = express.Router();

const Bird = require('../models/bird.js')

// router.get('/', (req,res) => {
//   res.render('index.ejs')
// });

//Index
router.get('/', (req, res) => {
  Bird.find({}, (err, foundBirds) => {
    res.render('index.ejs', {
      birds: foundBirds
    });
  });
});

//New
router.get('/new', (req, res) => {
  res.render('new.ejs')
});


//Delete
router.delete('/:id', (req, res) => {
  Bird.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect('/');
  });
});




router.post('/', (req, res) => {
  Bird.create(req.body, (err, createdBird) => {
    res.redirect('/')
  })
})


router.get('/:id', (req, res) => {
  Bird.findById(req.params.id, (err, foundBird) => {
    console.log(req.params.id)
    res.render('show.ejs', {
      bird: foundBird
    });
  });
});


module.exports = router;