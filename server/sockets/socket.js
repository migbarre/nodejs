const { io } = require('../server');
const { Users } = require('../classes/user');
const { sendMessage } = require('../utils/utils');

const users = new Users();

io.on('connection', (client) => {
    console.log(`User - ClientId: ${ client.id } connected`);

    client.on('joinChat', (user, callback) => {
        if (!user.name || !user.room) {
            return callback({
                success: false,
                message: 'Name and room are required'
            });
        }

        client.join(user.room);
        let contacts = users.addContact(client.id, user.name, user.room);
        client.broadcast.to(user.room).emit('contactList', users.getContactsByRoom(user.room));
        return callback(users.getContactsByRoom(user.room));
    });

    client.on('disconnect', () => {
        let contactDeleted = users.removeContact( client.id );

        client.broadcast.to(contactDeleted.room).emit('adminMessage', sendMessage('admin', `${contactDeleted.name} leaved.`));
        client.broadcast.to(contactDeleted.room).emit('contactList', users.getContactsByRoom(contactDeleted.room));
    })

    client.on('sendMessage', (data, callback) => {
        let user = users.getContact(client.id);
        let message = sendMessage( user.name, data.message );
        client.broadcast.to(user.room).emit('sendMessage', message);
        callback(message);
    })

    client.on('privateMessage', (data) => {
        let sender = users.getContact( client.id );
        client.broadcast.to(data.to).emit('privateMessage', sendMessage( sender.name, data.message));
    })
});