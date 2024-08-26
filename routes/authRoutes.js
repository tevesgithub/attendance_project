const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

//views
router.get('/login', (req, res) =>{res.render('login');});
router.get('/register', (req, res) =>{res.render('register');});

//controller action
router.post('/register', authController.register);

module.exports = router;