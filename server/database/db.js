import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const connection = async () => {
    const url = process.env.MONGODB_URL;

    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DB connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
}

export default connection;
