const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userRegisterController = require("../../controllers/authControllers/userRegisterController");
const multer = require("multer");
const path = require("path");
const userLoginController = require("../../controllers/authControllers/userLoginController");
const getAllUsers = require("../../controllers/authControllers/allUsers/getAllUsers");
const requireSignIn = require("../../middlewares/authMiddleware");
const isAdmin = require("../../middlewares/isAdmin");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});


let uploadProfileImage = multer({
    storage: storage,
}).single("profileImage")

// user register route
router.post("/register", uploadProfileImage, userRegisterController );
// user login route
router.post("/login", userLoginController );

router.get('/all-users', requireSignIn, isAdmin, getAllUsers)

module.exports = router;

