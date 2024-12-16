import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (_req, res) => {
  res.send('Hello from Backend!');
});

io.on('connection', () => {
  console.log('a user connected');
});

server.listen(3001, () => {
  console.log('Backend listening on http://localhost:3001');
});
