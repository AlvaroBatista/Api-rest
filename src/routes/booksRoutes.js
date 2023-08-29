import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/livros", BookController.searchBooks)
.get("/livros/busca", BookController.searchBookByPublishingCompany)
.get("/livros/:id", BookController.searchBookById)
.post("/livros", BookController.registerBook)
.put("/livros/:id", BookController.updateBook)
.delete("/livros/:id", BookController.deleteBook)

export default router;
