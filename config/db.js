
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

//connectDB function
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected on ${conn.connection.host} & on port ${conn.connection.port}`)
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1)
  }
};
export default connectDB;
