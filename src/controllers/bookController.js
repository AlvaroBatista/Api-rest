import books from "../models/Book.js";

class BookController {

  static searchBooks = async (req, res) => {
    try {
      const response = await books.find()
        .populate("author")
        .exec();

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static searchBookById = async (req, res) => {
    try {
      const { id } = req.params;

      const response = await books.findById(id)
        .populate("author", "name")
        .exec();

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - Id do livro não localizado.` });
    }
  };

  static registerBook = async (req, res) => {
    try {
      let book = new books(req.body);

      const response = await book.save();

      res.status(201).send(response.toJSON());
    } catch (error) {
      res.status(500).send({ message: `${error.message} - falha ao cadastrar livro.` });
    }
  };

  static updateBook = async (req, res) => {
    try {
      const { id } = req.params;

      await books.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deleteBook = async (req, res) => {
    try {
      const { id } = req.params;

      await books.findByIdAndDelete(id);

      res.status(200).send({ message: "Livro removido com sucesso" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static searchBookByPublishingCompany = async (req, res) => {
    try {
      const { editora } = req.query;

      const response = await books.find({ "publishingCompany": editora });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

}

export default BookController;
