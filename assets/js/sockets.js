// 백엔드와 프론트를 연결
// 이벤트 발생시 handleXX 함수를 실행시켜 프론트로 표시
import { handleNewMessage } from "./chat.js";
import { handleDisconnected, handleNewUser } from "./notifications.js"
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint.js";
import { handleGameStarting, handleGamsStarted, handleleaderNotif, handlePlayerUpdate, hanldeGameEnded, handleTimerStarted, handleCountTime } from "./players.js";

let socket = null;

export const getSocket = () => socket;

export const initSockets = aSocket => {
    const { events } = window;
    socket = aSocket;
    socket.on(events.newUser, handleNewUser);
    socket.on(events.disconnected, handleDisconnected);
    socket.on(events.newMsg, handleNewMessage);
    socket.on(events.beganPath, handleBeganPath);
    socket.on(events.strokedPath, handleStrokedPath);
    socket.on(events.filled, handleFilled);
    socket.on(events.playerUpdate, handlePlayerUpdate);
    socket.on(events.gameStarted, handleGamsStarted);
    socket.on(events.leaderNotif, handleleaderNotif);
    socket.on(events.gameEnded, hanldeGameEnded);
    socket.on(events.gameStarting, handleGameStarting);
    socket.on(events.timerStarted, handleTimerStarted);
    socket.on(events.countTime, handleCountTime);
}