const db = require("../models/");
class bookController {
    static async createBook(req, res) {
        const { name, price, author, supplierId } = req.body;
        try {
            const supplier = await db.supplier.findByPk(supplierId);
            if (!supplier) {
                return res.status(404).json({ message: 'Supplier not found' });
            }
            const book = await db.book.create({
                name: name, price: price, author: author, supplierId: supplierId
            })
            res.status(201).json({ book: book });
        } catch (error) {
            console.log(error)
        }

    }
    static async getAll(req,res){
        try{
            const books = await db.book.findAll({include: [db.supplier]});
            res.status(201).json( books );
        }catch(err){
            console.log(err)
        }
    }
    static async updateBook(req,res){
        try {
            const id = req.params.id;
            const { name, price, author } = req.body;
            await db.book.update({ name: name, price: price, author: author }, { where: { id: id } });
            const book = await db.book.findByPk(id, { include: db.supplier });
            res.status(202).json({ book: { id: book.id, name: book.name, price: book.price, author: book.author, supplier: book.supplier.name } });
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'Failed to create supplier' });
        }
    }
    static async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedBookCount = await db.book.destroy({ where: { id: id } });

            if (deletedBookCount === 0) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Failed to delete Book' });
        }
    }
}
module.exports = bookController