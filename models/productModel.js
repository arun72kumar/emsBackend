
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    stock: { type: Number },
    category: {
       type:mongoose.Schema.Types.ObjectId,
       ref:"Category"
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },

})


const productModel = mongoose.model("Product", productSchema)
export default productModel