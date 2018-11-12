const faker = require('faker');

// const players = {};
// players['some room'] = [];
let playerTmp;
const fps = 60;
const field = {
  width: 300,
  height: 300,
  x: 100,
  y: 200
};
const rooms = [
  {
    name: 'some room',
    isActive: true,
    teams: [
      {
        name: 'Team 1',
        members: [],
        base: {
          level: 1,
          life: 1000,
          r: 20,
          x: field.x + field.width / 2,
          y: field.y + 20
        }
      },
      {
        name: 'Team 2',
        members: [],
        base: {
          level: 1,
          life: 1000,
          r: 20,
          x: field.x + field.width / 2,
          y: field.y + field.height - 20
        }
      }
    ]
  }
];
let roomTmp;

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

function addRoom(io) {
  const room = {
    name: getId(),
    isActive: true,
    teams: [
      {
        name: 'Team 1',
        members: [],
        base: {
          level: 1,
          life: 1000,
          r: 20,
          x: field.x + field.width / 2,
          y: field.y + 20
        }
      },
      {
        name: 'Team 2',
        members: [],
        base: {
          level: 1,
          life: 1000,
          r: 20,
          x: field.x + field.width / 2,
          y: field.y + field.height - 20
        }
      }
    ]
  };
  rooms.push(room);
  // io.to(room.name).emit('new player reject', player);
}

function addUser(io, roomName, player, isNew) {
  // console.log('add player');

  const room = rooms.filter(room_ => room_.name === roomName)[0];

  if (!room) {
    io.to(roomName).emit('new player reject', player);
    return;
  }

  const members = [].concat.apply([], room.teams.map(team => team.members.map(member => member)));

  // console.log('members', members);

  if (members.filter(player_ => player_.id === player.id).length) {
    return;
  }

  const team = player.team;
  const newPosition = getNewPosition(team);

  const newPlayer = {
    x: newPosition.x,
    y: newPosition.y,
    r: 10,
    s: 1,
    id: player.id || getId(),
    left: false,
    up: false,
    right: false,
    down: false,
    room: roomName,
    team: team,
    type: player.type,
    name: player.id ? player.name : faker.name.firstName(),
    points: isNew ? player.points + 1 : 0,
    isAlive: true,
    attack: 1,
    life: 100,
    lifeDefault: 100
  };

  room.teams[team].members.push(newPlayer);
  io.to(roomName).emit('new player confirm', newPlayer);
}

function addBots(io, team, count) {
  for (let i = 0; i < count; i++) {
    addUser(io, 'some room', {type: 'bot', team: team});
  }
}

function sortPoints() {
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].teams.length; j++) {
      rooms[i].teams[j].members.sort((a, b) => {
        if (a.points < b.points) {
          return 1;
        } else if (a.points > b.points) {
          return -1;
        }
        return 0;
      });
    }
  }
}

function dieUser(player) {
  if (player.isAlive) {
    return;
  }

  let player_;

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].teams.length; j++) {
      for (let k = 0; k < rooms[i].teams[j].members.length; k++) {
        if (rooms[i].teams[j].members[k].id === player.id) {
          player_ = rooms[i].teams[j].members[k];
        }
      }
    }
  }

  const newPosition = getNewPosition(player_.team);
  player_.x = newPosition.x;
  player_.y = newPosition.y;
  player_.life = player_.lifeDefault;

  setTimeout(function() {
    player_.isAlive = true;
  }, 2000);
}

function getNewPosition(team) {
  return {
    x: getRandomNumber(field.x + field.width / 2 - 150, field.x + field.width / 2 + 150),
    y: getRandomNumber(team === 1 ? field.y + field.height - 50 : field.y + 50, team === 1 ? field.y + field.height - 100 : field.y + 100)
  }
}

function attackBase(io, roomName, base, player) {
  base.life = base.life - player.attack;

  if (base.life <= 0) {
    const room = rooms.filter(room_ => room_.name === roomName)[0];

    if (!room) {
      return;
    }

    room.isActive = false;
    io.to(roomName).emit('game over', room);
  }
}

function attackMember(io, roomName, member, player) {
  member.life = member.life - player.attack;

  if (member.life <= 0) {
    member.isAlive = false;
    dieUser(member);
    player.points = player.points + 1;
    sortPoints();
  }
}

function updateState(io) {
  // let playerTmp;
  let angle;
  let dx, dy;
  let opponentTeam;
  let opponentBase;
  let opponentMember;
  let isOpponentMemberAttacked;
  let playerTmpX, playerTmpY;
  let distanceX, distanceY, distance, addedRadius;

  for (let i = 0; i < rooms.length; i++) {
    if (!rooms[i].isActive) {
      continue;
    }

    for (let j = 0; j < rooms[i].teams.length; j++) {
      for (let k = 0; k < rooms[i].teams[j].members.length; k++) {
        playerTmp = rooms[i].teams[j].members[k];

        if (!playerTmp.isAlive) {
          continue;
        }

        opponentTeam = playerTmp.team === 1 ? 0 : 1;
        opponentBase = rooms[i].teams[opponentTeam].base;
        playerTmpX = playerTmp.x;
        playerTmpY = playerTmp.y;
        isOpponentMemberAttacked = false;

        if (playerTmp.type === 'bot') {
          dx = opponentBase.x - playerTmp.x;
          dy = opponentBase.y - playerTmp.y;
          angle = Math.atan2(dy, dx);
          playerTmpX = playerTmp.x + playerTmp.s * Math.cos(angle);
          playerTmpY = playerTmp.y + playerTmp.s * Math.sin(angle);
        } else {
          if (playerTmp.left) {
            playerTmpX -= playerTmp.s;
          }
          if (playerTmp.up) {
            playerTmpY -= playerTmp.s;
          }
          if (playerTmp.right) {
            playerTmpX += playerTmp.s;
          }
          if (playerTmp.down) {
            playerTmpY += playerTmp.s;
          }
        }


        if (playerTmpX - playerTmp.r < field.x) {
          playerTmpX = field.x + playerTmp.r;
        }

        if (playerTmpX + playerTmp.r > field.x + field.width) {
          playerTmpX = field.x + field.width - playerTmp.r;
        }

        if (playerTmpY - playerTmp.r < field.y) {
          playerTmpY = field.y + playerTmp.r;
        }

        if (playerTmpY + playerTmp.r > field.y + field.height) {
          playerTmpY = field.y + field.height - playerTmp.r;
        }


        distanceX = playerTmpX - opponentBase.x;
        distanceY = playerTmpY - opponentBase.y;
        distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        addedRadius = playerTmp.r + opponentBase.r;

        if (distance < addedRadius) {
          attackBase(io, rooms[i].name, opponentBase, playerTmp);
          continue;
        }

        for (let z = 0; z < rooms[i].teams[opponentTeam].members.length; z++) {
          opponentMember = rooms[i].teams[opponentTeam].members[z];

          if (!opponentMember.isAlive) {
            continue;
          }

          distanceX = playerTmpX - opponentMember.x;
          distanceY = playerTmpY - opponentMember.y;
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          addedRadius = playerTmp.r + opponentMember.r;

          if (distance < addedRadius) {
            attackMember(io, rooms[i].name, opponentMember, playerTmp);
            isOpponentMemberAttacked = true;
          }
        }

        if (isOpponentMemberAttacked) {
          continue;
        }

        playerTmp.x = playerTmpX;
        playerTmp.y = playerTmpY;
      }
    }
  }
}

function startInterval(io) {
  setInterval(function() {
    updateState(io);

    roomTmp = rooms.filter(room => room.name === 'some room')[0];

    if (!roomTmp || !roomTmp.isActive) {
      return;
    }

    io.to('some room').emit('state', {
      room: roomTmp,
      players: [].concat.apply([], roomTmp.teams.map(team => team.members.map(member => member))),
      field: field,
      bases: roomTmp.teams.map((team, indexTeam) => ({...team.base, team: indexTeam, name: team.name}))
    });
  }, 1000 / fps);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  start: (io) => {
    io.on('connection', (socket) => {
      socket.join('some room');

      socket.on('new player', (player) => {
        addUser(io, 'some room', player || {type: 'user', team: Number(Math.random() > 0.5)});
      });

      socket.on('movement', (data) => {
        // console.log(data, socket.id, players);

        if (!data.player || !data.player.room) {
          return;
        }

        const room = rooms.filter(room_ => room_.name === data.player.room)[0];

        if (!room || !room.teams[data.player.team]) {
          return;
        }

        const player = room.teams[data.player.team].members.filter(player_ => player_.id === data.player.id)[0];

        if (!player) {
          return;
        }

        player.left = data.left;
        player.up = data.up;
        player.right = data.right;
        player.down = data.down;
      });

      socket.on('clear room', roomName => {
        const room = rooms.filter(room_ => room_.name === roomName)[0];

        if (!room) {
          return;
        }

        room.teams.forEach(team => {
          team.members = [];
        });
        room.isActive = true;
      });

      socket.on('start game', data => {
        const room = rooms.filter(room_ => room_.name === data.roomName)[0];

        if (!room) {
          return;
        }

        room.isActive = true;
        addUser(io, data.roomName, data.player);
        addBots(io, 0, 2);
        addBots(io, 1, 2);
      });

      addBots(io, 0, 2);
      addBots(io, 1, 2);
    });

    startInterval(io);
  }
};
