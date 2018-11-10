
const players = {};
players['some room'] = [];
let playerTmp;
const fps = 3;
const field = {
  width: 300,
  height: 300,
  x: 100,
  y: 200
};

function getId() {
  return Buffer.from(new Date().getTime().toString()).toString('base64').replace(/=/g, '');
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  const color = ['#'];
  for (let i = 0; i < 6; i++) {
    color.push(letters[Math.floor(Math.random() * 16)]);
  }
  return color.join('');
}

function addUser(io, type) {
  // console.log('add player');

  if (!players['some room']) {
    players['some room'] = [];
  }

  const newPlayer = {
    x: getRandomNumber(field.x + field.width / 2 - 50, field.x + field.width / 2 + 50),
    y: getRandomNumber(field.y, field.y + 50),
    r: 10,
    s: 2,
    color: type === 'bot' ? 'grey' : 'blue',
    id: getId(),
    left: false,
    up: false,
    right: false,
    down: true,
    room: 'some room',
    type: type
  };

  players['some room'].push(newPlayer);

  // console.log('new player', players);

  io.to('some room').emit('new player confirm', newPlayer);
  updateState(io);
}

function addBots(io, count) {
  for (let i = 0; i < count; i++) {
    addUser(io, 'bot');
  }
}

function updateState(io) {
  setInterval(function() {
    if (!players['some room'] || !players['some room'].length) {
      return;
    }

    for (let i = 0; i < players['some room'].length; i++) {
      playerTmp = players['some room'][i];

      if (playerTmp.left) {
        playerTmp.x -= playerTmp.s;
      }
      if (playerTmp.up) {
        playerTmp.y -= playerTmp.s;
      }
      if (playerTmp.right) {
        playerTmp.x += playerTmp.s;
      }
      if (playerTmp.down) {
        playerTmp.y += playerTmp.s;
      }

      if (playerTmp.x - playerTmp.r < field.x) {
        playerTmp.x = field.x + playerTmp.r;
      }

      if (playerTmp.x + playerTmp.r > field.x + field.width) {
        playerTmp.x = field.x + field.width - playerTmp.r;
      }

      if (playerTmp.y - playerTmp.r < field.y) {
        playerTmp.y = field.y + playerTmp.r;
      }

      if (playerTmp.y + playerTmp.r > field.y + field.height) {
        // playerTmp.y = field.y + field.height - playerTmp.r;
        players['some room'] = players['some room'].filter(player_ => player_.id !== playerTmp.id);
        addUser(io, playerTmp.type);
      }
    }

    io.to('some room').emit('state', {players: players['some room'], field: field});
  }, 1000 / fps);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  start: (io) => {
    io.on('connection', (socket) => {
      socket.join('some room');

      socket.on('new player', () => {
        addUser(io, 'user');
      });

      socket.on('movement', (data) => {
        // console.log(data, socket.id, players);

        if (!players['some room'] || !players['some room'].length) {
          return;
        }

        const player = players['some room'].filter(player_ => player_.id === data.id)[0];

        if (!player) {
          return;
        }

        player.left = data.left;
        player.up = data.up;
        player.right = data.right;
        player.down = data.down;
      });

      updateState(io);

      addBots(io, 5);
    });
  }
};
