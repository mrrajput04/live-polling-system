import express from "express";
import http from "http";
import { Server } from "socket.io";
import session from "express-session";
import cors from "cors";
import voteRoutes from "./routes/vote.routes.js";
import pollRoutes from "./routes/poll.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: "poll-secret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use("/api/vote", voteRoutes);
app.use("/api/poll", pollRoutes);
app.use("/api/admin", adminRoutes);

server.listen(3000, () => {
  console.log("Server running");
});
