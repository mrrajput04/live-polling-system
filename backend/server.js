import express from "express";
import http from "http";
import { Server } from "socket.io";
import session from "express-session";
import cors from "cors";

import voteRoutes from "./routes/vote.routes.js";
import pollRoutes from "./routes/poll.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// Apply CORS
app.use(cors(corsOptions));

const server = http.createServer(app);

// Socket.io CORS
export const io = new Server(server, {
  cors: corsOptions,
});

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

app.use(express.json());

app.use(
  session({
    secret: "poll-secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  }),
);

app.use("/api/vote", voteRoutes);
app.use("/api/poll", pollRoutes);
app.use("/api/admin", adminRoutes);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
