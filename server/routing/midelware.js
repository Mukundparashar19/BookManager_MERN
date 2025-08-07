const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  require("dotenv").config();
  const secret = process.env.JWT_SECRET;

  let token = req.headers['x-access-token'] || req.headers['authorization']

  if(!token){
    return res.status(403).send('token is required')
  }
  if(token.startsWith('Bearer')){
    token = token.split(' ')[1]
  }
  try{
    const decoded = jwt.verify(token,secret)
    req.user = decoded
    next()
  }catch(err){
    console.error('JWT verification error:',err.name, err.message)
    res.status(420).json({message:'wrong token',status:421})
  }
}
module.exports = verifyToken