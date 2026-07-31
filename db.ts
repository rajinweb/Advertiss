import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        // 1. Attach listeners FIRST before initiating the connection
        mongoose.connection.on('connected', () => {
            console.log('Database connected successfully');
        });

        mongoose.connection.on('error', (error) => {
            console.error('Database connection error:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Database disconnected');
        });

        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        await mongoose.connect(`${uri}/taskMgt`);
      
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
}

export default connectDB;