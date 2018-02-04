/* eslint-disable no-console */

const dgram = require('dgram');
const WebSocket = require('ws');
const chalk = require('chalk');
const protobuf = require('switter-protobuf');
const actions = require('switter-actions');

const {
  SWITTER_SERVICE_PORT,
  SWITTER_WS_PORT,
} = process.env;

const wss = new WebSocket.Server({ port: SWITTER_WS_PORT });

wss.on('connection', (ws) => {
  ws.on('error', (err) => {
    console.log('Errors should be handled', JSON.stringify(err, null, 2));
  });
});

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  const address = server.address();
  console.log(`${chalk.magenta('[switter-service]')} listening on ${address.address}:${address.port}`);
});

server.on('message', (payload, remote) => {
  console.log(`${chalk.magenta('[switter-service]')} received message from ${remote.address}:${remote.port}`);

  broadcast(actions.addMessage(protobuf.parse(payload)));
});

server.bind(SWITTER_SERVICE_PORT);
