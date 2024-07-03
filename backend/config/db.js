import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://yasinnk15:Naduvilekovilakath1@cluster0.tjpgsze.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
