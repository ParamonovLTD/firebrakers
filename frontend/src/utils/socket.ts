import { io } from 'socket.io-client';

// const Token: any = localStorage.getItem('authToken');
export const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001', {
  query: { Token: localStorage.getItem('authToken')! },
  path: '/io/',
  transports: ['websocket', 'polling'],
  extraHeaders: {
    // 'my-custom-header': '1234',
  },
  // extraHeaders: { 'authorization': `Bearer ${res.data.authToken}` },
});
