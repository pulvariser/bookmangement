const express = require('express');
const router =express.Router()

const userController = require("../controllers/userController")
const booksController = require("../controllers/booksController")
const reviewController = require("../controllers/reviewController")

const auth = require("../middlewares/authentication")

router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)

router.post("/books",auth.isAuthenticate,auth.authorization,booksController.createBook)
router.get("/books",auth.isAuthenticate,booksController.getBooks)
router.get("/books/:bookId",auth.isAuthenticate,booksController.getBook)
router.put("/books/:bookId",auth.isAuthenticate,auth.authorization,booksController.updateBook)
router.delete("/books/:bookId",auth.isAuthenticate,auth.authorization,booksController.deleteBookById)


router.post("/books/:bookId/review", reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReviewById)

module.exports= router 

