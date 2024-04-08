const express = require("express")

const router = new express.Router()

const orderController = require('../controllers/orderController')

router.get('/get-all-orders',orderController.getallorders)

router.post('/add-new-order',orderController.addNewOrder)

router.delete('/order/remove-order/:id',orderController.removeOrder)


module.exports = router
