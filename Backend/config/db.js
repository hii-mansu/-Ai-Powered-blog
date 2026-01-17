import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on('connected', ()=>{
            console.log('Mongoose connected to DB');
        })
        await mongoose.connect(process.env.MONGODBURI).then(
            ()=>{
                console.log('DB connected successfully');
            }
        )
    } catch (error) {
        console.log(error.message || error);
    }
}

export default connectDB;