import categoryModel from "../models/categoryModel.js"

// add category
export const addCategory = async (req, res) => {
    try {
        console.log("ok")
        if (!req.body.name || !req.body.description) {
            return res.status(404).json({ message: "All fields are required!" })
        }

        const exitingCatgory = await categoryModel.findOne({ name: req.body.name })

        if (exitingCatgory) {
            return res.status(200).json({ message: "Category already added!" })
        }
        const category = new categoryModel({
            name: req.body.name,
            description: req.body.description
        })

        await category.save()
        res.status(201).json({
            success: true,
            message: 'Category added successfully!',
            category
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: "Error while adding new category...",
            error
        })
    }

}

// all category
export const allCategorires = async (req, res) => {
    try {
        const categories = await categoryModel.find()
        res.status(200).json({
            success: true,
            categories
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: "Error while getting category...",
            error
        })
    }

}

// delete category controller
export const deleteCategory = async (req, res) => {
    try {
        await categoryModel.findByIdAndDelete({ _id: req.params._id })
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully!',
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: "Error while deleting category...",
            error
        })
    }

}

// update category controller
// add category
export const updateCategory = async (req, res) => {
    try {

        const category = await categoryModel.findByIdAndUpdate(
            { _id: req.params._id },
            {
                name: req.body.name,
                description: req.body.description
            },
            { new: true }
        )
            console.log(category)

            res.status(201).json({
            success: true,
            message: 'Category updated successfully!',
            category
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: "Error while updating category...",
            error
        })
    }

}