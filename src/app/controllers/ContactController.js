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

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }
}

module.exports = new ContactController();
