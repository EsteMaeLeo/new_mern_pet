import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB