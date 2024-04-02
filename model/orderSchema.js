const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    } 
})

const orders = mongoose.model("orders",orderSchema)

module.exports = orders


