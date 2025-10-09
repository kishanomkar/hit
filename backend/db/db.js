import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

function connect() {
    const connection = process.env.MONGO_URI;
    mongoose.connect(connection).then(()=>{
        console.log("Connected to Women MongoDB");
        

    }).catch((err)=>{
        console.log(`Error connecting to MongoDB: ${err.message}`);
    })
}

export default connect; 