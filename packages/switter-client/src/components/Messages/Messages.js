import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import Message from '../Message';
import './Messages.css';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = { touched: false };
  }

  componentDidUpdate() {
    if (!this.state.touched) {
      this.scrollToBottom();
    }
  }

  calcMaxScrollTop() {
    const { scrollHeight, clientHeight} = this.messagesRef;

    return scrollHeight - clientHeight;
  }

  scrollToBottom = () => {
    const messagesNode = ReactDOM.findDOMNode(this.messagesRef);

    const maxScrollTop = this.calcMaxScrollTop();

    messagesNode.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  onScroll = () => {
    const messagesNode = ReactDOM.findDOMNode(this.messagesRef);

    const maxScrollTop = this.calcMaxScrollTop();

    this.setState({ touched: messagesNode.scrollTop !== maxScrollTop });
  };

  render() {
    const { messages } = this.props;

    if (messages.length === 0) {
      return 'Waiting for the first message';
    }

    return (
      <div className="Messages" ref={(el) => { this.messagesRef = el; }} onScroll={this.onScroll}>
        <div className="Messages-list">
          {
            React.Children.toArray(
              messages.map((message) => <Message avatar="avatar" {...message} />)
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messages }) => ({
  messages,
});

export default connect(mapStateToProps)(Messages);
