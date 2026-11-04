import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// .use() for setting up configurations and using middlewares

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json({ limit: "16kb" })); // We are accepting json at backend

// handling data in urls
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"))

export default { app };
