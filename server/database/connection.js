const mongoose = require('mongoose')
const url = process.env.DATABASE

mongoose.connect(url).then(()=>{
    console.log('DB connected');    
}).catch((error)=>{
    console.log(error);    
})

module.exports = mongoose