import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../redux/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleClick() {
    let username = this.state.username;
    this.props.updateUsername(username);
  }

  render() {
    return (
        <div>
            <h1>Hello { this.props.username }!</h1>
            <form className='form-inline'>
              <div className='form-group'>
                <input type='text' className='form-control' id='username' placeholder='New username' value={this.state.value} onChange={this.handleChange} />
                <button type='button' className='btn btn-primary' onClick={this.handleClick}>Update</button>
              </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = {
  updateUsername
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);