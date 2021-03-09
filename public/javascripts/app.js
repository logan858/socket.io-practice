let button = document.getElementById("submit")
let socket = io()

button.addEventListener("click", function(evnt) {
    let nameGiven = document.getElementById("name").value
    let message = document.getElementById("message").value
    document.getElementById("name").value = ""
    document.getElementById("message").value = ""
    if(nameGiven && message) {    
        socket.emit("message", {
            name: nameGiven,
            message: message,
            timestamp: new Date()
        })
    }
})

socket.on("message", function(data) {
    displayMessage(data)
})

function displayMessage({name, message, timestamp}) {
    let messageBox = document.createElement("DIV")
    messageBox.id = "messages-box"
    let newName = document.createElement("P")
    let timeStamp = document.createElement("P")
    timeStamp.id = "time-hover"
    newName.textContent = name + " : " + message;
    timeStamp.textContent = timestamp;
    messageBox.appendChild(timeStamp)
    messageBox.appendChild(newName)
    document.getElementById("box").appendChild(messageBox)
}