import supplierModel from "../models/supplierModel.js"

// ADD SUPPLIER
export const addSupplier = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, phone, address } = req.body

        if (!name || !email || !phone || !address) {
            return res.status(404).json({ message: "All fields are mandatory" })
        }

        const supplier = new supplierModel({
            name, email, phone, address
        })

        await supplier.save()

        res.status(201).json({
            success: true,
            message: "New supplier added succussfully!",
            supplier
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while adding supplier...",
            error
        })
    }
}

// ALL SUPPLLIERS
export const getAllSupplier = async (req, res) => {
    try {

        const suppliers = await supplierModel.find()

        res.status(200).json({
            status: true,
            suppliers
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error while getting  suppliers...",
            error

        })
    }
}

// DELETE SUPPLIER
export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await supplierModel.findByIdAndDelete({ _id: req.params._id })
        res.status(200).json({
            success: true,
            message: `${supplier.name} deleted!`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting a supplier...",
            error

        })
    }
}
// EDIT SULLPLIER
export const updateSupplier = async (req, res) => {
    try {
        {
            console.log(req.body)
          const supplier =   await supplierModel.findByIdAndUpdate(
            { _id: req.params._id },
                {
                    $set: {
                        name: req.body.name,
                        email:req.body.email,
                        phone:req.body.phone,
                        address:req.body.address,
                    }
                },
                {
                    new: true
                }
            )
            await supplier.save()
            res.status(201).json({
                status: true,
                message: "Supplier Updated Successfully!",
                supplier
            })
        }

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error while updating a supplier...",
            error

        })
    }
}