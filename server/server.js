const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let users = {};

function broadcastUsers() {
  const userList = Object.keys(users);
  for (const ws of Object.values(users)) {
    ws.send(JSON.stringify({ type: 'users', users: userList }));
  }
}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    let parsedMessage = JSON.parse(message);

    switch (parsedMessage.type) {
      case 'login':
        users[parsedMessage.username] = ws;
        ws.username = parsedMessage.username;
        ws.send(JSON.stringify({ type: 'login', success: true }));
        broadcastUsers();
        break;
      case 'message':
        let target = users[parsedMessage.target];
        if (target) {
          target.send(JSON.stringify({
            type: 'message',
            message: parsedMessage.message,
            from: ws.username
          }));
        } else {
          ws.send(JSON.stringify({ type: 'error', message: 'User not found' }));
        }
        break;
    }
  });

  ws.on('close', function close() {
    delete users[ws.username];
    broadcastUsers();
  });

  ws.send(JSON.stringify({ type: 'info', message: 'Connected to the server' }));
});

console.log('WebSocket server is running on ws://localhost:8080');
