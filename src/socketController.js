// 백엔드: 서버와 클라이언트 사이 컨트롤 

import events from "./events.js";

// 접속되어 있는 유저를 표시하기 위해서 array를 만듦
let sockets = [];

const socketController = (socket, io) => {
    // broadcast 는 자신을 제외한 클라이언트에게 정보를 전달 
    const broadcast = (event, data) => socket.broadcast.emit(event, data);

    // 모든 유저에게 이벤트, 데이터 등 모든 정보를 전달
    const superBroadcast = (event, data) => io.emit(event, data);

    // playerUpdate 이벤트 발생시, sockets array(id, points, nickname)를 프론트로 전달
    const sendPlayerUpdate = () => superBroadcast(events.playerUpdate, { sockets });

    socket.on(events.setNickname, ({ nickname }) => {
        // socket 객체에 nickname 프로퍼티를 저장 
        socket.nickname = nickname;
        // sockets array에 id, points, nickname 프로퍼티 저장 
        sockets.push({ id: socket.id, points: 0, nickname: nickname })
        // newUser 이벤트 발생시 nickname 정보를 프론트로 전달 
        broadcast(events.newUser, { nickname });

        sendPlayerUpdate();
    });

    socket.on(events.disconnect, () => {
        // filter: aSocket은 함수의 X로, 함수내에서만 의미가 있음. filter내 프로퍼티와 이벤트가 발생한 socket.it를 비교해서 같지 않은 값만 새로운 array로 반환        
        sockets = sockets.filter(aSocket => aSocket.id !== socket.id);
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendPlayerUpdate();
    });

    socket.on(events.sendMsg, ({ message }) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname });
    });

    socket.on(events.beginPath, ({ x, y }) => {
        broadcast(events.beganPath, { x, y });
    });

    socket.on(events.strokePath, ({ x, y, color }) => {
        broadcast(events.strokedPath, { x, y, color })
    });

    socket.on(events.fill, ({ color }) => {
        broadcast(events.filled, { color })
    })
}

export default socketController;