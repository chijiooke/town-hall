import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use("/api/auth", userRoutes);

if (!!process.env.MONGO_URL) {
  mongoose.set("strictQuery", true);

  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected to db successfully");
  });
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
