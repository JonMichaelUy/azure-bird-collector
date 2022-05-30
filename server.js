//Dependencies
const express = require('express');
const app = express();
const PORT = 3000;
const birdsController = require('./controllers/birds');


//Database Connection

//Controllers
app.use('/', birdsController)











app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})