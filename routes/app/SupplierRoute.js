const express = require("express");
const router = express.Router();
const axios = require('axios')
const supplierController = require("../../controller/userSupplierController");
router.get("/",supplierController.get)
router.get("/create",supplierController.viewCreate)
router.post("/create",supplierController.create)
router.get("/update/:id",supplierController.viewUpdate)
router.post("/update/:id",supplierController.update)
router.post("/delete/:id",supplierController.delete)
module.exports = router;