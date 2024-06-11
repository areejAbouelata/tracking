const { io } = require('socket.io-client');
const socket = io('http://localhost:3000');
track = [
    [31.0381357, 31.4091789],
    [31.01302639609217, 31.388185647126754],
    [31.01276893152402, 31.387831595558374],
    [31.011292934538464, 31.385994480196004],
    [31.00967454483692, 31.38542585191951],
    [31.010400984522313, 31.383891628456524],
    [31.01093431646314, 31.383494661546518],
    [31.011403278290192, 31.38322644066138],
    [31.011918214109173, 31.38281874491597]
]
socket.emit('join_update_location', {
    driver_id: 123,
    lat: 30.9406974,
    lng: 31.2595749
});
socket.emit('update_location', {
    driver_id: 123,
    lat: 30.9406974,
    lng: 31.2595749
});
setTimeout(() => {
    for (i = 0; i < track.length; i++) {
        socket.emit('update_location', {
            driver_id: 123,
            lat: track[i][0],
            lng: track[i][1]
        });

    }
}, 3000);