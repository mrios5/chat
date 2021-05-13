const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io')
const formatMessage = require('./utils/messages');
const { format } = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botName='ChatBot';

app.use(express.static(path.join(__dirname,'public')));

io.on('connection', socket =>{
    console.log('Nueva conexion...');

    socket.emit('message',formatMessage(botName, 'Bienvenido al chat'))
    //Mensaje en broadcast a todos menos el nuevo
    socket.broadcast.emit('message',formatMessage(botName, 'an user just drop into the chat!'))



    socket.on('chatMessage', msg=>{
        console.log(msg);
        io.emit('message', formatMessage('User',msg));
    });
});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`el server esta escuchando por el puerto ${PORT}`))