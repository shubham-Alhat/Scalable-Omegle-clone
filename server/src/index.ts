import dotenv from "dotenv";
dotenv.config();

import server from "./app.js";
// this will create a connection to redis
import redis from "./redis/redis.js";
import connectToDB from "./db/connection.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8080;

const shutdown = async (signal: string, code: number) => {
  console.log(`\n Received ${signal}. Starting graceful shutdown...`);

  // stop accepting new requests
  server.close(() => {
    console.log("http server is closed.");
  });

  try {
    await redis.quit();
    await mongoose.disconnect();
    console.log(`⛁ DB connection is closed.`);
    process.exit(code);
  } catch (error) {
    console.error("Error during shutdown: ", error);
    process.exit(1);
  }
};

// hit Ctrl+C in terminal
process.on("SIGINT", () => shutdown("SIGINT", 0));

// Docker/Kubernetes tells the server to stop (Default stop signal)
process.on("SIGTERM", () => shutdown("SIGTERM", 0));

const startServer = async () => {
  try {
    await connectToDB();
    server.listen(PORT, () => {
      console.log(`🖥 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Error while starting server : `, error);
    process.exit(1);
  }
};

startServer();
