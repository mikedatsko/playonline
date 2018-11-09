import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './App.scss';
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
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logo} className="App-logo" alt="logo" />
            Header
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            Sidebar

            <div>Timestamp: {this.state.timestamp}</div>
          </div>
          <div className="col-md-9">
            {isShowPreloader ? <div>Loading...</div> : <div>Content</div>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            Footer 1
          </div>
          <div className="col-md-4">
            Footer 2
          </div>
          <div className="col-md-4">
            Footer 3
          </div>
        </div>
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
