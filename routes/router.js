const express = require("express")

const router = new express.Router()

const orderController = require('../controllers/orderController')

router.get('/get-all-orders',orderController.getallorders)

router.get('/get-one-order/:id',orderController.getOneOrder)

router.post('/add-new-order',orderController.addNewOrder)

router.delete('/order/remove-order/:id',orderController.removeOrder)

router.put('/order/update-order/:id',orderController.updateOrder)

module.exports = router
