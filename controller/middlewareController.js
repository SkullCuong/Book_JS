const jwt = require("jsonwebtoken");
const middlewareController = {
    verifyToken :(req,res,next) =>{
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken,process.env.JWT_ACCESS_KEY,(err,user) =>{
                if(err){
                    res.status(403).json("not valid")
                }
                req.user = user;
                console.log(req.user)
                next();
            })
        }else{
            res.status(403).json("no No NO")
        }
    }
}
module.exports = middlewareController;