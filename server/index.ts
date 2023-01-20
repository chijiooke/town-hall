const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {
  useNewURLParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('db connection successful')
}).catch(()=>{
    console.log('error')
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});

const killServer = () => (!!server ? server.close() : null);
process.on("uncaughtException", () => killServer());
process.on("SIGTERM", () => killServer());

