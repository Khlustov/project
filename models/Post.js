const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, default: 0, required: true},
    description: {type: String, required: true},
    contacts: {type: String, required: true},    
})

module.exports = model('Posts', schema)