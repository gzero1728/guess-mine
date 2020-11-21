import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController.js";
import events from "./events.js";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

// 프론트에서 socket.evnet를 사용하기 위해 events 변수를 설정해줌 
app.get("/", (req, res) => res.render("home", { events: JSON.stringify(events) }));

const handleListening = () => console.log(`✅ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

// const io: full 서버라고 생각하면 됨, 연결된 모든 클라이언트에게 메시지를 보냄
// 변수 server를 만들어서 soketIO로 가져옴
const io = socketIO(server);

// socket은 htpp req 객체와 같음
io.on("connection", socket => socketController(socket, io));