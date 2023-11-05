const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        default: Date.now(),
    },
    phoneNumber: {
        type: String,
        default: "+923324713797"
    },
    country: {
        type: String,
        default: "PK"
    },
    gender: {
        type: String,
        default: "male"
    },
    interests: {
        type: Array,
        default: [],
    },
    hobbies: {
        type: Array,
        default: [],
    },
    skills: {
        type: Array,
        default: [],
    },
    experience: {
        type: Number,
        default: 0,
    },
    profileImage: {
        type: String,
        
    }

});

module.exports = mongoose.model("User", UserSchema);