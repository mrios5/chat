const chatForm = document.getElementById('chat-form')
const socket = io();

socket.on('message', message =>{
 // console.log(message);
 outputMessage(message);

});

chatForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  const msg = e.target.elements.msg.value

  //console.log(msg)
  socket.emit('chatMessage', msg)
});


function outputMessage(msg){
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML=`<p class="meta"> Manuel<span>12:40</span></p>
  <p class="text"> 
   ${msg}
  </p>`

  document.querySelector('.chat-messages').appendChild(div);
}