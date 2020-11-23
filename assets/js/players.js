import { disableChat, enableChat } from "./chat";
import { disableCanvas, enableCanvas, hideControls, resetCanvas, showControls } from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const timer = document.getElementById("jsTimer");

const addPlayers = (players) => {
    board.innerHTML = "";
    players.forEach(player => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    })
}

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

const setNotifs = text => {
    notifs.innerText = "";
    notifs.innerText = text;
}

let runningTime = 0;

const countingTime = () => {
    setInterval(() => {
        if (runningTime < 30) {
            runningTime = runningTime + 1
            timer.innerText = `Remaing seconds is ${runningTime}`;
        }
    }, 1000)
};

const clearTime = () => {
    runningTime = 0;
    clearInterval(countingTime);
    timer.innerText = `Time is done`;
}


// 게임이 시작되면 리더만 그림을 그릴 수 있고, 나머지 유저는 그림을 그릴 수 없음 
export const handleGamsStarted = () => {
    setNotifs("Guess the answer!")
    disableCanvas();
    hideControls();
    enableChat();
    countingTime();
}

export const handleleaderNotif = ({ word }) => {
    enableCanvas();
    showControls();
    disableChat();
    setNotifs(`You are the leader, paint: ${word}`);
}

export const hanldeGameEnded = () => {
    setNotifs("Game ended.");
    disableCanvas();
    hideControls();
    resetCanvas();
    clearTime();
}

export const handleGameStarting = () => {
    setNotifs("Game will start soon!😎");
    clearTime();
}



