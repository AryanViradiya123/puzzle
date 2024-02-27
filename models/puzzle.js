const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzledata = new Schema({
  title: String,
  description:String,
  DateCreated: {        
    type: Date,
    default: Date.now
  }
});

const puzzle = mongoose.model('puzzle',puzzledata)
module.exports=puzzle