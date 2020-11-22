import { disableChat, enableChat } from "./chat";
import { disableCanvas, enableCanvas, hideControls, resetCanvas, showControls } from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
    board.innerHTML = "";
    players.forEach(player => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    })
}

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const setNotifs = text => {
    notifs.innerText = "Waiting for other users";
    notifs.innerText = text;
}

// 게임이 시작되면 리더만 그림을 그릴 수 있고, 나머지 유저는 그림을 그릴 수 없음 
export const handleGamsStarted = () => {
    setNotifs("");
    disableCanvas();
    hideControls();
    enableChat();
}

export const handleleaderNotif = ({ word }) => {
    enableCanvas();
    showControls();
    disableChat();
    notifs.innerText = `You are the leader, paint: ${word}`;
}

export const hanldeGameEnded = () => {
    setNotifs("Game ended.");
    disableCanvas();
    hideControls();
    resetCanvas();
}

export const handleGameStarting = () => {
    setNotifs("Game will start soon!😎");
}