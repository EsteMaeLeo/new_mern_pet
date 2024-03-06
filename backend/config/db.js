import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const db = await mongoose.connect(
            //process.env.MMONGO_URI,
            "mongodb+srv://",
)
        
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB