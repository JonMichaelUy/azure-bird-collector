const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const birdSchema = new Schema({        
  image: { type: String }, 
  name: { type: String }, 
  scientificName: { type: String }, 
  description: { type: String }, 
  notes: { type: String }, 
});

const Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;