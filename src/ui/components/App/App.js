import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './App.css';
import { CommonActions } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.showPreloader();
  }

  componentDidMount() {
    setTimeout(() => this.props.hidePreloader(), 5000);
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
