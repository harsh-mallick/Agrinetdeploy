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
    email_transporter: {
        type: String,
        required: true,
    },
    tprice: {
        type: String,
    },
    type: {
        type: String,
        default: "Pending",
    }
})

const SellingRequest = mongoose.model('Transporting Request', userSchema);


module.exports = SellingRequest;