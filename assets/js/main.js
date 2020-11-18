import handleMessageNofit from "./chat.js"

const socket = io("/");

function sendMessage(message) {
    socket.emit("newMessage", { message });
    console.log(`You: ${message}`)
}

function setNickname(nickname) {
    socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNofit)