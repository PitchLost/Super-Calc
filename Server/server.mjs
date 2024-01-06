import { Express } from 'express';

import { http } from 'http'
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' directory

// Handle incoming socket connections
io.on('connection', (socket) => {
  let user_id = socket.ip //! Not Functioning
  console.log('A user connected');

  // Handle when a user disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });})


// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
