import mongoose from "mongoose";

const connection = async () => {
    const url = `mongodb+srv://xayne374:4WgFgraADCZN0AUs@cluster0.ftggc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DB connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
}

export default connection;
