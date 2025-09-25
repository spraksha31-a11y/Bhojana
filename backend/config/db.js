import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://raksha:rakshasp2004@cluster0.0mgz0om.mongodb.net/Bhojana"
    )
    .then(() => console.log("DB connected"));
};
