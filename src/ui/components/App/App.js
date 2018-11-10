import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './App.scss';
import { CommonActions } from '../../actions';
import services from '../../services';

let movement = {
  up: false,
  down: false,
  left: false,
  right: false
};
const movementTmp = {
  up: false,
  down: false,
  left: false,
  right: false
};
const socket = services.socket.getSocket();
let player;

class App extends Component {
  componentWillMount() {
    this.props.showPreloader();

    this.setState({
      timestamp: 0
    });

    this.interval = undefined;
    this.game = undefined;
    this.ctx = undefined;
    this.width = 0;
    this.height = 0;
    this.player = undefined;
    this.playerTmp = undefined;

    // services.socket
    //   .start()
    //   .then(timestamp => this.setState({timestamp}))
    //   .catch(err => console.error(err));
  }

  componentDidMount() {
    this.props.hidePreloader();

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyA': // A
          movementTmp.left = true;
          break;
        case 'KeyW': // W
          movementTmp.up = true;
          break;
        case 'KeyD': // D
          movementTmp.right = true;
          break;
        case 'KeyS': // S
          movementTmp.down = true;
          break;
      }

      if (
        movement.left === movementTmp.left &&
        movement.up === movementTmp.up &&
        movement.right === movementTmp.right &&
        movement.down === movementTmp.down
      ) {
        return;
      }

      movement = {...movementTmp};

      // this.interval = setInterval(() => socket.emit('movement', {...movement, id: this.player.id}), 1000 / 60);
      socket.emit('movement', {...movement, id: player.id});
    });

    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'KeyA': // A
          movementTmp.left = false;
          break;
        case 'KeyW': // W
          movementTmp.up = false;
          break;
        case 'KeyD': // D
          movementTmp.right = false;
          break;
        case 'KeyS': // S
          movementTmp.down = false;
          break;
      }

      if (
        movement.left === movementTmp.left &&
        movement.up === movementTmp.up &&
        movement.right === movementTmp.right &&
        movement.down === movementTmp.down
      ) {
        return;
      }

      movement = {...movementTmp};

      socket.emit('movement', {...movement, id: player.id});

      // if (!movement.left && !movement.up && !movement.right && !movement.down) {
      //   clearInterval(this.interval);
      //   socket.emit('movement', {...movement, id: this.player.id});
      // }
    });

    socket.emit('new player');

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.game = document.getElementById('game');
    this.game.width = this.width;
    this.game.height = this.height;

    this.ctx = this.game.getContext('2d');

    socket.on('new player confirm', player_ => {
      console.log('player', player_);
      if (player) {
        return;
      }
      player = player_;
    });

    socket.on('state', gameState => {
      // console.log('state', gameState);
      // this.setState({field: gameState.field});
      this.draw(gameState.players, gameState.field);
    });
  }

  draw(players, field) {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.strokeStyle = '#FF0000';
    this.ctx.strokeRect(field.x, field.y, field.width, field.height);

    for (let i = 0; i < players.length; i++) {
      this.playerTmp = players[i];
      this.ctx.fillStyle = this.playerTmp.color;
      this.ctx.beginPath();
      this.ctx.arc(this.playerTmp.x, this.playerTmp.y, this.playerTmp.r, 0, 2 * Math.PI);
      this.ctx.fill();
    }
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

            <canvas id="game" />
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
