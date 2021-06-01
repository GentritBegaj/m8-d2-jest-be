import mongoose from "mongoose";
import ProductSchema from "./schema.js";

const { model } = mongoose;

export default model("products", ProductSchema);
