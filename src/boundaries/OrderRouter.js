import express from "express";
import * as orderController from "../controllers/OrderController.js"

const orderRouter = express.Router();

//danh sach product
orderRouter.post("/add", orderController.insertOrder);

//req phai nhu thế này 
// {
//     "order":{
//         "address":"21 Hóc Môn",
//         "phone":"01241475143"
//     },
//     "orderDetails": [
//         {
//         "price": "5000",
//         "unit": "3",
//         "productId" : "P01"
//         },{
//         "price": "5000",
//         "unit": "4",
//         "productId" : "M01"
//         }

//     ]
// }

orderRouter.get(`/my-orders`, orderController.getOrderByUsername)

orderRouter.get(`/my-order-details`, orderRouter)
// //lay san pham bang id
// productRouter.get(`/:id`, productController.getProductById);

// // them san pham
// productRouter.post(`/add`, productController.insertProduct);

// //sua san pham
// productRouter.put(`/:id`, productController.updateProduct);

// //delete san pham
// productRouter.delete(`/:id`,productController.deleteProduct);

export default orderRouter;
