require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./db/connection')

const router = require('./routes/router')

const server = express()

server.use(cors())

server.use(express.json())
//use router in server
server.use(router)
//create port to  listen your server app
const PORT = process.env.PORT || 3000

server.get('/',(req,res)=>{
    res.status(200).json("tailormate server started")
})

server.listen(PORT,()=>{
    console.log('tailormate server started at port: ',PORT);
})