// routes/users.routes.js

const express = require('express');
const router = express.Router();

// Load User Functions
const {
    userRegister,
    userLogin,
} = require('../controllers/users.controller');

/**
 * @route POST /auth/register
 * @description register route
 * @access public
 */
router.post('/register', userRegister);

/**
 * @route POST /auth/login
 * @description login route
 * @access public
 */
 router.post('/login', userLogin);

module.exports = router;