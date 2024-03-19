const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name_farmer: {
        type: String,
        required: true,
    },
    email_farmer: {
        type: String,
        required: true,
    },
    email_buyer: {
        type: String,
        required: true,
    },
    bprice: {
        type: String,
    },
    type: {
        type: String,
        default: "Pending",
    }
})

const SellingRequest = mongoose.model('Selling Request_buyer', userSchema);


module.exports = SellingRequest;