import mongoose from "mongoose";
import server from "./server.js";

mongoose
  .connect(process.env.ATLAS_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Atlas");
    server.listen(port, () => {
      console.log("Server listening on port", port);
    });
  })
  .catch((error) => console.log(error));
