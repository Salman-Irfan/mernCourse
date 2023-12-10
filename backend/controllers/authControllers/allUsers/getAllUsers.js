const express = require('express')
const User = require ('../../../models/usersSchema/UserModel.js')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.json(users)
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = getAllUsers