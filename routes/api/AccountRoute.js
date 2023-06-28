const express = require("express");
const router = express.Router();
const accountController = require("../../controller/accountController");
router.post("/register",accountController.register)
router.post("/login",accountController.login)

module.exports = router;