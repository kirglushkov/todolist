import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

import { auth, getUser, saveUser } from './Functions.js'

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('connect user', socket.id)
})

server.listen(port, () => {
    console.log(`listening on *${port}`)
})

// let name = "";
// let isAuthorizated = false;

// socket.on("click", async () => {
//   if (!isAuthorizated) return;
//   let user = await getUser(name);
//   console.log("[CLICK]");
//   user.notes.push({ text: "test", date: new Date() });
//   await saveUser({ id: name, data: user });
//   socket.emit("data", user.notes);
// });

// socket.on("login", async (get_name) => {
//   console.log("[LOGIN]");
//   name = get_name;
//   isAuthorizated = await auth(name);
//   if (isAuthorizated) {
//     socket.emit("authorizated");
//   }
// });
