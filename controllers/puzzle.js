const puzzle = require("../models/puzzle")

exports.puzzleCreate = async function (req, res, next) {
    try {
      if (!req.body.title || !req.body.description ) {
        throw new Error('pleace enter valid fields')
      }
      const data = await puzzle.create(req.body)
      
      res.status(201).json({  
        message: "puzzleCreate successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.puzzleFind = async function (req, res, next) {
  try {
    const data = await puzzle.find().populate(['userid'])

    res.status(200).json({
      status: "success",
      message: "puzzleCreatesuccessfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.puzzleUpdate =  async function (req, res, next) { 
    try {
      await puzzle.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "puzzle update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.puzzleDelete = async function (req, res, next) {
    try {
      const data = await puzzle.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "puzzle delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}