import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string); // No need for additional options
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
};

export default connectDB;