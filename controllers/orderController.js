const orders = require('../model/orderSchema')

exports.getallorders = async (req,res)=>{
    //logic
   try{
    const allorders =  await orders.find()
   //send to client
   res.status(200).json(allorders)
    }
    catch(error){
        res.status(401).json(error)
    }
}


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
