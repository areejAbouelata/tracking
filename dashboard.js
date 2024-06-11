const { io } = require('socket.io-client');
const socket = io('http://localhost:3000');
socket.on('dashboard_update_location', (data) => {
    console.log(data);
});
socket.on("update_location", (data) => {
    console.log(data.driver_id);
});