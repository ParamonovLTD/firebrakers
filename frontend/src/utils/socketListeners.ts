import { io } from 'socket.io-client';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { INewChatroom, INewMessage, IStartWriting } from '../interfaces/Socket';

// // import { INewChatroom, INewMessage, IStartWriting } from '../interfaces/Socket';
// // import { selectAuthState } from '../store/slices/authSlice';
// // import { addChatroomSuccess, addMessageSuccess, addWriter, changeOnlineStatus, removeWriter } from '../store/slices/chatSlice';

// // export const useSocketListeners = (socket: any) => {
// //   const { authToken } = useSelector(selectAuthState);
// //   const dispatch = useDispatch();
// //   useEffect(() => {

// //     console.log('>>> authToken = ', authToken);
// //     if (authToken) {
// //       socket.on('connect', () => {
// //         console.log('websocket connected');

// //         socket.on('join_room', (data: any) => {
// //           console.log('join_room to room event:', data);
// //           localStorage.setItem('currentRoom', data.room);
// //         });

// //         socket.on('start_writing', (data: IStartWriting) => {
// //           dispatch(addWriter(data.user));
// //         });

// //         socket.on('end_writing', (data: IStartWriting) => {
// //           dispatch(removeWriter(data.user?.id));
// //         });

// //         // socket.on('user_online', (data: any) => {
// //         //   console.log('>>> user_online data = ', data);
// //         // });
// //         socket.on('update_messages_online_status', (data: any) => {
// //           console.log('>>> update_messages_online_status data = ', data);
// //           dispatch(changeOnlineStatus({
// //             chatroomId: data.chatroomId,
// //             accountId: data.accountId,
// //             isOnline: true,
// //           }));
// //         });
// //         socket.on('update_messages_offline_status', (data: any) => {
// //           console.log('>>> update_messages_offline_status data = ', data);
// //           dispatch(changeOnlineStatus({
// //             chatroomId: data.chatroomId,
// //             accountId: data.accountId,
// //             isOnline: false,
// //           }));
// //         });
// //         socket.on('new_message', (data: INewMessage) => {
// //           console.log('socket new_message', data);
// //           if (data) {
// //             dispatch(addMessageSuccess(data));
// //           }
// //           // for (const message of data) {
// //           //   // dispatch(addMessage({
// //           //   //   currentChatroomId: message.chatroom_id,
// //           //   //   text: message.text,
// //           //   // }));

// //           //   if (!data[0]?.attachments) {
// //           //     dispatch(addMessageSuccess({ message: data }));
// //           //   } else {
// //           //     dispatch(uploadFileSuccess({
// //           //       message: data,
// //           //       uploadFiles: data[0].attachments,
// //           //     }));
// //           //   }
// //           // }
// //         });

// //         socket.on('new_chatroom', (data: INewChatroom) => {
// //           console.log('socket new_chatroom', data);
// //           dispatch(addChatroomSuccess(data));
// //           // store.dispatch(new ChatActions.AddChat(data));
// //         });

// //         // socket.on('deleted_chatroom', (data: any) => {
// //         //   console.log('!!!deleted_chatroom:', data);
// //         //   // store.dispatch(new ChatActions.DeleteChat(+data.chatroom));
// //         // });

// //         // socket.on('deleted_message', (data: any) => {
// //         //   console.log('!!!deleted_message:', data);
// //         // });

// //         // socket.on('updated_message', (data: any) => {
// //         //   console.log('!!!updated_message:', data);
// //         // });

// //         // socket.on('read_message', (data: any) => {
// //         //   console.log('!!!read_message:', data);
// //         // });
// //       });
// //       socket.on('disconnect', () => {
// //         console.log('Disconnected');
// //         socket.emit('leave_all_rooms');
// //         socket.emit('user_offline');
// //       });
// //     }
// //   }, [dispatch, authToken]);
// //   return socket;
// // };

// export const socketListeners = () => {

//   const socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001', {
//     query: { Token: localStorage.getItem('authToken')! },
//     path: '/io/',
//     transports: ['websocket', 'polling'],
//     extraHeaders: {
//       // 'my-custom-header': '1234',
//     },
//     // extraHeaders: { 'authorization': `Bearer ${res.data.authToken}` },
//   });
//   socket.on('connect', () => {
//     console.log('websocket connected');

//     socket.on('join_room', (data: any) => {
//       console.log('join_room to room event:', data);
//       localStorage.setItem('currentRoom', data.room);
//     });

//     socket.on('start_writing', (data: IStartWriting) => {
//       dispatch(addWriter(data.user));
//     });

//     socket.on('end_writing', (data: IStartWriting) => {
//       dispatch(removeWriter(data.user?.id));
//     });

//     // socket.on('user_online', (data: any) => {
//     //   console.log('>>> user_online data = ', data);
//     // });
//     socket.on('update_messages_online_status', (data: any) => {
//       console.log('>>> update_messages_online_status data = ', data);
//       dispatch(changeOnlineStatus({
//         chatroomId: data.chatroomId,
//         accountId: data.accountId,
//         isOnline: true,
//       }));
//     });
//     socket.on('update_messages_offline_status', (data: any) => {
//       console.log('>>> update_messages_offline_status data = ', data);
//       dispatch(changeOnlineStatus({
//         chatroomId: data.chatroomId,
//         accountId: data.accountId,
//         isOnline: false,
//       }));
//     });
//     socket.on('new_message', (data: INewMessage) => {
//       console.log('socket new_message', data);
//       if (data) {
//         dispatch(addMessageSuccess(data));
//       }
//       // for (const message of data) {
//       //   // dispatch(addMessage({
//       //   //   currentChatroomId: message.chatroom_id,
//       //   //   text: message.text,
//       //   // }));

//       //   if (!data[0]?.attachments) {
//       //     dispatch(addMessageSuccess({ message: data }));
//       //   } else {
//       //     dispatch(uploadFileSuccess({
//       //       message: data,
//       //       uploadFiles: data[0].attachments,
//       //     }));
//       //   }
//       // }
//     });

//     socket.on('new_chatroom', (data: INewChatroom) => {
//       console.log('socket new_chatroom', data);
//       dispatch(addChatroomSuccess(data));
//       // store.dispatch(new ChatActions.AddChat(data));
//     });

//     // socket.on('deleted_chatroom', (data: any) => {
//     //   console.log('!!!deleted_chatroom:', data);
//     //   // store.dispatch(new ChatActions.DeleteChat(+data.chatroom));
//     // });

//     // socket.on('deleted_message', (data: any) => {
//     //   console.log('!!!deleted_message:', data);
//     // });

//     // socket.on('updated_message', (data: any) => {
//     //   console.log('!!!updated_message:', data);
//     // });

//     // socket.on('read_message', (data: any) => {
//     //   console.log('!!!read_message:', data);
//     // });
//   });
//   socket.on('disconnect', () => {
//     console.log('Disconnected');
//     socket.emit('leave_all_rooms');
//     socket.emit('user_offline');
//   });
// };
