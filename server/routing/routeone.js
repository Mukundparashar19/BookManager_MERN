const express = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const mydatapattern = require('../schimas/schimaone')
const verifyToken = require('./midelware')

const myapp = express.Router()

require('dotenv').config()
const secret = process.env.JWT_SECRET

myapp.get('/',(req,res)=>{
    res.send('route one')
})

myapp.post('/register',async(req,res)=>{
 const {email,pho,pass} = req.body
 const hashedpass = await bcrypt.hash(pass,10)
 const postdata = new mydatapattern({email,pho,pass:hashedpass})
 await postdata.save()
 res.status(200).json({message:'data registered',status:201})
})

myapp.post('/login',async(req,res)=>{
    const {email ,pass} = req.body 
    const userRecord = await mydatapattern.findOne({email:email})
    if(userRecord){
        if(userRecord.email == email && await bcrypt.compare(pass,userRecord.pass)){
            const token = jwt.sign({email:userRecord.email,pass:userRecord.pass},secret,{ expiresIn:'1h'})
            res.status(200).json({message:'welcome',status:201,token:token})
        }else{
            res.status(200).json({message:'wrong Password',status:420})
        }
    }else{
        res.status(200).json({message:'user not found',status:404})
    }
})

module.exports = myapp