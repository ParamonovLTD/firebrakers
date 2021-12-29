import React, { memo, FC, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import Footer from './shared/components/Footer';

import { PrivateComponent } from './pages/PrivateComponent';
import { Header } from './shared/components/Header';



import NotFoundPage from './pages/NotFoundPage';

declare global {
  interface Window { socket: any; }
}

const App: FC = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, [dispatch]);

  {/*eslint-disable*/}
  {/*useEffect(() => {*/}
  {/*  if (isAuthenticated && user && authToken) {*/}

  {/*    if (window.socket) return;*/}
  //     window.socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001', {
  //       query: { Token: authToken },
  //       path: '/io/',
  //       transports: ['websocket', 'polling'],
  //       extraHeaders: {
  //         // 'my-custom-header': '1234',
  //       },
  //       // extraHeaders: { 'authorization': `Bearer ${res.data.authToken}` },
  {/*    });*/}
  {/*    window.socket.on('connect', () => {*/}
  //       window.socket.on('join_room', (data: any) => {
  //         console.log('>>> join_room data = ', data);
  //         localStorage.setItem('currentRoom', data.room);
  {/*      });*/}

  {/*      window.socket.on('start_writing', (data: IStartWriting) => {*/}
  {/*        dispatch(addWriter(data.currentUser));*/}
  {/*      });*/}

  //       window.socket.on('end_writing', (data: IStartWriting) => {
  //         dispatch(removeWriter(data.currentUser?.id));
  //       });
  //
  //       window.socket.on('muted', (data: any) => {
  //         dispatch(muted(data));
  {/*      });*/}

  //       window.socket.on('leaved', (data: any) => {
  //         console.log('>>> leaved ');
  //         dispatch(leaved(data));
  //         // localStorage.removeItem('currentRoom');
  {/*      });*/}

  {/*      window.socket.on('update_messages_online_status', (data: any) => {*/}
  {/*        dispatch(changeOnlineStatus({*/}
  {/*          chatroomId: data.chatroomId,*/}
  {/*          accountId: data.accountId,*/}
  {/*          isOnline: true,*/}
  {/*        }));*/}
  {/*      });*/}
  //       window.socket.on('update_messages_offline_status', (data: any) => {
  //         dispatch(changeOnlineStatus({
  //           chatroomId: data.chatroomId,
  {/*          accountId: data.accountId,*/}
  {/*          isOnline: false,*/}
  {/*        }));*/}
  {/*      });*/}
  {/*      window.socket.on('new_message', (data: INewMessage) => {*/}
  {/*        console.log('>>> new message data = ', data);*/}
  {/*        if (data) {*/}
  {/*          dispatch(addMessageSocket(data));*/}
  {/*        }*/}
  //       });
  //       window.socket.on('new_chatroom', (data: INewChatroom) => {
  //         dispatch(addChatroomSuccess(data));
  {/*      });*/}
  //     });
  //     window.socket.on('disconnect', () => {
  //       console.log('>>> disconnect = ');
  //       // localStorage.removeItem('currentRoom');
  //       window.socket.emit('leave_all_rooms');
  //       window.socket.emit('user_offline');
  //     });
  //
  //     window.socket.emit('user_online');
  //   } else if (!isAuthenticated || !user || !authToken) {
  //     console.log('>>> not auth');
  //     if (window.socket) {
  //       window.socket.emit('leave_all_rooms');
  //       window.socket.emit('user_offline');
  //       window.socket.removeAllListeners();
  //
  //       delete window.socket;
  //     }
  //   }
  // }, [isAuthenticated, user, authToken]);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Content">
          <Switch>
            <Route path="/" component={PrivateComponent} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default memo(App);
