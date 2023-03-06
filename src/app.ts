import db from "./config/dbConnect";
import routes from "./routes/index";
import express from "express";

db.on("error", console.log.bind(console, "Connection error"));

db.once("open", () => {
    console.log("Database connected!");
});

const app = express();

app.use(express.json());

routes(app);

export default app;