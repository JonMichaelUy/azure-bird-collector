const express = require('express');

const router = express.Router();

const Bird = require('../models/birds.js')

router.get('/', (req,res) => {
  res.render('index.ejs')
})

router.get('/new', (req, res) => {
  res.render('new.ejs')
});


router.post('/', (req, res) => {
  Bird.create(req.body, (err, createdBird) => {
    res.redirect('/')
  })
})


module.exports = router;