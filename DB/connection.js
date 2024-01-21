import mongoose from "mongoose";
const connectDB = async () => {
  console.log("DB Connection String:", "mongodb+srv://saja:SajaKha2001@atlascluster.5lummgr.mongodb.net/finalProject");

  try {
    await mongoose.connect("mongodb+srv://saja:SajaKha2001@atlascluster.5lummgr.mongodb.net/finalProject");
    console.log("DB connection established");
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
  }
};



  
export default connectDB;

