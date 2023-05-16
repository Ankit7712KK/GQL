const mongoose = require("mongoose");

const connectDB = async () => {
    

        const conn = await mongoose.connect('mongodb+srv://ankitkesarwani:ankit22@cluster0.4whyfyr.mongodb.net/mgmt_db?retryWrites=true&w=majority');
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    
       
};

module.exports = connectDB;
