import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async (params) => {
    try {
          const conn =  await mongoose.connect(process.env.MONGO_URL)
          if(conn)
          {
              console.log(`Connected to db server....`)
          }
    } catch (error) {
         console.log(error)
    }
}

export default connectDB;
