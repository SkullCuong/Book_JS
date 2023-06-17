const axios = require('axios');
const { response } = require('express');
const url = "http://localhost:3000/api/";
class userSupplierController {
    static async get(req, res) { 
       const data = await axios.get(url +"supplier");
       console.log(data)
       res.render("indexSupllier",{supplier:data.data})
        
    }
    static async create(req,res){
        const name = req.body;
        const response = await axios.post(url + 'supplier/create', name);
        res.redirect("/supplier")
    }
    static async viewCreate(req,res){
        res.render("supplierCreate");
    }
    static async viewUpdate(req,res){
        const id = req.params.id
        res.render("supplierUpdate",{id:id});
    }
    static async update(req,res){
        const {id,name} = req.body
        const response = await axios.put(url + 'supplier/update/'+id,{name});
        res.redirect("/supplier")
    }
    static async delete(req,res){
        const id = req.params.id
        const response = await axios.delete(url + 'supplier/delete/'+id);
        res.redirect("/supplier")
    }
}
module.exports = userSupplierController;