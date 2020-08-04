const { Schema, model } = require('mongoose');

const emailSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    message: { type: String, required: true },
    status: { type: String, default: 'pending' },
    date: { type: Date, default: Date.now }
});

module.exports = model('Email', emailSchema);