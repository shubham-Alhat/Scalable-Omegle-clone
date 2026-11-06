import express from "express";
import cors from "cors";
import http from "http";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const server = http.createServer(app);

app.get("/health", (req, res) => res.json({ status: "ok" }));

export default server;
