const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {});
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // res.send("Hello World!");
})
app.get('/icon', (req, res) => {
    res.sendFile(__dirname + '/car-key.png');
    // res.send("Hello World!");
})

var tracking_data;

io.on("connection", (socket) => {
    socket.on("update_location", (data) => {
        tracking_data = data;
        io.sockets.emit("update_location", data);
    });
    socket.on("join_update_location", (data) => {
        socket.join("room:" + data.driver_id);
    });
    socket.on("update_location", (data) => {
        console.log(data);
        io.to("room:" + data.driver_id).emit("update_location_on_map", data);
        // io.to("room:" + data.driver_id).emit("update_location_on_map", data); test push
    });
    socket.on('disconnecting', () => {
        // console.log(socket.rooms);
        rooms = socket.rooms;
        rooms.forEach(element => {
            console.log(element);
            io.to(element).emit('disconnect_from_map', tracking_data)
        });
    });

});
httpServer.listen(3000);