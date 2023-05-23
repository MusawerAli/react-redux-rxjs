import React, { Component } from 'react';
import './App.css';
import {attemptLogin} from './auth/auth.actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = {
  attemptLogin: payload => attemptLogin(payload)
};

const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
);

class App extends Component {
  state = {
    form: {
      username: '',
      password: ''
    }
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  attemptLogin = (e) => {
    this.props.attemptLogin({
      username: this.state.form.username,
      password: this.state.form.password
    });
    e.preventDefault();
  };

  handleInputChange({target: {name, value}}) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.attemptLogin}>
          <input type="text" name="username" value={this.state.form.username || '' } onChange={this.handleInputChange}/>
          <input type="password" name="password" value={this.state.form.password || ''} onChange={this.handleInputChange}/>
          <input type="submit" value={'Log In'}/>
        </form>
      </div>
    );
  }
}
const ConnectedComponent = connectToStore(App);

export default ConnectedComponent;

