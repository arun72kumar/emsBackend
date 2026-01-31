import productModel from "../models/productModel.js"

export const addProduct = async (req, res) => {
    try {

        const product = productModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            category: req.body.category,
            supplier: req.body.supplier
        })
        await product.save()
        res.status(201).json({
            success: true,
            message: "New Product Added!",
            product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while adding a new product..."
        })
    }
} 

// ALL PRODUCTS
export const getAllProducts = async (req, res) => {
    try {

        const products = await productModel
        .find().populate("category").populate("supplier")

        console.log(products)
        res.status(200).json({
            status: true,
            products
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error while getting  products...",
            error

        })
    }
}

// DELETE PRODUCT
export const deleteProductController = async (req,res) => {
    try {
         const product =  await productModel.findByIdAndDelete({_id:req.params._id})
         if(product)
         {
            return res.status(200).json({
                success:true,
                message:`${product?.name} Deleted Successfully!`
            })
         }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting a product...",
            error

        })
    }
}

// EDIT PRODUCT
export const updateProductController = async (req, res) => {
    try {
        {
          const product =   await productModel.findByIdAndUpdate({ _id: req.params._id },
                {
                    $set: {
                        name: req.body.name,
                        description:req.body.description,
                        price:req.body.price,
                        stock:req.body.stock,
                        category:req.body.category,
                        supplier:req.body.supplier
                    }
                },
                {
                    new: true
                }
            )
            await product.save()
            res.status(201).json({
                status: true,
                message: "Product Updated Successfully!",
                product
            })
        }

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error while updating a product...",
            error

        })
    }
}
