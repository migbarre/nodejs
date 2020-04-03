var socketChat = io();

var params = new URLSearchParams( window.location.search );

if (!params.has('name') || !params.has('room')) {
    window.location = 'index.html';
    throw new Error('Name and room are required');
}

var user = {
    name: params.get('name'),
    room: params.get('room')
};

socketChat.on('connect', function (){
    console.log('Connected to server');
    socketChat.emit('joinChat', user, function (resp) {
        renderRoomContacts(resp);
    });
})

socketChat.on('disconnect', function (){
    console.log('Disconnected to server');
})

socketChat.on('userConnected', function (message){
    console.log(message);
})

socketChat.on('sendMessage', function (message){
    renderMessage(message, false);
})

socketChat.on('adminMessage', function (message){
    renderMessage(message, false);
})

socketChat.on('contactList', function (contacts){
    renderRoomContacts(contacts);
})

socketChat.on('privateMessage', function (message){
    console.log('Private Message: ', message);
})
