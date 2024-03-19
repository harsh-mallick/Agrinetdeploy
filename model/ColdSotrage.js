const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name_owner: {
        type: String,
        required: true,
    },
    name_storage: {
        type: String,
        required: true,
    },
    email_owner: {
        type: String,
        required: true,
    },
    mobile_owner: {
        type: String,
        required: true,
    },
    Address_storage: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    geocode: {
        type: Object,
    },
    popup: {
        type: String,
    },
    acccpt: {
        type: String,
        default: "Accepted"
    }
})

const ColdStorage = mongoose.model('Storing Faclilities', userSchema);


module.exports = ColdStorage;