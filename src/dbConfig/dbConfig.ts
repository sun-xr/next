import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected to database");
    });
    connection.on("error", (error) => {
      console.log("MongoDB error connecting to database");
      console.log(error);
    });
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
};
