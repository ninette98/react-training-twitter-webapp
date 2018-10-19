import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTweets, addTweet } from '../redux/actions';
import Tweet from '../components/tweet';

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleClick() {
    let tweet = {
      username: this.props.username,
      content: this.state.content
    };
    this.props.addTweet(tweet);
  }

  componentDidMount() {
    this.props.getTweets();
  }

  render() {
    const { tweets } = this.props;
    return (
        <div>
          <h1>New tweet:</h1>
          <form className='form-inline'>
            <div className='form-group'>
              <input type='text' className='form-control' id='content' placeholder='Tweet content' value={this.state.content} onChange={this.handleChange} />
              <button type='button' className='btn btn-primary' onClick={this.handleClick}>Tweet!</button>
            </div>
          </form>
          <br/>
          <h1>Tweets:</h1>
          {
            tweets.length > 0 &&
            tweets.map(tweet => (
              <Tweet username={tweet.username} content={tweet.content} />
            ))
          }
          {
            tweets.length === 0 &&
            <h4>No tweet found!</h4>
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  tweets: state.tweets
});

const mapDispatchToProps = {
  getTweets,
  addTweet
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);