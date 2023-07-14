import express from "express";
import { config } from "dotenv";
import { errorMiddelware } from "./middlewares/error.js";

config({
  path: "./data/config.env",
});

export const app = express();

// Using Middlewares
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("working");
});

// Importing routers here
import user from "./routes/user.js";


app.use("/api/v1/user", user);

// Using error middleware
app.use(errorMiddelware)
