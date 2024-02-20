const express = require("express");
const app = express();
const connectDB = require("./Db/connect");
require("dotenv").config();
const errorHandlerMiddleware = require("./middleware/errorHandler");
const notFoundMiddleware = require("./middleware/notFound");
const productsRouter = require("./routes/productsRouter");
require("express-async-errors")
const port = process.env.PORT || 2000;

app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Connected to Db.. and Server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
