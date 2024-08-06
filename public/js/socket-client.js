const lblOnline = document.querySelector("#lnlOnline")
const lblOffline = document.querySelector("#lnlOffline")
const txtMessage = document.querySelector("#txtMessage")
const btnSend = document.querySelector("#btnSend")

const socket = io();

socket.on('connect', () => {
    console.log('conenctado')
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    console.log('disconnect')
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
});

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const paypload = {
        mensaje:message,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    socket.emit('send-message',paypload);
})
