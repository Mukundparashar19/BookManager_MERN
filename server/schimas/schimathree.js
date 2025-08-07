const mongoose = require('mongoose')

const approvedbookpattern = mongoose.Schema({
    auther:String,
    condition:String,
    image:String,
    title:String
})

const myschimatype = mongoose.model('approvedbook',approvedbookpattern)

module.exports = myschimatype