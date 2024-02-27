const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleinstancedata = new Schema({
  puzzleinstancetext: String,
  puzzleinstancetype:{
    type: String,
    enum : ["True","False"],
    default : "False",
  }
});

const puzzleinstance = mongoose.model('puzzleinstance',puzzleinstancedata)
module.exports=puzzleinstance