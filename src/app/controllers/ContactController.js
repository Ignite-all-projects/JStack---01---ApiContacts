class ContactController {
  index(request, response) {
    // listar registros
    response.send("Hello world");
  }

  show() {
    // obter um registo
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
