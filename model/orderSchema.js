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
    items:{
        type:[],
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    } ,
    totalAmount :{
        type:Number,
        required:true
    }
})

const orders = mongoose.model("orders",orderSchema)

module.exports = orders


