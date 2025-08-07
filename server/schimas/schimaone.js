const mongoose = require('mongoose')

const mydatapattern = mongoose.Schema({
    email:String,
    pass:String,
    pho:String
})

const myschimatype = mongoose.model('userentry',mydatapattern)

module.exports = myschimatype
