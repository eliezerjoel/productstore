import express from "express";
import mongoose from "mongoose"

export const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB: ${connect.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1); 
    }
}