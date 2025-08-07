const mongoose = require('mongoose')

const bookdatapattern = mongoose.Schema({
    auther:String,
    condition:String,
    image:String,
    title:String
})

const myschimatype = mongoose.model('bookentry',bookdatapattern)

module.exports = myschimatype