const axios = require('axios');
const { response } = require('express');
const url = "http://localhost:3000/api/";
class userBookController {
    static async get(req, res) { 
       const data = await axios.get(url +"book");
       console.log(data)
       res.render("indexBook",{book:data.data})
        
    }
    static async create(req,res){
        const {name,price,author,supplierId} = req.body;
        const response = await axios.post(url + 'book/create', {name,price,author,supplierId} );
        res.redirect("/book")
    }
    static async viewCreate(req,res){
        const data = await axios.get(url +"supplier");
        res.render("bookCreate",{supplier:data.data})
       
    }
    static async viewUpdate(req,res){
        const id = req.params.id
        const data = await axios.get(url +"supplier");
        res.render("bookUpdate",{id:id,supplier:data.data});
    }
    static async update(req,res){
        const {id,name,price,author,supplierId} = req.body
        const response = await axios.put(url + 'book/update/'+id,{name,price,author,supplierId});
        res.redirect("/book")
    }
    static async delete(req,res){
        const id = req.params.id
        const response = await axios.delete(url + 'book/delete/'+id);
        res.redirect("/book")
    }
}
module.exports = userBookController;