const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
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
    item:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    } 
})

const orders = mongoose.model("orders",orderSchema)

module.exports = orders


