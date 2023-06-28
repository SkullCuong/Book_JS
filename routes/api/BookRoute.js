const express = require("express");
const router = express.Router();
const bookController = require("../../controller/bookController");
const middlewareController = require("../../controller/middlewareController")
router.get("/",middlewareController.verifyToken,bookController.getAll)
router.post("/create",bookController.createBook)
router.put("/update/:id",bookController.updateBook)
router.delete("/delete/:id",bookController.delete)
module.exports = router;