var Pizza = require("../models/pizzaSchema")

exports.createPizza = async(req,res) => {
    var response = await Pizza.create(req.body)
    if(!response){
        return res.status(500).json({message:  "Error creating pizza"})
    }
    
    res.status(201).json({
        message:"Succes",
        response
    })
}

exports.allPizzas = async(req,res) => {
    var response = await Pizza.find()
    if(!response){
        return res.status(500).json({message:  "Nothing to display"})
    }
    
    res.status(201).json({
        message:"Succes",
        response
    })
}
exports.updatePizza = async(req,res) => {
    var response = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!response){
        return res.status(500).json({message:  "Unable to update pizza"})
    }
    
    res.status(201).json({
        message:"pizza updated succesfully",
        response
    })
}
exports.deletePizza = async(req,res) => {
    var response = await Pizza.findByIdAndDelete(req.params.id)
    if(!response){
        return res.status(500).json({message:  "Unable to delete pizza"})
    }
    
    res.status(201).json({
        message:"Pizza deleted succesfully",
    })
}