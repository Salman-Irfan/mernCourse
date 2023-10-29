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
        type: Date
    },
    phoneNumber: {
        type: String,
    },
    country: {
        type: String
    },
    gender: {
        type: String,
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
    },
    profileImage: {
        type: String,
    }

});

module.exports = mongoose.model("User", UserSchema);