import express from 'express';
import mongoose from 'mongoose';
import inventoryRoutes from './routes/inventoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import connectDB  from './config/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();


// Log the router to verify routes
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Root route - only matches exact root path
app.get("/", (req, res) => {
    console.log("Root route accessed");
    res.json({ message: "Welcome to the Inventory Management System API" });
});

// Routes
app.use('/api/inventory', inventoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reports', reportRoutes);

console.log("All routes are initialized.");


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});