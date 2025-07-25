var jwt = require('jsonwebtoken');
const jwtSecret=process.env.jwt_Secret
const fetch = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Invalid Auth Token"})
    }
    try {
        const data = jwt.verify(token,jwtSecret);
        req.user = data.user
        next();
        
    } catch (error) {
        res.status(401).send({error:"Invalid Auth Token"})
    }

}
module.exports = fetch
