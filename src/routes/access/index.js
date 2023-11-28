const express = require("express");
const { signUp } = require("../../controllers/access.controller");
const router = express.Router();

// sign-up shop
router.post("/shop/signup", signUp);

module.exports = router;
