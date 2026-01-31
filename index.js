import express from "express"
import chalk from "chalk"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/config.js"
import userRoutes from "./routes/userRoute.js"
import categoryRoutes from "./routes/categoryRoute.js"
import supplierRoutes from "./routes/supplierRoute.js"
import productRoutes from "./routes/productRoute.js"
import orderRoutes from "./routes/orderRoute.js"

// instance
const app = express()
//PORT
const port = process.env.PORT || 8000

app.use(cors())
// MONGODB
connectDB()
//middlewares
app.use(express.json())

// API 
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/supplier",supplierRoutes)
app.use("/api/v1/product",productRoutes)
app.use("/api/v1/order",orderRoutes)


app.listen(port,()=>{
    console.log(chalk.yellow(`Server running PORT:http://localhost:${port}`))
})

