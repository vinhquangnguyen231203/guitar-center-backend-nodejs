import db from "../ConnectToDB.js";

const orderColl = db.collection("order");

export default class Order{
    constructor({orderId, address, orderDate, phone, status, totalPrice, username}) {
        this.orderId = orderId;
        this.address = address;
        this.orderDate = orderDate;
        this.phone = phone;
        this.status = status;
        this.totalPrice = totalPrice;
        this.username = username;
        this.orderDetails = []; 
      };

    static getAllOrders = async () =>{
        try {
            const documents = await orderColl.find().toArray();
            const orders = documents.map((document)=> new Order(document));
            return orders;
        } catch (error) {
          throw error;  
        };
    };

    static getOrderByUsername = async (username) =>{
        try {
            const orderExist = await orderColl.findOne({username});
            if (orderExist) {
                return new Order(orderExist);
            }
        } catch (error) {
            throw error;
        }
    }

    static insertOrder = async (orderData) =>{
        try {
            await orderColl.insertOne(orderData);
            const order = new Order(orderData);
            return order;
        } catch (error) {
            throw error;
        }
    }
  
    
    static updateStatusOrder = async (orderData) =>{
        try {
            const id = orderData.orderId;
            await orderColl.updateOne({orderId: id}, {$set: {status: orderData.status}});
        } catch (error) {
            throw error;
        }
    }

    static deleteOrder = async(oderId) =>{
        try {
            await orderColl.deleteOne({oderId});
        } catch (error) {
            throw error;
        }
    }

};
