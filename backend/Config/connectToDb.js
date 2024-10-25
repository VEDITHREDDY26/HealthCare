const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const connectToDb = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        
        await mongoose.connect("mongodb://localhost:27017/");


        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDb;