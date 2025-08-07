const express = require('express')
const bookdatapattern = require('../schimas/schimatwo')
const verifyToken = require('./midelware')


const myapp = express.Router()


myapp.post('/bookpending',verifyToken,async(req,res)=>{ 
 const postdata = new bookdatapattern(req.body)
 await postdata.save()
 res.status(200).json({message:'request posted',status:201})
})

myapp.get('/pendinglist',async(req,res)=>{
    const allPending = await bookdatapattern.find()
    res.status(200).json({data:allPending,status:210,msg:'done'})
})


myapp.delete('/del/:id',async(req,res)=>{
    const {id} = req.params
    await bookdatapattern.findByIdAndDelete({_id:id})
    res.status(200).json({message:'deleted'})
})

module.exports = myapp