const ADD_MESSAGE = 'SWITTER_ACTIONS:ADD_MESSAGE';

const addMessage = payload => ({
  type: ADD_MESSAGE,
  payload,
});

module.exports = {
  ADD_MESSAGE,
  addMessage,
};
