const express = require('express')
const approvedbookpattern = require('../schimas/schimathree')

const myapp = express.Router()

myapp.post('/finalbooks',async(req,res)=>{
    const postdata = new approvedbookpattern(req.body)
     await postdata.save()
     res.status(200).json({message:'final list posted',status:201})
})

myapp.get('/shortliated',async(req,res)=>{
    const list = await approvedbookpattern.find()
    res.status(200).json({message:'Poasted',status:210,data:list})
})


module.exports = myapp