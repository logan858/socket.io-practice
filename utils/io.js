let io = require("socket.io")() 

io.on("connection", function(socket) {
    socket.on("message", function(data) {
        io.emit("message", data)
    })
})

module.exports = io;