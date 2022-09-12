import { createServer } from "http";
import { Server } from "socket.io";
import express from 'express';

import { auth, getUser, saveUser } from './Functions.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

io.on("connection", (socket) => {
    console.log("connect user");
    let name = "";
    let isAuthorizated = false;
    
    socket.on("click", async () => {
      if (!isAuthorizated) return;
      let user = await getUser(name);
      console.log("[CLICK]");
      user.notes.push({ text: "test", date: new Date() });
      await saveUser({ id: name, data: user });
      socket.emit("data", user.notes);
    });
  
    socket.on("login", async (get_name) => {
      console.log("[LOGIN]");
      name = get_name;
      isAuthorizated = await auth(name);
      if (isAuthorizated) {
        socket.emit("authorizated");
      }
    });
  });


