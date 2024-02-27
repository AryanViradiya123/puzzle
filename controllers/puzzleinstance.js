const puzzleinstance = require("../models/puzzleinstance")

exports.puzzleinstanceCreate = async function (req, res, next) {
    try {
      if (!req.body.puzzleinstancetext || !req.body.puzzleinstancetype ) {
        throw new Error('pleace enter valid fields')
      }
      const data = await puzzleinstance.create(req.body)
      
      res.status(201).json({  
        message: "puzzleinstanceCreate successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.puzzleinstanceFind = async function (req, res, next) {
  try {
    const data = await puzzleinstance.find()

    res.status(200).json({
      status: "success",
      message: "puzzleinstanceCreatesuccessfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.puzzleinstanceUpdate =  async function (req, res, next) { 
    try {
      await puzzleinstance.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "puzzleinstance update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.puzzleinstanceDelete = async function (req, res, next) {
    try {
      const data = await puzzleinstance.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "puzzleinstance delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}