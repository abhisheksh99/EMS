import connectDb from "./config/connectDb.js";
import User from "./models/userModel.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const userRegister = async () => {
    await connectDb();
    try {
        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "Admin"
        });
        await newUser.save();
        console.log("Admin user created successfully");
    } catch (error) {
        console.log(error);
    }
};

userRegister();