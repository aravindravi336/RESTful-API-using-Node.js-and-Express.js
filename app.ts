import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './src/routes/UserRoutes';
import connectDB from './src/config/db';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect Database
connectDB();

export default app;
