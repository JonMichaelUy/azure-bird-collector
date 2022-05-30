const express = require('express');

const router = express.Router();

const Bird = require('../models/bird.js')

// router.get('/', (req,res) => {
//   res.render('index.ejs')
// });

router.get('/new', (req, res) => {
  res.render('new.ejs')
});


router.get('/', (req, res) => {
  Bird.find({}, (err, foundBirds) => {
    res.render('index.ejs', {
      birds: foundBirds
    });
  });
});

router.post('/', (req, res) => {
  Bird.create(req.body, (err, createdBird) => {
    res.redirect('/')
  })
})


module.exports = router;