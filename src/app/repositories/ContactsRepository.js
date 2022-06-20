const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Lucas souza",
    email: "lucasvini193@hotmail.com",
    phone: "123123132",
    category: v4(),
  },
  {
    id: v4(),
    name: "renato souza",
    email: "renato@hotmail.com",
    phone: "123123132",
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }
}
module.exports = new ContactsRepository();
