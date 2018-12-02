import io from 'socket.io-client';
import socketConfig from '../config/socket.json';

const socket = io(socketConfig.path);

const socketService = {
	send : (top, middle, bottom) => {
		socket.emit('top', top);
		socket.emit('middle', middle);
		socket.emit('bottom', bottom);
	}
}

export default socketService;