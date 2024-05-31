import mongoose from "mongoose";
const connectDataBase = async () => {
  try {
    const MONGODB_URI: string =
      process.env.MONGODB_URI ||
      "mongodb+srv://Munkhjin:99279353Aa!@cluster0.dhvxd3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  console.log(MONGODB_URI)

    await mongoose.connect(MONGODB_URI);
    console.log("success");
  } catch (error: unknown) {
    console.log(error);
    throw new Error("unsuccess");
  }
};
export { connectDataBase };
