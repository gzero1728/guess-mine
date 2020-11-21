import { disableCanvas, hideControls } from "./paint";

const board = document.getElementById("jsPBoard");

const addPlayers = (players) => {
    board.innerHTML = "";
    players.forEach(player => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    })
}

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

// 게임이 시작되면 리더만 그림을 그릴 수 있고, 나머지 유저는 그림을 그릴 수 없음 
export const handleGamsStarted = () => {
    disableCanvas();
    hideControls();
}