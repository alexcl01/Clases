import mongoose from "npm:mongoose";
import { Data } from "../islands/FormData.tsx";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Data>({
  name: String,
  email: String,
  age: Number,
});

export default mongoose.model<Data>("Data", schema);