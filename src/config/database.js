import mongoose from 'mongoose';

// Set strictQuery to false to suppress deprecation warning
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://negianshi5:anshi1234@anshika.h51fj.mongodb.net/inventory-management?retryWrites=true&w=majority&appName=anshika');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;