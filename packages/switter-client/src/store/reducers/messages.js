import { ADD_MESSAGE } from 'switter-actions';

const messages = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return [
        ...state,
        payload,
      ];
    default:
      return state;
  }
};

export default messages;