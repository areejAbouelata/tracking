const { io } = require('socket.io-client');
const socket = io('http://localhost:3000');
track = [
    [31.032873414467456, 31.397484299647214],
    [31.032652776563424, 31.39746284197584],
    [31.032514877613806, 31.397452113140158],
    [31.032450524702313, 31.397452113140158],
    [31.032321818748887, 31.397484299647214],
    [31.032147146105313, 31.39730190944056],
    [31.03200005310432, 31.39680838299905],
    [31.032055213006316, 31.396904942520216],
    [31.03186215320957, 31.39636850073596],
    [31.03167828637264, 31.395821330116018],
    [31.031485225811796, 31.395263430660396],
    [31.03072217309831, 31.394555327505174],
    [31.030501530210373, 31.394490954491065],
    [31.030290080296417, 31.39444803914832],
    [31.03006024290101, 31.394458767984013],
    [31.029968307787524, 31.394437310312636],
    [31.029940727236188, 31.394287106613042],
    [31.029968307787524, 31.39423346243462],
    [31.030005081843555, 31.393986699213865],
    [31.030584271353245, 31.394051072227974],
    [31.03097958915486, 31.394029614556608],
    [31.031007169405363, 31.394051072227974],
    [31.03119103753798, 31.39406180106366],
    [31.031365711935162, 31.394018885720918],

];
socket.emit('join_update_location', {
    driver_id: 789,
    lat: 30.9406974,
    lng: 31.2595749
});
socket.emit('update_location', {
    driver_id: 789,
    lat: track[0][0],
    lng: track[0][1]
});
setTimeout(() => {
    for (i = 0; i < track.length; i++) {
        socket.emit('update_location', {
            driver_id: 789,
            lat: track[i][0],
            lng: track[i][1]
        });

    }
}, 3000);