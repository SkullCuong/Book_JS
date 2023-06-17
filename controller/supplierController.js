const db = require("../models/");
class supplierController {
    static async getAll(req, res) {
        try {
            const suppliers = await db.supplier.findAll();
            res.status(201).json(suppliers);
        } catch (err) {
            res.status(500).json({ message: 'Failed to create supplier' });
        }
    };
    static async updateSupplier(req, res) {
        try {
            const id = req.params.id;
            const name = req.body.name;
            await db.supplier.update({ name: name }, { where: { id: id } });
            const supplier = await db.supplier.findByPk(id);
            res.status(202).json({ supplier: supplier });
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'Failed to create supplier' });
        }
    };
    static async createSupplier(req, res) {
        const name = req.body.name;
        console.log(name);
        try {
            const supplier = await db.supplier.create({ name: name });
            res.status(201).json({ supplier: supplier });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create supplier' });
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedSupplierCount = await db.supplier.destroy({ where: { id: id } });

            if (deletedSupplierCount === 0) {
                return res.status(404).json({ message: 'Supplier not found' });
            }

            res.status(200).json({ message: 'Supplier deleted successfully' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Failed to delete supplier' });
        }
    }

}
module.exports = supplierController;