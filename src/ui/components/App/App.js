import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './App.css';
import { CommonActions } from '../../actions';
import services from '../../services';

class App extends Component {
  componentWillMount() {
    this.props.showPreloader();

    this.setState({
      timestamp: 0
    });

    services.socket
      .start()
      .then(timestamp => this.setState({timestamp}))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.props.hidePreloader();
  }

  render() {
    const { isShowPreloader } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div>Timestamp: {this.state.timestamp}</div>

        {isShowPreloader ? <div>Loading...</div> : null}
      </div>
    );
  }
}

App.propTypes = {
  isShowPreloader: PropTypes.bool
};

const mapStateToProps = state => ({
  isShowPreloader: state.common.isShowPreloader
});
const mapDispatchToProps = dispatch => bindActionCreators({
  ...CommonActions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
