import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    const { username, content } = this.props;
    return (
        <div className='alert alert-light'>
            <h4 className='alert-heading'>{username}</h4>
            <p>{content}</p>
        </div>
    );
  }
}

export default Tweet;