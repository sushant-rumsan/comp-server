const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema({
    companyName:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    language:{
        type: Array,
        required: true
    },
    framework:{
        type: Array,
        required: false
    },
    phone:{
        type: Number,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },   
    website:{
        type: String,
        required: false
    },
    hiring:{
        type: Boolean,
        required: false
    },
    projects:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: false
        },
    post:{
        type: String,
        required: false
        }

}, {timestamps: true})


module.exports = mongoose.model('Company', companySchema)