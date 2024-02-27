const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzlefeedbackdata = new Schema({
    userid : {
      type: Schema.Types.ObjectId, ref: 'user',
      required : true
    },
    puzzleid : {
      type: Schema.Types.ObjectId, ref: 'puzzle',
      required : true
    },
    puzzleinstanceid : {
      type: Schema.Types.ObjectId, ref: 'puzzleinstance',
      required : true
    },
    rating: {
      type: String,
      enum : ["1","2","3","4","5"],
      default : "5",
      required : true
    }
});

const puzzlefeedback = mongoose.model('puzzlefeedback',puzzlefeedbackdata)
module.exports=puzzlefeedback