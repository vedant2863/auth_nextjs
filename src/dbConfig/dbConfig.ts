import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected sucessfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDb connection error, Please make sure MongoDb is running " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something get error! ");
    console.log(error);
  }
}
