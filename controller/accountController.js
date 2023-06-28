const db = require("../models/");
const brypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class accountController{
    static async register(req,res){
        const {username, password,admin} = req.body
        const salt = await brypt.genSalt(10)
        console.log(password)
        const hashed = await brypt.hash(password,salt)
        console.log(hashed)
        await db.user.create({username:username,password:hashed,admin})
        console.log("123123")
        res.status(201).json("Success")
    }
    static async login(req,res){
        const {username, password} = req.body
        const user = await db.user.findOne({ where: { username:username } })
        const validPassword = await brypt.compare(
            password,
            user.password
        );
        if(user && validPassword){
           const accessToken = jwt.sign({
                id:user.id,
                name:user.username,
                admin:user.admin  
            },
            process.env.JWT_ACCESS_KEY,{
                expiresIn:"60s"
            }
            );
            res.status(200).json({user,accessToken})
        }else{
            res.status(404).json("Login Fail")
        }
    }
}
module.exports = accountController