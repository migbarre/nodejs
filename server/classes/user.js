class Users {
    constructor() {
        this.contacts = [];
    }

    addContact(id, name, room) {
        let contact = {id, name, room};
        this.contacts.push(contact);
        return this.contacts;
    }

    removeContact(id) {
        let deletedContact = this.getContact(id);
        this.contacts = this.contacts.filter(contact => contact.id != id);
        return deletedContact;
    }

    getContact(id) {
        let contact = this.contacts.filter( contact => contact.id === id)[0];
        return contact;
    }

    getContacts() {
        return this.contacts;
    }

    getContactsByRoom(room) {
        let roomContacts = this.contacts.filter( contact => contact.room == room);
        return roomContacts;
    }
}

module.exports = {
    Users
}