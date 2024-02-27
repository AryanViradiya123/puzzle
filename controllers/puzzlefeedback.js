const puzzlefeedback = require("../models/puzzlefeedback")

exports.puzzlefeedbackCreate = async function (req, res, next) {
    try {
      const data = await puzzlefeedback.create(req.body)
      
      res.status(201).json({  
        message: "puzzlefeedback successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.puzzlefeedbackFind = async function (req, res, next) {
  try {
    const data = await puzzlefeedback.find().populate(['userid' , 'puzzleid', 'puzzleinstanceid'])

    res.status(200).json({
      status: "success",
      message: "puzzlefeedback found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.puzzlefeedbackUpdate =  async function (req, res, next) { 
    try {
      await puzzlefeedback.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "puzzlefeedback update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.puzzlefeedbackDelete = async function (req, res, next) {
    try {
      const data = await puzzlefeedback.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "puzzlefeedback delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

