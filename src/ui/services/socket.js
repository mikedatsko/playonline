import io from 'socket.io-client';
import config from '../config';

const socket = io(config.server);

class Socket {
  start() {
    socket.emit('subscribeToTimer', 1000);
    return new Promise((res, rej) => {
      socket.on('timer', timestamp => res(timestamp));
    });
  }

  getSocket() {
    return socket;
  }
}

export default new Socket();
