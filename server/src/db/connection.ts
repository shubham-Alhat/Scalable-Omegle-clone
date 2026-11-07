import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(
      `✅ database connected.. DB_HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MONGO_DB CONNECTION ERROR:", error);
    process.exit(1);
  }
};

export default connectToDB;
