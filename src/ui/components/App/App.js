import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as faker from 'faker';
import logo from '../../assets/images/logo.svg';
import './App.scss';
import { CommonActions } from '../../actions';
import services from '../../services';
import GameOver from '../GameOver/GameOver';

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
// let player;

class App extends Component {
  componentWillMount() {
    this.props.showPreloader();

    this.setState({
      timestamp: 0,
      player: {},
      points: 0
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
    const { setPlayer, setPoints, setTeams, setGameOver } = this.props;

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
      socket.emit('movement', {...movement, player: player});
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

      socket.emit('movement', {...movement, player: player});

      // if (!movement.left && !movement.up && !movement.right && !movement.down) {
      //   clearInterval(this.interval);
      //   socket.emit('movement', {...movement, id: this.player.id});
      // }
    });

    const player = JSON.parse(localStorage.getItem('player')) || {
      id: this.getId(),
      name: faker.name.firstName(),
      type: 'user',
      team: Number(Math.random() > 0.5)
    };

    setPlayer(player);
    socket.emit('new player', player);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.game = document.getElementById('game');
    const scale = window.devicePixelRatio;

    this.ctx = this.game.getContext('2d');
    this.game.style.width = this.width + 'px';
    this.game.style.height = this.height + 'px';

    this.game.width = this.width * scale;
    this.game.height = this.height * scale;

    this.ctx.scale(scale, scale);

    socket.on('new player confirm', player_ => {
      // console.log('player', player_, this.props.player);

      if (player_.id === this.props.player.id) {
        localStorage.setItem('player', JSON.stringify(player_));
        setPlayer(player_);
        setPoints(player_.points);
      }
    });

    socket.on('state', gameState => {
      // console.log('state', gameState);
      // this.setState({field: gameState.field});
      if (!gameState || !gameState.room || !gameState.field) {
        return;
      }

      setTeams(gameState.room.teams);
      this.draw(gameState.players, gameState.field, gameState.bases);
    });

    socket.on('game over', room => {
      // console.log('state', gameState);
      // this.setState({field: gameState.field});
      if (!room) {
        return;
      }

      setTeams(room.teams);
      setGameOver(true);
      // this.draw(gameState.players, gameState.field, gameState.bases);
    });
  }

  getId() {
    return btoa(new Date().getTime().toString()).replace(/=/g, '');
  }

  draw(players, field, bases) {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.strokeStyle = '#FF0000';
    this.ctx.strokeRect(field.x, field.y, field.width, field.height);

    for (let i = 0; i < bases.length; i++) {
      this.ctx.fillStyle = bases[i].team === 1
          ? 'darkred'
          : 'darkblue';
      this.ctx.beginPath();
      this.ctx.arc(bases[i].x, bases[i].y, bases[i].r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.font = '10px Arial';
      this.ctx.fillText(
        bases[i].name.substr(0, 10) + ': ' + bases[i].life,
        bases[i].x - 20,
        bases[i].team === 1 ? bases[i].y + 34 : bases[i].y - 24
      );
    }

    for (let i = 0; i < players.length; i++) {
      this.playerTmp = players[i];

      if (!this.playerTmp.isAlive) {
        continue;
      }

      this.ctx.fillStyle = this.playerTmp.type === 'bot'
        ? this.playerTmp.team === 1
          ? 'darkred'
          : 'darkblue'
        : this.playerTmp.team === 1
          ? 'red'
          : 'blue';
      this.ctx.beginPath();
      this.ctx.arc(this.playerTmp.x, this.playerTmp.y, this.playerTmp.r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.font = '10px Arial';
      this.ctx.fillText(
        this.playerTmp.name.substr(0, 10) + ': ' + this.playerTmp.life,
        this.playerTmp.x - 12,
        this.playerTmp.y - 12
      );
    }
  }

  clearRoom() {
    socket.emit('clear room', 'some room');
  }

  startGame() {
    socket.emit('start game', {roomName: 'some room', player: this.props.player});
  }

  restartGame() {
    this.clearRoom();
    this.startGame();
    this.props.setGameOver(false);
  }

  render() {
    const { isShowPreloader, player, points, teams, isGameOver } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logo} className="App-logo" alt="logo" />

            <div>Score: {points}</div>
            <div>Timestamp: {this.state.timestamp}</div>
            <span className="btn btn-outline-primary" onClick={() => this.clearRoom()}>Clear room</span>
            <span className="btn btn-outline-primary" onClick={() => this.startGame()}>Start game</span>

            {isShowPreloader ? <div>Loading...</div> : <div>Content</div>}

            <canvas id="game" />

            <div className="leaderboard row">
              {teams && teams.map((team, indexTeam) => (
                <div key={'team-' + indexTeam} className="col">
                  <table className={'table table-sm text-light ' + (indexTeam === 1 ? 'bg-danger' : 'bg-primary')}>
                    <thead>
                    <tr>
                      <th colSpan="3">{team.name}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {team.members.map((member, indexMember) => (
                      <tr key={'member-' + indexTeam + '-' + indexMember} className={player.id === member.id ? 'table-active' : ''}>
                        <td width="40">
                          {!member.isAlive ? <span className="icon-skeletor" /> : <span>&nbsp;</span>}
                        </td>
                        <td className="member-name">{member.name}</td>
                        <td className="member-points">{member.points}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            {isGameOver ? <GameOver click={() => this.restartGame()} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isShowPreloader: PropTypes.bool,
  player: PropTypes.object,
  points: PropTypes.number,
  teams: PropTypes.array,
  isGameOver: PropTypes.bool
};

const mapStateToProps = state => ({
  isShowPreloader: state.common.isShowPreloader,
  player: state.common.player,
  points: state.common.points,
  teams: state.common.teams,
  isGameOver: state.common.isGameOver
});
const mapDispatchToProps = dispatch => bindActionCreators({
  ...CommonActions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
