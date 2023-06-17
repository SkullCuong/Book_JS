const express = require("express");
const router = express.Router();
const supplierController = require("../../controller/supplierController");
router.post('/create',supplierController.createSupplier);
router.get('/',supplierController.getAll);
router.put("/update/:id", supplierController.updateSupplier);
router.delete("/delete/:id",supplierController.delete);
module.exports = router;