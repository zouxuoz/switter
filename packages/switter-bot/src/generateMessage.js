const faker = require('faker');

module.exports = function generateMessage() {
  return `
#### ${faker.lorem.sentence()},
##### ${faker.lorem.sentence()},

1. ${faker.lorem.sentence()};
2. ${faker.lorem.sentence()};
3. ${faker.lorem.sentence()}.

[*I'm an inline-style link*](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

${faker.lorem.text()}
`;
};
