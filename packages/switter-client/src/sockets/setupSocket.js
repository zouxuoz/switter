import { ADD_MESSAGE, addMessage } from 'switter-actions';

const {
  REACT_APP_SWITTER_WS_HOST,
  REACT_APP_SWITTER_WS_PORT,
} = process.env;

const MAX_CONNECT_ATTEMTS = 10;

let attemts = 0;

const setupSocket = (dispatch) => {
  const socket = new WebSocket(`ws://${REACT_APP_SWITTER_WS_HOST}:${REACT_APP_SWITTER_WS_PORT}`);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)

    switch (data.type) {
      case ADD_MESSAGE:
        dispatch(addMessage(data.payload));
        break
      default:
        break
    }
  };

  socket.onerror = (err) => {
    attemts += 1;

    if (attemts < MAX_CONNECT_ATTEMTS) {
      setTimeout(() => { setupSocket(dispatch) }, 5000);
    }
  };

  return socket;
}

export default setupSocket;