import React from 'react';

import Messages from '../Messages';
import './Chat.css';

const Chat = () => (
  <div className="Chat">
    <div className="Chat-messages">
      <Messages />
    </div>
  </div>
);

export default Chat;
