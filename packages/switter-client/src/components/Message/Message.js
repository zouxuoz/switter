import React from 'react';
import Markdown from 'react-remarkable';
import moment from 'moment';

import avatars from '../../avatars';
import './Message.css';

const Message = ({ avatar, user, body, sentAt }) => (
  <div className="Message">
    <div className="Message-avatar">
      <img className="Message-avatarIcon" src={avatars[user.split('').map((a) => a.charCodeAt(0)).reduce((result, a) => a + result, 0) % 5]} alt="avatar" />
    </div>
    <div className="Message-content">
      <div className="Message-title">
        <span className="Message-user">{user}</span> commented {moment(sentAt).fromNow()}
      </div>
      <div className="Message-body">
        <Markdown source={body} />
      </div>
    </div>
  </div>
);

export default Message;
