let button = document.getElementById("submit")
let socket = io()

button.addEventListener("click", function(evnt) {
    let nameGiven = document.getElementById("name").value
    let message = document.getElementById("message").value
    socket.emit("message", {
        name: nameGiven,
        message: message,
    })
})

socket.on("message", function(data) {
    displayMessage(data)
})

function displayMessage({name, message}) {
    let newName = document.createElement("P")
    let newMsg = document.createElement("P")
    newName.textContent = name;
    newMsg.textContent = message;
    document.getElementById("box").appendChild(newName)
    document.getElementById("box").appendChild(newMsg)
}