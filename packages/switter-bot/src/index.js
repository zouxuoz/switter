/* eslint-disable no-console */

const dgram = require('dgram');
const faker = require('faker');
const chalk = require('chalk');
const protobuf = require('switter-protobuf');
const generateMessage = require('./generateMessage');

const {
  SWITTER_SERVICE_HOST: HOST,
  SWITTER_SERVICE_PORT: PORT,
} = process.env;

const client = dgram.createSocket('udp4');

function tick() {
  const payload = protobuf.serialize({
    user: faker.name.findName(),
    body: generateMessage(),
    sentAt: Date.now(),
  });

  client.send(payload, 0, payload.length, PORT, HOST, (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log(`${chalk.cyan('[switter-bot]')} Message sent to ${HOST}:${PORT}`);
  });

  setTimeout(() => {
    tick();
  }, Math.round(Math.random() * 1500 + 500));
}

tick();
