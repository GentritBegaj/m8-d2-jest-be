import express from "express";
import cors from "cors";
import productsRouter from "./services/products/index.js";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/test", (req, res) => {
  res.status(200).send({ message: "Test success!" });
});

server.use("/products", productsRouter);

export default server;
