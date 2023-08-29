import books from "../models/Book.js";

class BookController {

    static searchBooks = (req, res) => {
        books.find().populate('author').exec((err, books) => {
            res.status(200).json(books)
        })
    }

    static searchBookById = (req, res) => {
        const { id } = req.params

        books.findById(id).populate('author', 'name').exec((err, books) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
            } else {
                res.status(200).send(books);
            }
        })
    }

    static registerBook = (req, res) => {
        let book = new books(req.body)

        book.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
        } else {
            res.status(201).send(book.toJSON())
        }
        })
    }

    static updateBook = (req, res) => {
        const { id } = req.params

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteBook = (req, res) => {
        const { id } = req.params;

        books.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default BookController
