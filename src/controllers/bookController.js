import books from "../models/Book.js";

class BookController {

    static searchBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }

    static registerLivro = (req, res) => {
        let book = new books(req.body);
        
        book.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
        } else {
            res.status(201).send(book.toJSON())
        }
        })
    }
}

export default BookController