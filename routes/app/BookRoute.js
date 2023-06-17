const express = require("express");
const router = express.Router();
const axios = require('axios')
const bookController = require("../../controller/userBookController");
router.get("/",bookController.get)
router.get("/create",bookController.viewCreate)
router.post("/create",bookController.create)
router.get("/update/:id",bookController.viewUpdate)
router.post("/update/:id",bookController.update)
router.post("/delete/:id",bookController.delete)
module.exports = router;