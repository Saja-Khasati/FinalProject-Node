import mongoose from "mongoose";
const connectDB = async () => {
  console.log("DB Connection String:", process.env.DB);

  try {
    await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB connection established");
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
  }
};



  
export default connectDB;

