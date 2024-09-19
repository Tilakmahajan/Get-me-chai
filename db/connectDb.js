import mongoose from "mongoose";
const connectDB = async () => {
    try {
      const db = await mongoose.connect(`mongodb://localhost:27017/`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  export default connectDB