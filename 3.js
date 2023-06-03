const messages = document.getElementById("messages");
const inputMessage = document.getElementById("input-message");
const sendMessage = document.getElementById("send-message");
const sendLocation = document.getElementById("send-location");

const ws = new WebSocket("wss://echo-ws-service.herokuapp.com");

ws.onopen = () => {
console.log("Connected to the server");
};

ws.onmessage = (event) => {
const message = event.data;
if (message.includes("https://www.openstreetmap.org/")) {
messages.insertAdjacentHTML(
"beforeend",
<p><a href="${message}" target="_blank">Моя гео-локация</a></p>
);
} else {
messages.insertAdjacentHTML("beforeend", <p>${message}</p>);
}
};

sendMessage.addEventListener("click", () => {
const message = inputMessage.value;
messages.insertAdjacentHTML("beforeend", <p>${message}</p>);
ws.send(message);
inputMessage.value = "";
});

sendLocation.addEventListener("click", () => {
if (!navigator.geolocation) {
return alert("Geolocation не поддерживается в вашем браузере");
}
navigator.geolocation.getCurrentPosition((position) => {
const { longitude, latitude } = position.coords;
const locationUrl = https://www.openstreetmap.org/#map=18/${latitude}/${longitude};
messages.insertAdjacentHTML(
"beforeend",
<p><a href="${locationUrl}" target="_blank">Моя гео-локация</a></p>
);
ws.send(locationUrl);
}, () => {
alert("Не удалось получить вашу гео-локацию");
});
});