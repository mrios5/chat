const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname,'public')));

io.on('connection', socket =>{
    console.log('Nueva conexion...');

    socket.emit('message',"Bienvenido al chat")
});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`el server esta escuchando por el puerto ${PORT}`))