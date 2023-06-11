const mongoose = require('../db/conn')
const {Schema} = mongoose

const Pet = mongoose.model('Pet', new Schema({
    nome: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true 
    },
    wight: {
        type: Number,
        required: true 
    },
    cor: {
        type: String,
        required: true        
    },
    images: {
        type: Array,
        required: true 
    },
    available: {
        type: Boolena,
        required: true 
    },
    user: Object,
    adopter: Object

}, {timestamps: true},
))

module.exports - Pet