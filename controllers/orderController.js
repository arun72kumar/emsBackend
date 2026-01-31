import orderModel from "../models/orderModel.js"

export const orderController = async (req, res) => {
    try {
        const { productId, quantity, total } = req.body
        
        // const userId = req.user._id
        // console.log(req.user._id)

        // if (!productId) {
        //     return res.status(404).json({ message: "Product not found!" })
        // }
        const order = new orderModel({
            product: productId,
            quantity,
            totalPrice: total
        })

        await order.save()
        res.status(201).json({
            success: true,
            message:"Order added successfully! ",
            order
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while adding order...",
            error
        })
    }
}

export const allOrdersController = async (req,res) => {
      try {
          const orders =   await  orderModel.find().populate("product")
           res.status(200).json({
            success:true,
            orders
           })
        
      } catch (error) {
         res.status(500).json({
            success:false,
            message:"error while getting orders...",
            error
         })
      }  
}