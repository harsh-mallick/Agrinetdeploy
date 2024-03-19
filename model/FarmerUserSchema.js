const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name_farmer: {
        type: String,
        required: true,
    },
    aadharnumber: {
        type: String,
        required: true,
    },
    locality: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        allowedValues: ['Farmer', 'Buyer', 'Transporter']
    },
    Crptype: {
        type: String,
        default: "Not set by user",
    },
    offerprice: {
        type: String,
        default: "Not set by user",
    },

    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
})





userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password + "23945", 12)
    }
    next();
})


userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
        next()
    } catch (error) {
        console.log(error)
    }
}

const Farmer = mongoose.model('Farmer_Register', userSchema);


module.exports = Farmer;