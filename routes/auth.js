const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

// getLogin
router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

//postLogin
router.post("/login", authController.postLogin);

router.post("/signup", authController.postSignup);

router.post("/logout", authController.postLogout);

module.exports = router;
