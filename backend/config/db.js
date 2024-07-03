import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_PASSWORD)
    .then(() => console.log("DB connected"));
};
