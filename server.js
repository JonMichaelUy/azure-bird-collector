//Dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;
const birdsController = require('./controllers/birds');


//Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongodb not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
//Controllers
app.use('/', birdsController)











app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})