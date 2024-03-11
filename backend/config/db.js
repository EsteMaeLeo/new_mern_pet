import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const db = await mongoose.connect(
            //process.env.MMONGO_URI,
            process.env.MONGO_URI,
)
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`Mongo Connected to ${url}`)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB