import books from "../models/Book.js";

class BookController {

    static searchBooks = (req, res) => {
        books.find((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

export default BookController