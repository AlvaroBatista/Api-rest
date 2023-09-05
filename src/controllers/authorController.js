import authors from "../models/Author.js";

class AuthorController {

  static searchAuthors = async (req, res) => {
    try {
      const response = await authors.find();

      res.status(200).json(response);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static searchAuthorById = async (req, res) => {
    try {
      const { id } = req.params;

      const response = await authors.findById(id);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - Id do Autor não localizado.` });
    }
  };

  static registerAuthor = async (req, res) => {

    try {
      let author = new authors(req.body);

      const response = await author.save();

      res.status(201).send(response.toJSON());
    } catch (error) {
      res.status(500).send({ message: `${error.message} - falha ao cadastrar Autor.` });
    }
  };

  static updateAuthor = async (req, res) => {
    try {
      const { id } = req.params;

      await authors.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Autor atualizado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deleteAuthor = async (req, res) => {
    try {
      const { id } = req.params;

      await authors.findByIdAndDelete(id);

      res.status(200).send({ message: "Autor removido com sucesso" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

}

export default AuthorController;
