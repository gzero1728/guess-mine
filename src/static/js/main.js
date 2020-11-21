(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDMEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEN0MsZ0JBQ3dEQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQUQ5RSxzQkFDK0ZELElBRC9GO0FBR0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDSCxDQU5EOztBQVFBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjZCLE1BR3JCQyxLQUhxQixHQUdYRixLQUhXLENBR3JCRSxLQUhxQjtBQUk3Qiw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFFSCxDQVJEOztBQVVPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBMkI7QUFBQSxNQUF4QkQsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZmQsUUFBZSxRQUFmQSxRQUFlO0FBQ3ZERixFQUFBQSxTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FBVDtBQUNILENBRk07Ozs7QUFJUCxJQUFJSCxPQUFKLEVBQWE7QUFDVEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJZb3VcIn06PC9zcGFuPiAke3RleHR9XG4gICAgYDtcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSlcbn1cblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYXBwZW5kTXNnKHZhbHVlKTtcblxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+IHtcbiAgICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xufVxuXG5pZiAoc2VuZE1zZykge1xuICAgIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKVxufSJdfQ==
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets.js");

require("./login.js");

require("./chat.js");

require("./paint.js");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOGM0NTQyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0cy5qc1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9jaGF0LmpzXCI7XG5pbXBvcnQgXCIuL3BhaW50LmpzXCI7XG5cbiJdfQ==
},{"./chat.js":1,"./login.js":3,"./paint.js":5,"./sockets.js":7}],3:[function(require,module,exports){
"use strict";

var _require = require("./sockets"),
    initSockets = _require.initSockets;

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // socket 공유 (모든 파일에서 window를 통해서 socket에 접근할 수 있음)
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  initSockets(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0U29ja2V0cyIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztlQUF3QkEsT0FBTyxDQUFDLFdBQUQsQztJQUF2QkMsVyxZQUFBQSxXOztBQUVSLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUk7QUFDdEI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0FULEVBQUFBLFdBQVcsQ0FBQ2EsTUFBRCxDQUFYO0FBQ0gsQ0FMRDs7QUFPQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBR0QsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxDQUFDLEVBQUk7QUFDMUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRjBCLE1BR2xCcUIsS0FIa0IsR0FHUkQsS0FIUSxDQUdsQkMsS0FIa0I7QUFJMUJELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCbkIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0U29ja2V0cyB9ID0gcmVxdWlyZShcIi4vc29ja2V0c1wiKTtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5cclxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xyXG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XHJcblxyXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcclxuXHJcbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xyXG4gICAgLy8gc29ja2V0IOqzteycoCAo66qo65OgIO2MjOydvOyXkOyEnCB3aW5kb3frpbwg7Ya17ZW07IScIHNvY2tldOyXkCDsoJHqt7ztlaAg7IiYIOyeiOydjClcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XHJcbiAgICBpbml0U29ja2V0cyhzb2NrZXQpO1xyXG59XHJcblxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcclxufSBlbHNlIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gICAgbG9nSW4obmlja25hbWUpXHJcbn1cclxuXHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ0luKHZhbHVlKTtcclxufVxyXG5cclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuXHJcbiJdfQ==
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0gsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDekJYLGdCQUFnQixXQUFJVyxRQUFKLG1CQUE0QixrQkFBNUIsQ0FEUztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQzlCWCxnQkFBZ0IsV0FBSVcsUUFBSixpQkFBMEIsa0JBQTFCLENBRGM7QUFBQSxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PlxuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cbiAgICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnRgLCBcInJnYigyNTUsIDE0OSwgMClcIik7XG4iXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 500;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  return painting = false;
};

var startPainting = function startPainting() {
  return painting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJjdXJyZW50Q29sb3IiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUND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QTFCOzs7O0FBQ0EsSUFBTTJCLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBRzNCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVpQixJQUFJLENBQUNqQixLQUFELENBQW5CO0FBQUEsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XG5cbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcbmNvbnN0IENBTlZBU19TSVpFID0gNTAwO1xuXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcblxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbmN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xuY3R4LnN0cm9rZVN0eWxlID0gSU5JVElBTF9DT0xPUjtcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuY3R4LmxpbmVXaWR0aCA9IDIuNTtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5jb25zdCBzdG9wUGFpbnRpbmcgPSAoKSA9PiBwYWludGluZyA9IGZhbHNlO1xuXG5jb25zdCBzdGFydFBhaW50aW5nID0gKCkgPT4gcGFpbnRpbmcgPSB0cnVlO1xuXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xufTtcblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5LCBjb2xvciA9IG51bGwpID0+IHtcbiAgICBsZXQgY3VycmVudENvbG9yID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgIGlmIChjb2xvciAhPT0gbnVsbCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICB9XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xufTtcblxuY29uc3Qgb25Nb3VzZU1vdmUgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgaWYgKCFwYWludGluZykge1xuICAgICAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeCwgeSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHJva2VQYXRoKHgsIHkpO1xuICAgICAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xuICAgICAgICAgICAgeCwgeSxcbiAgICAgICAgICAgIGNvbG9yOiBjdHguc3Ryb2tlU3R5bGVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVDb2xvckNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG59XG5cbmNvbnN0IGhhbmRsZU1vZGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBmaWxsaW5nID0gZmFsc2U7XG4gICAgICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmlsbGluZyA9IHRydWU7XG4gICAgICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICAgIH1cbn1cblxuY29uc3QgZmlsbCA9IChjb2xvciA9IG51bGwpID0+IHtcbiAgICBsZXQgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcbiAgICBpZiAoY29sb3IgIT09IG51bGwpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIH1cbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbiAgICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xufVxuXG5jb25zdCBoYW5kbGVDYW52YXNDbGljayA9ICgpID0+IHtcbiAgICBpZiAoZmlsbGluZykge1xuICAgICAgICBmaWxsKCk7XG4gICAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7IGNvbG9yOiBjdHguZmlsbFN0eWxlIH0pXG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVDTSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmlmIChjYW52YXMpIHtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDTSk7XG59XG5cbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+XG4gICAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNvbG9yQ2xpY2spXG4pO1xuXG5pZiAobW9kZSkge1xuICAgIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGwoY29sb3IpOyJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return console.log(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLENBQWpCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBjb25zb2xlLmxvZyhzb2NrZXRzKTsiXX0=
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _chat = require("./chat.js");

var _notifications = require("./notifications.js");

var _paint = require("./paint.js");

var _players = require("./players.js");

// 백엔드와 프론트를 연결
// 이벤트 발생시 handleXX 함수를 실행시켜 프론트로 표시
var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTkE7QUFDQTtBQU9BLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsT0FBTyxFQUFJO0FBQUEsZ0JBQ2ZDLE1BRGU7QUFBQSxNQUMxQkMsTUFEMEIsV0FDMUJBLE1BRDBCO0FBRWxDTCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxzQkFBekI7QUFDQVosRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FoQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0FsQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDYyxZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0gsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIOuwseyXlOuTnOyZgCDtlITroaDtirjrpbwg7Jew6rKwXG4vLyDsnbTrsqTtirgg67Cc7IOd7IucIGhhbmRsZVhYIO2VqOyImOulvCDsi6Ttlonsi5zsvJwg7ZSE66Gg7Yq466GcIO2RnOyLnFxuXG5pbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdC5qc1wiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9ucy5qc1wiXG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZUZpbGxlZCwgaGFuZGxlU3Ryb2tlZFBhdGggfSBmcm9tIFwiLi9wYWludC5qc1wiO1xuaW1wb3J0IHsgaGFuZGxlUGxheWVyVXBkYXRlIH0gZnJvbSBcIi4vcGxheWVycy5qc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gYVNvY2tldCA9PiB7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgICBzb2NrZXQgPSBhU29ja2V0O1xuICAgIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gICAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XG4gICAgc29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xuICAgIHNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xuICAgIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgICBzb2NrZXQub24oZXZlbnRzLmZpbGxlZCwgaGFuZGxlRmlsbGVkKTtcbiAgICBzb2NrZXQub24oZXZlbnRzLnBsYXllclVwZGF0ZSwgaGFuZGxlUGxheWVyVXBkYXRlKVxufSJdfQ==
},{"./chat.js":1,"./notifications.js":4,"./paint.js":5,"./players.js":6}]},{},[2])