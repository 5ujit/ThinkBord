import mongoose from "mongoose"

export const connectDB =async()=>{
    try {
        await mongoose.connect()


        console.log("MONGODB CONNECTED SUCCESSFULLY!")
        
        
    } catch (error) {
        console.error("Error conneting to MONGODB",error);
        process.exit(1)// exit with failure    
        
    }
}