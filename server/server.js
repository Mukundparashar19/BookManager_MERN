const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT 
const myapp = express()
require('./database/connection')

// route 
const routeone = require('./routing/routeone')
const routetwo = require('./routing/routetwo')
const routethree = require('./routing/routethree')

// middleware 
myapp.use(cors())
myapp.use(express.json())
myapp.use(routeone)
myapp.use(routetwo)
myapp.use(routethree)

myapp.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})