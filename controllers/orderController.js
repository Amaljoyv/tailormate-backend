const orders = require("../model/orderSchema");

const { ObjectId } = require("mongodb");

exports.getallorders = async (req, res) => {
  //logic
  try {
    const allorders = await orders.find();
    const deliveredOrders = await orders.find({ orderStatus: "Delivered" });
    const processingOrders = await orders.find({ orderStatus: "Processing" });
    const manufacturingOrders = await orders.find({ orderStatus: "Manufacturing" });
    const dispatchOrders = await orders.find({ orderStatus: "Dispatch" });
    const placedOrders = await orders.find({ orderStatus: "Order Placed" });

    //send to client
    res.status(200).json({
      allorders: allorders,
      deliveredOrders: deliveredOrders,
      processingOrders: processingOrders,
      manufacturingOrders: manufacturingOrders,
      dispatchOrders: dispatchOrders,
      placedOrders: placedOrders 
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getOneOrder = async (req, res) => {
  const id =req.params.id
  // console.log(id);
  //logic
  try {
    const objectid = new ObjectId(id);
    // console.log("Object-id : ", objectid);
    const orderDetails = await orders.findOne({_id: objectid});

    //send to client
    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.addNewOrder = async (req, res) => {
  const { id, date, paymentMode , time, name, mobile , address , deliveryDate , reqWorkingDays , trialDate , items, orderStatus } =
    req.body;
  console.log("req.body", req.body);
  try {

    const totalAmount = items.reduce((total, item) => {
      const subtotal = parseFloat(item.amount) * parseFloat(item.quantity);
      return total + subtotal;
    }, 0);

    const newOrder = new orders({
      id,
      date,
      paymentMode,
      time,
      name,
      mobile,
      address,
      deliveryDate,
      reqWorkingDays,
      trialDate,
      items,
      orderStatus,
      totalAmount 
    });
    await newOrder.save();
    res.status(200).json("Order Successfully Added");
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.removeOrder = async (req, res) => {
  // console.log(req.body);
  const { id } = req.params;
  console.log("id to delete : ", id);
  try {
    const objectid = new ObjectId(id);
    // console.log("Object-id : ", objectid);
    const removeOrder = await orders.deleteOne({ _id: objectid });
    if (removeOrder) {
      const allorders = await orders.find();
      res.status(200).json(allorders);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id; // Assuming the ID is passed as a URL parameter
    const updatedData = req.body; // Assuming the updated data is sent in the request body
    // console.log(req.body);
    // console.log(req.params.id);
    // Validate if orderId is a valid ObjectId
    // if (!ObjectId.isValid(orderId)) {
    //   return res.status(400).json({ error: 'Invalid order ID' });
    // }
    const objectid = new ObjectId(orderId);
    // console.log("Object-id is : ", objectid);
    // Update the order
    const filter = { _id: objectid };
    // console.log(`filter : ${filter}`);
    const updateResult = await orders.updateOne(filter, { $set: updatedData });

    if (updateResult.modifiedCount === 1) {
      return res.json({ success: true, message: 'Order updated successfully' });
    } else {
      return res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error updating order:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// exports  register = async (acno, username, password) => {
//     console.log("inside register logic");

//     try {
//         // 1. get acno, uname and pswd from request body
//         // asynchronous function call promise ()
//         const result = await db.User.findOne({ acno });

//         console.log(result);

//         // 2.1  if acno is existing, send response as "user already exists" to client
//         if (result) {
//             return {
//                 statusCode: 401,
//                 message: "User Already Exists....."
//             };
//         }
//         // 2.1 if acno is not existing, create acno in bank database with details as its uname and pswd and send response as "register successfully" to client
//         else {
//             const newUser = new db.User({
//                 acno,
//                 username,
//                 password,
//                 balance: 1000,
//                 transactions: []
//             });

//             // to store data in mongodb
//             await newUser.save();

//             return {
//                 statusCode: 200,
//                 message: "Register Successfully...."
//             };
//         }
//     } catch (error) {
//         // Handle any errors that occur during the process
//         console.error("Error occurred during registration:", error);
//         return {
//             statusCode: 500,
//             message: "Internal Server Error"
//         };
//     }
// };
