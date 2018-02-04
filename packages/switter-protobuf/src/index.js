function serialize(payload) {
  return Buffer.from(JSON.stringify(payload));
}

function parse(buffer) {
  return JSON.parse(buffer.toString());
}

module.exports = {
  serialize,
  parse,
};
