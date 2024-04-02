const express = require("express")

const router = new express.Router()

const orderController = require('../controllers/orderController')

router.get('/get-all-orders',orderController.getallorders)

module.exports = router
