import express from "express";
import db from "./config/dbConnect.js"
import books from "./models/Book.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Error de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

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