const mongoose = require('mongoose')

function connected(){
    mongoose.connect(`${process.env.MONGO_URL}`,()=>{
        console.log('connected to database')
    })
}

module.exports = connected