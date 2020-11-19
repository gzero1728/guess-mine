const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = nickname => {
    // socket 공유 (모든 파일에서 window를 통해서 socket에 접근할 수 있음)
    window.socket = io("/");
    window.socket.emit(window.events.setNickname, { nickname });
}

if (nickname === null) {
    body.className = LOGGED_OUT;
} else {
    body.className = LOGGED_IN;
    logIn(nickname)
}


const handleFormSubmit = e => {
    e.preventDefault();
    const input = loginForm.querySelector("input");
    const { value } = input;
    input.value = "";
    localStorage.setItem(NICKNAME, value);
    body.className = LOGGED_IN;
    logIn(value);
}

if (loginForm) {
    loginForm.addEventListener("submit", handleFormSubmit);
}

