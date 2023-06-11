const mongoose = require('mongoose')

async function db (){
    await mongoose.connect('mongodb://localhost:27017/pegapett')
    console.log('Banco conectado!')
}

db().catch((error)=>{console.log(error)})

module.exports = mongoose