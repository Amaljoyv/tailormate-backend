const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
})

const users = mongoose.model("users",userSchema)

module.exports = users


