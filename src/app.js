import express from "express";

const app = express();

app.use(express.json())

const books = [
  {"id": 1, "title": "Senhor dos Anéis"},
  {"id": 2, "title": "O Hobbit"}
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

app.get('/livros', (req, res) => {
  res.status(200).json(books)
})

app.get('/livros/:id', (req, res) => {
  let index = searchBook(req.params.id);
  res.json(books[index]);
})

app.post('/livros', (req, res) => {
  books.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
  let index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
})

app.delete('/livros/:id', (req, res) => {
  let { id } = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
})

const searchBook = (id) => {
  return books.findIndex(book => book.id == id)
}

export default app