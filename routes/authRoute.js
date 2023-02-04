const express = require("express");
const { body } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.put('/signup', authController.putSignup);

module.exports = router;