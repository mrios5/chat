const chatForm = document.getElementById('chat-form')
//Constante que toma el estilo del elemento de mi documento
const chatMessage = document.querySelector('.chat-messages')

const socket = io();

socket.on('message', message =>{
 // console.log(message);
 outputMessage(message);

 chatMessage.scrollTop = chatMessage.scrollHeight
});



chatForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  const msg = e.target.elements.msg.value

  //console.log(msg)
  socket.emit('chatMessage', msg)
  //limpiar input y mantenerlo ahi
  e.target.elements.msg.value= '';
  e.target.elements.msg.focus();
});




function outputMessage(msg){
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML=`<p class="meta"> ${msg.username}<span> ${msg.time}</span></p>
  <p class="text"> 
   ${msg.text}
  </p>`

  document.querySelector('.chat-messages').appendChild(div);
}