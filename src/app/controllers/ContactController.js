const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    // listar registros

    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // obter um registo
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: "user not found" });
    }

    response.json(contact);
  }

  async delete(request, response) {
    // deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: "user not found" });
    }

    await ContactsRepository.delete(id);

    // 204 no content
    response.sendStatus(204);
  }

  async store(request, response) {
    // criar um novo contact
    const { name, email, phone, category } = request.body;

    if (!name) {
      return response.status(400).json({ error: "name is required" });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response
        .status(400)
        .json({ error: "this E-mail is already been taken " });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category,
    });

    response.json(contact);
  }

  update() {
    // editar um registro
  }
}

module.exports = new ContactController();
