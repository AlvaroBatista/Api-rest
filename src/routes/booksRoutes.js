import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/livros", BookController.searchBooks)
router.get("/livros/:id", BookController.searchBookById)
router.post("/livros", BookController.registerBook)
router.put("/livros/:id", BookController.updateBook)


export default router;
