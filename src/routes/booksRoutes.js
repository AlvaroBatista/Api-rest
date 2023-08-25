import express from "express";
import BookController from "../controllers/bookController.js";

const router = express.Router();

router.get("/livros", BookController.searchBooks)
router.post("/livros", BookController.registerLivro)


export default router;
